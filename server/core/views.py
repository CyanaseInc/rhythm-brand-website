
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
from django.contrib.auth.models import User
from .models import Product, ProductImage, Customer, Order, OrderItem
import json

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
            # Support multiple image URLs (list of urls)
            for img_url in data.get("images", []):
                ProductImage.objects.create(product=product, image=img_url)
            return JsonResponse({"status": "ok", "product_id": product.id})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Only POST allowed"}, status=405)

@csrf_exempt
def add_order(request):
    # ... keep existing code (add_order) the same ...
