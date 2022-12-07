from django.contrib import admin
from .models import AutoVO, SaleRecord, SalesPerson, Customer

# Register your models here.

admin.site.register(AutoVO)
admin.site.register(SaleRecord)
admin.site.register(SalesPerson)
admin.site.register(Customer)
