from django.urls import path
from . import views

urlpatterns = [
    #Customers
    path('customers', views.CustomerListView.as_view(), name="all-customers"),
    path('customers/<int:id>/delete', views.CustomerDeleteView.as_view(), name="delete-customer"),
    path('customers/<int:id>/edit', views.CustomerUpdateView.as_view(), name="edit-customer"),
    # Products
    path('<uuid:uuid>/products', views.ProductListView.as_view(), name="all-products"),
    path('products/all', views.CachedProductListView, name='cached'),
    path('<uuid:uuid>/products/new', views.ProductCreationView, name="add-product"),
    path('products/<int:id>/delete', views.ProductDeleteView.as_view(), name="delete-product"),
    path('products/<int:id>/edit', views.ProductUpdateView.as_view(), name="edit-product"),
    #Shipments
    path('<uuid:uuid>/shipments/new', views.ShipmentCreationView.as_view(), name="add-shipment"),
    path('<uuid:uuid>/shipments', views.ShipmentListView.as_view(), name="all-shipment"),
    path('shipments/<int:id>/delete', views.ShipmentDeleteView.as_view(), name="delete-shipment"),
    path('shipments/<int:id>/edit', views.ShipmentUpdateView.as_view(), name="edit-shipment"),
]