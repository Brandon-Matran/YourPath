from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
import json
from models import AutomobileVO, Technician, ServiceAppointment

# Create your views here.

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "name",
        "employee_number",
    ]


class ServiceAppointmentListEncoder(ModelEncoder):
    model = ServiceAppointment
    properties = [
        "id",
        "owner_name",
        "appointment_date",
        "reason",
        "technician",
        "vin",
        "status",
    ]
    def get_extra_data(self, o):
        return {"technician": o.technician.name}

class ServiceAppointmentDetailEncoder(ModelEncoder):
    model = ServiceAppointment
    properties = [
        "id",
        "owner_name",
        "appointment_date",
        "reason",
        "technician",
        "vin",
        "status",
    ]
    encoders = {
        "technician": TechnicianEncoder(),
    }

@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        service_appointments = ServiceAppointment.objects.all()
        return JsonResponse(
            {"service_appointments": service_appointments},
            encoder=ServiceAppointmentListEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            technician_number = content["technician"]
            technician = Technician.objects.get(employee_number=technician_number)
            content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Technician Number"},
                status=400,
            )

        try:
            vin = content["vin"]
            car = AutomobileVO.objects.get(vin=vin)
            content["is_VIP"] = True
        except AutomobileVO.DoesNotExist:
            print("This customer is not a VIP")

        content["is_completed"] = False
        service_appointment = ServiceAppointment.objects.create(**content)
        return JsonResponse(
            service_appointment,
            encoder=ServiceAppointmentDetailEncoder,
            safe=False,
        )


@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_appointment(request, vin):
    if request.method == "GET":
        try:
            service_appointment = ServiceAppointment.objects.get(vin=vin)
            return JsonResponse(
                service_appointment,
                encoder=ServiceAppointmentDetailEncoder,
                safe=False,
            )
        except ServiceAppointment.DoesNotExist:
            return JsonResponse({"message": "Invalid Service Appointment ID"}, status=400)
    elif request.method == "DELETE":
        try:
            count, _ = ServiceAppointment.objects.filter(id=vin).delete()
            return JsonResponse({"deleted": count > 0})
        except ServiceAppointment.DoesNotExist:
            return JsonResponse({"message": "Invalid Service Appointment ID"}, status=400)
    else:
        content = json.loads(request.body)
        try:
            if "technician" in content:
                technician = Technician.objects.get(employee_number=content["technician"])
                content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Technician Number"},
                status=400,
            )
        ServiceAppointment.objects.filter(vin=vin).update(**content)
        service_appointment = ServiceAppointment.objects.get(vin=vin)
        return JsonResponse(
            service_appointment,
            encoder=ServiceAppointmentDetailEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
        )
    else:
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )

@require_http_methods(["GET", "DELETE", "PUT"])
def api_show_technician(request, id):
    if request.method == "GET":
        try:
            technician = Technician.objects.get(id=id)
            return JsonResponse(
                technician,
                TechnicianEncoder,
                safe=False
            )
        except:
            response = JsonResponse(
                {"message": "Unable to find Technician"}
            )
    elif request.method == "DELETE":
        try:
            technician = Technician.objects.get(id=id)
            technician.delete()
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False
            )
        except:
            response = JsonResponse(
                {"message": "Technician does not exist:"}
            )
            response.status_code = 400
            return response
    else:
        try:
            content = json.loads(request.body)
            technician = Technician.objects.get(id=id)

            props = ["name", "employee_number"]
            for prop in props:
                if prop in content:
                    setattr(technician, prop, content[prop])
            technician.save()
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False
            )
        except Technician.DoesNotExist:
            response = JsonResponse({"Message": "Technician does not exist"})
            response.status_code = 404
            return response
