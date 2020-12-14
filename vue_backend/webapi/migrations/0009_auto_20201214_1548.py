# Generated by Django 3.0.5 on 2020-12-14 15:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('webapi', '0008_productsubtype'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='sub_type',
            field=models.ForeignKey(blank=True, max_length=32, null=True, on_delete=django.db.models.deletion.CASCADE, to='webapi.ProductSubType', verbose_name='产品子类'),
        ),
    ]
