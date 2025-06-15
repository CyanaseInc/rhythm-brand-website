
# Django Example Endpoint for Purchase
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json

@csrf_exempt
def purchase(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            product_id = data.get("product_id")
            size = data.get("size")
            color = data.get("color")
            # Here, you could process/store/send email etc
            return JsonResponse({"status": "ok", "message": "Order received!", "data": data})
        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=400)
    else:
        return JsonResponse({"error": "Only POST allowed"}, status=405)
