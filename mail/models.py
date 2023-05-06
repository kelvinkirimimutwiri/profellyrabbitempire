from django.db import models

# Create your models here.


class mail(models.Model):

    name = models.CharField(max_length=100)
    email = models.TextField()
    subject = models.TextField()
    message= models.TextField()