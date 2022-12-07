from django.contrib import admin
from .models import VehicleVO, ServiceAppointment, Technician

# Register your models here.

@admin.register(VehicleVO)
class VehicleVOAdmin(admin.ModelAdmin):
    pass


@admin.register(ServiceAppointment)
class ServiceAppointmentAdmin(admin.ModelAdmin):
    pass

@admin.register(Technician)
class TehnicianAdmin(admin.ModelAdmin):
    pass
