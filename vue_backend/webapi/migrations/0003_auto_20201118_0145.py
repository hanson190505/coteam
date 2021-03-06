# Generated by Django 3.0.5 on 2020-11-18 01:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapi', '0002_auto_20201117_0251'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homeindex',
            name='seo_desc',
            field=models.CharField(max_length=1024),
        ),
        migrations.AlterField(
            model_name='homeindex',
            name='seo_title',
            field=models.CharField(max_length=256),
        ),
        migrations.AlterField(
            model_name='products',
            name='capacities',
            field=models.CharField(default='custom', max_length=256, verbose_name='容量'),
        ),
        migrations.AlterField(
            model_name='products',
            name='imprint_location',
            field=models.CharField(default='custom', max_length=128, verbose_name='logo位置'),
        ),
        migrations.AlterField(
            model_name='products',
            name='material',
            field=models.CharField(default='custom', max_length=128, verbose_name='材质'),
        ),
        migrations.AlterField(
            model_name='products',
            name='pro_pack',
            field=models.CharField(default='custom made', max_length=128, verbose_name='产品包装'),
        ),
        migrations.AlterField(
            model_name='products',
            name='pro_size',
            field=models.CharField(default='custom made', max_length=128, verbose_name='产品尺寸'),
        ),
        migrations.AlterField(
            model_name='products',
            name='seo_desc',
            field=models.CharField(default='china good gifts', max_length=1024),
        ),
    ]
