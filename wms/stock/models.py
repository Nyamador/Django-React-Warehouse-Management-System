import uuid
from django.db import models
from django.conf import settings

class Warehouse(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(verbose_name="Warehouse name", blank=False, null=False, max_length=300)
    location = models.CharField(verbose_name="Warehouse Location",max_length=300,  null=False, blank=False)

    def __str__(self):
        return self.name

# class Warehous(models.Model):
    

class Product(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    warehouse = models.ForeignKey(Warehouse, on_delete=models.CASCADE)
    name = models.CharField(verbose_name="Product Name", max_length=300)
    price = models.DecimalField(verbose_name="Unit Price", max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField(verbose_name="Product Quantity")
    sku = models.CharField(verbose_name="Stock Keeping Unit", max_length=50, null=False, blank=False, unique=True)
    date = models.DateField(verbose_name="Date Created", auto_now_add=True)


    def __str__(self):
        return self.name


class Customer(models.Model):
    firstname = models.CharField("Firstname", max_length=50)
    lastname = models.CharField("Lastname", max_length=50)
    email = models.EmailField(verbose_name="Email Address", max_length=100)

    def __str__(self):
        return f'{self.firstname} {self.lastname}'
   

class Shipment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    destination = models.CharField(verbose_name="Destination of Shipment", max_length=100, null=False, blank=False)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(verbose_name="Product Quantity")
    

    def __str__(self):
        return f'Shipment #{self.id}'