from django.db import models
from django.urls import reverse

# Create your models here.

class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True, null=True)
    vin = models.CharField(max_length=17, unique=True)


class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.PositiveIntegerField(unique=True)

    def get_api_url(self):
        return reverse("api_technician", kwargs={"pk": self.id})


class ServiceAppointment(models.Model):
    vin = models.CharField(max_length=17)
    owner_name = models.CharField(max_length=100)
    appointment_date = models.DateTimeField
    reason = models.CharField(max_length=500)
    vin = models.CharField(max_length=17)
    technician = models.ForeignKey(
        Technician,
        related_name="service_appointments",
        on_delete=models.CASCADE,
    )
    status = models.CharField(max_length=25, default="scheduled")

    def get_api_url(self):
        return reverse("api_service_appointment", kwargs={"pk": self.id})
