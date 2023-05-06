from django.db import models

# Create your models here.


class Offers(models.Model):

    name = models.CharField(max_length=100)
    img = models.ImageField(upload_to='pics')
    desc = models.TextField()
    price = models.IntegerField()
    offer = models.BooleanField(default=False)


class Stock(models.Model):
    name = models.CharField(max_length=100)
    img = models.ImageField(upload_to='pics')
    does = models.IntegerField()
    bucks = models.IntegerField()
    bunnies = models.IntegerField()

class RBreed(models.Model):
    name = models.CharField(max_length=100)
    img = models.ImageField(upload_to='pics')
    desc = models.TextField()