# Generated by Django 3.1.3 on 2020-11-02 17:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0005_auto_20201102_1929'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='update',
            field=models.DateTimeField(auto_now=True, verbose_name='Date published'),
        ),
    ]
