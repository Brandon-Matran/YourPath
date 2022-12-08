import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

# Import models from sales_rest, here.

from sales_rest.models import AutoVO

# from sales_rest.models import Something
def get_auto():
    response = requests.get("http://inventory-api:8000/api/automobiles/")
    print(response)
    content = json.loads(response.content)
    for automobile in content["autos"]:
        AutoVO.objects.update_or_create(
            color=automobile["color"],
            year=automobile["year"],
            vin=automobile["vin"]

        )


def poll():
    while True:
        print('Sales poller polling for data')
        try:
            # Write your polling logic, here
            get_auto()
            print("it worked!")
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
