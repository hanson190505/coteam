# Generated by Django 3.0 on 2020-03-17 03:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('upload', '0007_auto_20200315_0433'),
    ]

    operations = [
        migrations.AddField(
            model_name='image',
            name='image_alt',
            field=models.CharField(default='usb powerbank', max_length=64),
        ),
        migrations.AddField(
            model_name='image',
            name='is_used',
            field=models.IntegerField(default=0),
        ),
    ]
