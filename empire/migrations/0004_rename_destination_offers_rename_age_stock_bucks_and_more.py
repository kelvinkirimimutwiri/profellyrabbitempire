# Generated by Django 4.1.3 on 2023-01-15 18:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('empire', '0003_rename_price_stock_age_stock_number'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Destination',
            new_name='Offers',
        ),
        migrations.RenameField(
            model_name='stock',
            old_name='age',
            new_name='bucks',
        ),
        migrations.RenameField(
            model_name='stock',
            old_name='number',
            new_name='bunnies',
        ),
        migrations.RemoveField(
            model_name='stock',
            name='desc',
        ),
        migrations.RemoveField(
            model_name='stock',
            name='offer',
        ),
        migrations.AddField(
            model_name='stock',
            name='does',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]