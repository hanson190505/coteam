# Generated by Django 3.0.5 on 2020-12-07 06:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20201203_0259'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customeraddr',
            name='addr_type',
            field=models.IntegerField(choices=[(0, 'common'), (1, 'other')], default=1),
        ),
    ]
