from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
from django.contrib.auth.models import User
from .models import Product, ProductImage, Customer, Order, OrderItem
import json
from django.views.decorators.http import require_GET
from django.forms.models import model_to_dict

@csrf_exempt
def upload_image(request):
    if request.method == "POST":
        images = request.FILES.getlist("images")
        if not images:
            # fallback: support single 'image' key for backward compatibility
            image = request.FILES.get("image")
            if image:
                file_path = default_storage.save(f"products/{image.name}", image)
                image_url = default_storage.url(file_path)
                return JsonResponse({"image_urls": [image_url]})
            return JsonResponse({"error": "No images provided"}, status=400)
        
        image_urls = []
        for img in images:
            file_path = default_storage.save(f"products/{img.name}", img)
            image_url = default_storage.url(file_path)
            image_urls.append(image_url)
        return JsonResponse({"image_urls": image_urls})
    return JsonResponse({"error": "No images provided"}, status=400)

@csrf_exempt
def add_product(request):
    # Receives product data via POST (JSON), creates product & product images.
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            product = Product.objects.create(
                name=data["name"],
                description=data.get("description", ""),
                price=data["price"],
                original_price=data.get("original_price"),
                in_stock=data["in_stock"],
                bestseller=data.get("bestseller", False),
                rating=data.get("rating", 0),
                reviews=data.get("reviews", 0),
                sizes=data.get("sizes", []),
                colors=data.get("colors", []),
            )
            # Save images from data['images'] (list of URLs)
            for img_url in data.get("images", []):
                ProductImage.objects.create(product=product, image=img_url)
            return JsonResponse({"status": "ok", "product_id": product.id})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Only POST allowed"}, status=405)

@csrf_exempt
def add_order(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            # Assuming the request body contains necessary order information
            user = User.objects.get(id=data['user_id'])  # Assuming user_id is passed
            order = Order.objects.create(
                user=user,
                order_number=data['order_number'],
                status=data.get('status', 'Pending'),  # Default status
                total=data['total'],
                paid=data.get('paid', False)  # Default paid status
            )

            # Create OrderItems for the order
            for item_data in data.get('items', []):
                product = Product.objects.get(id=item_data['product_id'])
                OrderItem.objects.create(
                    order=order,
                    product=product,
                    quantity=item_data['quantity'],
                    price=item_data['price']  # Price at the time of order
                )

            return JsonResponse({"status": "ok", "order_id": order.id})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Only POST allowed"}, status=405)

@require_GET
def list_products(request):
    products = Product.objects.all().prefetch_related("images")
    product_list = []
    for prod in products:
        prod_dict = model_to_dict(prod)
        # Ensure correct naming to match React expectations
        prod_dict['id'] = prod.id
        prod_dict['inStock'] = prod.in_stock
        prod_dict['originalPrice'] = prod.original_price
        prod_dict['bestseller'] = prod.bestseller
        prod_dict['images'] = [img.image.url for img in prod.images.all()]
        # Optionally clean up or combine fields if needed
        product_list.append(prod_dict)
    return JsonResponse(product_list, safe=False)

@require_GET
def list_orders(request):
    orders = Order.objects.all().prefetch_related("items", "user")
    order_list = []
    for order in orders:
        items = []
        for item in order.items.all():
            items.append({
                "product_id": item.product.id,
                "product_name": item.product.name,
                "quantity": item.quantity,
                "price": float(item.price),
            })
        order_list.append({
            "id": order.id,
            "order_number": order.order_number,
            "user": order.user.username if order.user else "",
            "user_id": order.user.id if order.user else None,
            "total": float(order.total),
            "status": order.status,
            "created_at": order.created_at.isoformat(),
            "paid": order.paid,
            "items": items,
        })
    return JsonResponse(order_list, safe=False)

@require_GET
def list_customers(request):
    users = User.objects.all()
    customers = []
    for user in users:
        customers.append({
            "id": user.id,
            "username": user.username,
            "email": user.email,
            "is_staff": user.is_staff,
            "is_active": user.is_active,
            "date_joined": user.date_joined.isoformat(),
        })
    return JsonResponse(customers, safe=False)
