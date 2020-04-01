# Generated by Django 3.0 on 2020-03-19 10:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapi', '0002_auto_20200317_0307'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='products',
            name='sub_type',
        ),
        migrations.AlterField(
            model_name='products',
            name='pro_price',
            field=models.DecimalField(decimal_places=2, default=100, max_digits=10, verbose_name='产品单价'),
        ),
    ]
