from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from .managers import stockUserManager
from stock.models import Warehouse


class stockUser(AbstractUser):
    
    email = models.EmailField(verbose_name="Email Adddress", max_length=255, unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = stockUserManager()

    def __str__(self):
        return self.email


class Profile(models.Model):
    prefix_list = (
        ('Mr', 'Mr.'),
        ('Mrs', 'Mrs.'),
        ('Ms', 'Ms.'),
        ('Mis', 'Miss.'),
        ('Mx', 'Mx.'),
        ('Dr', 'Dr.'),
        ('Prf', 'Prof.'),
        ('Rv', 'Rev.'),
    )

    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    photo =  models.ImageField(verbose_name="Profile Photo",upload_to="profile/%Y/%m/%d/", max_length=200, default="profilep.jpg")
    prefix = models.CharField(verbose_name="Prefix", choices=prefix_list , max_length=5)
    firstname = models.CharField(verbose_name="First Name", max_length=100)
    lastname = models.CharField(verbose_name="Last Name", max_length=100)
    cellphone = models.CharField(verbose_name="Mobile Number", max_length=20)
    warehouse = models.ForeignKey(Warehouse, on_delete=models.CASCADE)
    is_approved = models.BooleanField(verbose_name="Approved user", default=False)

    def __str__(self):
        return f'{self.prefix} {self.firstname} {self.lastname}'
