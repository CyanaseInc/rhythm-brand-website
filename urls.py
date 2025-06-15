
from django.urls import path
from . import views

urlpatterns = [
    path("api/upload-image/", views.upload_image, name="upload_image"),
    path("api/add-product/", views.add_product, name="add_product"),
]
