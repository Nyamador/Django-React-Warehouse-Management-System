from django.conf import settings
from django.core.cache.backends.base import DEFAULT_TIMEOUT
from django.views.decorators.cache import cache_page
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.db.models import Sum
from stock.models import (Product, Customer)

CACHE_TTL = getattr(settings, 'CACHE_TTL', DEFAULT_TIMEOUT)

@cache_page(CACHE_TTL)
@login_required()
def index(request):

    product_count = Product.objects.count()
    customer_count = Customer.objects.count()
    total_stock_price = Product.objects.all().aggregate(Sum('price'))

    print("Desmond", request.META['Desmond'])
    print("Seller", request.META['seller_subdomain'])

    context = {
        'product_count' :product_count,
        "customer_count" : customer_count,
        "total_stock_price": abs(total_stock_price['price__sum'])
    }
    return render(request, 'pages/index.html', context)
