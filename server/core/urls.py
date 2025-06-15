
from django.urls import path
from . import views

urlpatterns = [
    path('upload-image/', views.upload_image, name='upload_image'),
    path('add-product/', views.add_product, name='add_product'),
    path('add-order/', views.add_order, name='add_order'),
    path('products/', views.list_products, name='list_products'),  # New products endpoint
]
