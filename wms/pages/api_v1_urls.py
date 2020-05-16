from django.urls import path
from rest_framework.authtoken import views as authtokenviews
from . import api_v1_views


urlpatterns = [
    #List Routes
    path('products/all', api_v1_views.Products.as_view(), name="api_product_list"),
    path('customers/all', api_v1_views.Customers.as_view(), name="api_customer_list"),
    path('warehouses/all', api_v1_views.Warehouses.as_view(), name="api_warehouse_list"),
    path('shipments/all', api_v1_views.Shipments.as_view(), name="api_shipment_list"),


    #TOKENAUTH
    path('api-token-auth', authtokenviews.obtain_auth_token),
]