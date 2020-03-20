from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.db.models import Sum
from stock.models import (Product, Customer)

@login_required()
def index(request):

    product_count = Product.objects.count()
    customer_count = Customer.objects.count()
    total_stock_price = Product.objects.all().aggregate(Sum('price'))

    context = {
        'product_count' :product_count,
        "customer_count" : customer_count,
        "total_stock_price": abs(total_stock_price['price__sum'])
    }
    return render(request, 'pages/index.html', context)
