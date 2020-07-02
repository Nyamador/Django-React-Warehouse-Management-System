from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView, TokenRefreshView, TokenVerifyView)
from rest_framework.authtoken import views as TokenViews
from stock import views as stock_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    path('stock/', include('stock.urls')),
    path('customers/new', stock_views.CustomerCreationView.as_view(),name='add-customer'),
    path('', include('pages.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('api/v1/', include('pages.api_v1_urls')),
    # path('api-token-auth/', TokenViews.obtain_auth_token),

    # JWT Authentication Views
    path('api/token', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
