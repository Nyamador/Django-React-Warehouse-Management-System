from django.shortcuts import render,reverse,redirect
from django.views.generic.edit import CreateView, DeleteView, UpdateView
from django.views.generic import  ListView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.decorators import login_required
from django.contrib.messages.views import SuccessMessageMixin
from django.contrib import messages
from rest_framework import generics


from .forms import ProductCreationForm, CustomerCreationForm, ShipmentCreationForm
from .models import Product, Customer, Shipment
from .serializers import ProductSerializer

@login_required()
def ProductCreationView(request, uuid):
    # Form processing
    if request.method == 'POST':
        # Create an instance of the form
        form = ProductCreationForm(request.POST)    
        if form.is_valid():
            product = form.save(commit=False)
            product.user = request.user
            product.warehouse = request.user.profile.warehouse
            product.save()
            messages.success(request, f'{product.name} was created successfully')
            # return redirect(reverse('home'))
    form = ProductCreationForm()
            
    context = {
        'form' : form,
    }

    return render(request, 'stock/ProductCreation.html', context)


class CustomerCreationView(SuccessMessageMixin, LoginRequiredMixin, CreateView):
    template_name = 'stock/CustomerCreation.html'
    form_class = CustomerCreationForm
    success_url = '/'
    success_message = "%(firstname)s was created successfully"


class ShipmentCreationView(SuccessMessageMixin, LoginRequiredMixin, CreateView):
    template_name = 'stock/ShipmentCreation.html'
    form_class = ShipmentCreationForm
    success_url = '/'
    success_message = "%(id)s was created successfully"    


# List Views

class ProductListView(ListView, LoginRequiredMixin):
    template_name = "stock/ProductListView"
    queryset = Product.objects.all()
    context_object_name = "products"

class CustomerListView(ListView, LoginRequiredMixin):
    template_name = "stock/CustomerListView"
    queryset = Customer.objects.all()
    context_object_name = "customers"

class ShipmentListView(ListView, LoginRequiredMixin):
    template_name = "stock/shipment_list.html"
    queryset = Shipment.objects.all()
    context_object_name = "shipments"


#Delete Views
class ProductDeleteView(LoginRequiredMixin, SuccessMessageMixin, DeleteView):
    model = Product
    context_object_name = "product"
    pk_url_kwarg = 'id'
    success_url = '/'
    template_name = 'stock/ProductDelete.html'
    success_message = "%(product)s was deleted successfully"

class CustomerDeleteView(LoginRequiredMixin, SuccessMessageMixin, DeleteView):
    model = Customer
    context_object_name = "customer"
    pk_url_kwarg = 'id'
    success_url = '/'
    template_name = 'stock/CustomerDelete.html'
    success_message = "%(customer)s was deleted successfully"

class ShipmentDeleteView(LoginRequiredMixin, SuccessMessageMixin, DeleteView):
    model = Shipment
    context_object_name = "shipment"
    pk_url_kwarg = 'id'
    success_url = '/'
    template_name = 'stock/ShipmentDelete.html'
    success_message = "%(shipment)s was deleted successfully"


#Update Views
class ProductUpdateView(SuccessMessageMixin, UpdateView):
    model = Product
    pk_url_kwarg = 'id'
    template_name_suffix =  '_update_form'
    fields = ['name', 'price', 'sku', 'quantity']
    success_url = '/'
    success_message = "%(name)s was edited successfully"

class CustomerUpdateView(SuccessMessageMixin, UpdateView):
    model = Customer
    pk_url_kwarg = 'id'
    template_name_suffix =  '_update_form'
    fields = ['firstname', 'lastname', 'email']
    success_url = '/'
    success_message = "%(name)s was edited successfully"

class ShipmentUpdateView(SuccessMessageMixin, UpdateView):
    model = Shipment
    pk_url_kwarg = 'id'
    template_name_suffix =  '_update_form'
    fields = ['customer', 'destination', 'product', 'quantity']
    success_url = '/'
    success_message = "%(name)s was edited successfully"



class Products(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer