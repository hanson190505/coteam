# Generated by Django 3.0.5 on 2020-11-17 02:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customeraddr',
            name='addr_type',
            field=models.IntegerField(choices=[(0, 'common'), (1, 'other')], default=1),
        ),
    ]
