
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
from django.contrib.auth.models import User
from .models import Product, ProductImage, Customer, Order, OrderItem

import json

@csrf_exempt
def upload_image(request):
    if request.method == "POST" and request.FILES.get("image"):
        image = request.FILES["image"]
        file_path = default_storage.save(f"products/{image.name}", image)
        image_url = default_storage.url(file_path)
        return JsonResponse({"image_url": image_url})
    return JsonResponse({"error": "No image provided"}, status=400)

@csrf_exempt
def add_product(request):
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
            for img_url in data.get("images", []):
                ProductImage.objects.create(product=product, image=img_url)
            return JsonResponse({"status": "ok", "product_id": product.id})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Only POST allowed"}, status=405)

@csrf_exempt
def add_order(request):
    # Example endpoint for placing orders (expand as needed)
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            user = User.objects.get(username=data["username"])
            customer, _ = Customer.objects.get_or_create(user=user)
            order = Order.objects.create(
                customer=customer,
                total_amount=data["total_amount"],
                status="pending",
                shipping_address=data.get("shipping_address", ""),
            )
            for item in data["items"]:
                product = Product.objects.get(id=item["product_id"])
                OrderItem.objects.create(
                    order=order,
                    product=product,
                    product_name=product.name,
                    quantity=item["quantity"],
                    price=item["price"],
                )
            return JsonResponse({"status": "ok", "order_id": order.id})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Only POST allowed"}, status=405)
