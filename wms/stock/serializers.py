from rest_framework import serializers

from .models import Product, Customer, Warehouse, Shipment

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['warehouse', 'name', 'price', 'quantity', 'sku', 'date']


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['firstname', 'lastname', 'email']


class WarehouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Warehouse
        fields = ['id', 'name', 'location']


class ShipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shipment
        fields = ['user', 'customer', 'destination', 'product', 'quantity']