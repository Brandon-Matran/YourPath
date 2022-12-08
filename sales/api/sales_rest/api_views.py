from django.shortcuts import render
from django.views.decorators.http import require_http_methods
import json
from django.http import JsonResponse
from .encoders import (
    AutoVOEncoder,
    SaleRecordEncoder,
    SalesPersonEncoder,
    CustomerEncoder,
)
from .models import SaleRecord, SalesPerson, Customer, AutoVO

#Create and Show Customer
@require_http_methods(["GET", "POST"])
def api_list_customer(request):
    if request.method == "GET":
        customer = Customer.objects.all()
        return JsonResponse(
            {"customer": customer},
            encoder=CustomerEncoder,
            safe=False
        )
    else:
        try:
            content = json.loads(request.body)
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                CustomerEncoder,
                safe=False
            )
        except:
            response = JsonResponse (
                {"message": "Person does not exist"},
            )
            response.status_code = 400
            return response

#Show customer details, Delete and Update Customer
@require_http_methods(["GET", "DELETE", "PUT"])
def api_show_customer(request, id):
    if request.method == "GET":
        try:
            customer = Customer.objects.get(id=id)
            return JsonResponse(
                customer,
                CustomerEncoder,
                safe=False
            )
        except:
            response = JsonResponse(
                {"message": "Unable to find Customer"}
            )
    elif request.method == "DELETE":
        try:
            customer = Customer.objects.get(id=id)
            customer.delete()
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False
            )
        except:
            response = JsonResponse(
                {"message": "Customer does not exist:"}
            )
            response.status_code = 400
            return response
    else:
        try:
            content = json.loads(request.body)
            customer = Customer.objects.get(id=id)

            props = ["name", "adddress", "phone_number"]
            for prop in props:
                if prop in content:
                    setattr(customer, prop, content[prop])
            customer.save()
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False
            )
        except Customer.DoesNotExist:
            response = JsonResponse({"Message": "Customer does not exist"})
            response.status_code = 404
            return response

#Create and show SalesPerson
@require_http_methods(["GET", "POST"])
def api_list_sales_person(request):
    if request.method == "GET":
        sales_person = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_person": sales_person},
            encoder=SalesPersonEncoder,
            safe=False
        )
    else:
        try:
            content = json.loads(request.body)
            sales_person = SalesPerson.objects.create(**content)
            return JsonResponse(
                sales_person,
                SalesPersonEncoder,
                safe=False
            )
        except:
            response = JsonResponse (
                {"message": "Person does not exist"},
            )
            response.status_code = 400
            return response

#Show SalesPerson details as well as Delete and Update
@require_http_methods(["GET", "DELETE", "PUT"])
def api_show_sales_person(request, id):
    if request.method == "GET":
        try:
            sales_person = SalesPerson.objects.get(id=id)
            return JsonResponse(
                sales_person,
                SalesPersonEncoder,
                safe=False
            )
        except:
            response = JsonResponse(
                {"message": "Unable to find Sales Person"}
            )
    elif request.method == "DELETE":
        try:
            sales_person = SalesPerson.objects.get(id=id)
            sales_person.delete()
            return JsonResponse(
                sales_person,
                encoder=SalesPersonEncoder,
                safe=False
            )
        except:
            response = JsonResponse(
                {"message": "Sales person does not exist:"}
            )
            response.status_code = 400
            return response
    else:
        try:
            content = json.loads(request.body)
            sales_person = SalesPerson.objects.get(id=id)

            props = ["name", "employee_number"]
            for prop in props:
                if prop in content:
                    setattr(sales_person, prop, content[prop])
            sales_person.save()
            return JsonResponse(
                sales_person,
                encoder=SalesPersonEncoder,
                safe=False
            )
        except Customer.DoesNotExist:
            response = JsonResponse({"Message": "Sales person does not exist"})
            response.status_code = 404
            return response

#List of Sales Records along with Create Sale Record
@require_http_methods(["GET", "POST"])
def api_list_sales(request):
    if request.method == "GET":
        sales = SaleRecord.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleRecordEncoder,
            safe=False
        )
    else:
        # try:
        content = json.loads(request.body)
        print(content)

        sales_person_id = content["sales_person"]
        sales_person = SalesPerson.objects.get(id=sales_person_id)
        content["sales_person"] = sales_person


        customer_id = content["customer"]
        customer = Customer.objects.get(id=customer_id)
        content["customer"] = customer


        vin_key = content["automobile"]
        automobile = AutoVO.objects.get(vin=vin_key)
        content["automobile"] = automobile


        sale_record = SaleRecord.objects.create(**content)
        print(sale_record)
        return JsonResponse(
            sale_record,
            encoder=SaleRecordEncoder,
            safe=False
        )
        # except:
            # response = JsonResponse(
            #     {"message": "Unable to make Sales record"}
            #     )
            # response.status_code = 400
            # return response


#Details of each sale along with Delete and Update option
@require_http_methods(["GET", "DELETE", "PUT"])
def api_show_sale(request, id):
    if request.method == "GET":
        try:
            sales = SaleRecord.objects.get(id=id)
            return JsonResponse(
                sales,
                SaleRecordEncoder,
                safe=False
            )
        except:
            response = JsonResponse(
                {"message": "Unable to find Sale Record"}
            )
    elif request.method == "DELETE":
        try:
            sales = SaleRecord.objects.get(id=id)
            sales.delete()
            return JsonResponse(
                sales,
                encoder=SaleRecordEncoder,
                safe=False
            )
        except:
            response = JsonResponse(
                {"message": "Sales record does not exist:"}
            )
            response.status_code = 400
            return response
    else:
        try:
            content = json.loads(request.body)
            sale_record = SaleRecord.objects.get(id=id)

            props = ["sale_price", "automobile", "customer", "sales_person" ]
            for prop in props:
                if prop in content:
                    setattr(sale_record, prop, content[prop])
            sale_record.save()
            return JsonResponse(
                sale_record,
                encoder=SaleRecordEncoder,
                safe=False
            )
        except SaleRecord.DoesNotExist:
            response = JsonResponse({"Message": "Sales Record does not exist"})
            response.status_code = 404
            return response


#Filter salesperson and show sales history(customer, VIN, sale price)

@require_http_methods(["GET"])
def api_show_sales_history(request, id):
    if request.method == "GET":
        sales_history = SaleRecord.objects.get(id=id)
        print(sales_history)
    return JsonResponse(
        {"sales_history" : sales_history},
        SaleRecordEncoder,
        safe=False
    )
