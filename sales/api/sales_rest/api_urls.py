from django.urls import path

from .api_views import (
    api_list_customer,
    api_show_customer,
    api_list_sales,
    api_show_sale,
    api_list_sales_person,
    api_show_sales_person,
    api_show_sales_history,
    api_get_auto_vo_list,
    api_get_sales_record_person,
)

urlpatterns = [
    path("customers/", api_list_customer, name="api_list_customer"),
    path("customers/<int:id>/", api_show_customer, name="api_show_customer"),
    path("sales/", api_list_sales, name="api_list_sales"),
    path("sales/<int:id>/", api_show_sale, name="api_show_sales"),
    path("sales_person/", api_list_sales_person, name="api_list_sales_person"),
    path("sales_person/<int:id>/", api_show_sales_person, name="api_show_sales_person"),
    path(
        "sales_history/<int:id>/", api_show_sales_history, name="api_show_sales_history"
    ),
    path("autoVO/", api_get_auto_vo_list, name="api_get_auto_vo_list"),
    path(
        "sales/sales_person/<int:id>/",
        api_get_sales_record_person,
        name="api_sales_record_person",
    ),
]
