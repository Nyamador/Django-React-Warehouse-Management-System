from django.forms import ModelForm
from .models import Product, Customer, Shipment

class ProductCreationForm(ModelForm):
    class Meta:
        model = Product 
        fields = ('name', 'quantity', 'price', 'sku')

class CustomerCreationForm(ModelForm):
    class Meta:
        model = Customer
        fields = ('firstname', 'lastname', 'email')

class ShipmentCreationForm(ModelForm):
    class Meta:
        model = Shipment
        fields = ('customer', 'destination', 'product','quantity')