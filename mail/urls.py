from django.urls import include, path
from . import views
from django.contrib import admin
urlpatterns = [ 
      path('mail/', views.mail, name='mail'),
]