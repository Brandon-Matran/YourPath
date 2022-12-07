from common.json import ModelEncoder

from .models import AutoVO, SaleRecord, SalesPerson, Customer

class AutoVOEncoder(ModelEncoder):
    model = AutoVO
    properties = [
        "color",
        "year",
        "vin"
    ]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "id",
        "name",
        "address",
        "phone_number"
    ]

class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "id",
        "name",
        ]

class SaleRecordEncoder(ModelEncoder):
    model = SaleRecord
    properties = [
        "id",
        "sale_price",
        "automobile",
        "customer",
        "sales_person",
    ]
    encoders = {
        "automobile": AutoVOEncoder(),
        "customer": CustomerEncoder(),
        "sales_person": SalesPersonEncoder(),

    }
