# Generated by Django 3.0.5 on 2020-12-14 03:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('webapi', '0007_auto_20201208_0512'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductSubType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(max_length=64)),
                ('pub_date', models.DateField(auto_now=True, verbose_name='添加日期')),
                ('is_delete', models.IntegerField(default=0)),
                ('parent_category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='webapi.ProductsType')),
            ],
        ),
    ]
