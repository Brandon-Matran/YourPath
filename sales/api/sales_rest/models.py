from django.db import models

# Create your models here.
class AutoVO(models.Model):
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)
    is_sold = models.BooleanField(default=False)

    def __str__(self):
        return self.vin


class Customer(models.Model):
    name = models.CharField(max_length=200)
    address = models.TextField(max_length=500, null=True)
    phone_number = models.CharField(max_length=9)

    def __str__(self):
        return self.name


class SalesPerson(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class SaleRecord(models.Model):
    sale_price = models.IntegerField()

    customer = models.ForeignKey(
        Customer, related_name="sales", on_delete=models.PROTECT
    )

    sales_person = models.ForeignKey(
        SalesPerson, related_name="sales", on_delete=models.PROTECT
    )

    automobile = models.ForeignKey(
        AutoVO, related_name="sales", on_delete=models.PROTECT
    )
