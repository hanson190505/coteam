# Generated by Django 3.0.5 on 2020-12-03 02:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20201201_0637'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customeraddr',
            name='addr_type',
            field=models.IntegerField(choices=[(1, 'other'), (0, 'common')], default=1),
        ),
    ]