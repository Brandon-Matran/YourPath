# Generated by Django 4.0.3 on 2022-12-06 23:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Technician',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tech_name', models.CharField(max_length=100)),
                ('employee_number', models.PositiveSmallIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='VehicleVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('color', models.CharField(max_length=200)),
                ('year', models.PositiveSmallIntegerField()),
                ('vin', models.CharField(max_length=17, unique=True)),
                ('model_id', models.PositiveSmallIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='ServiceAppointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('owner_name', models.CharField(max_length=100)),
                ('reason', models.CharField(max_length=500)),
                ('status', models.CharField(default='scheduled', max_length=25)),
                ('tech_name', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='service_appointments', to='service_rest.technician')),
                ('vin', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='service_appointments', to='service_rest.vehiclevo')),
            ],
        ),
    ]
