from django.contrib import admin
from .models import AutomobileVO, Appointment, Technician

# Register your models here.


@admin.register(AutomobileVO)
class VehicleVOAdmin(admin.ModelAdmin):
    pass


@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    pass


@admin.register(Technician)
class TehnicianAdmin(admin.ModelAdmin):
    pass
