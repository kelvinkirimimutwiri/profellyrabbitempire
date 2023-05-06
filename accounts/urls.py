from django.urls import include, path
from . import views
from django.contrib import admin
urlpatterns = [ 
      path('account/', views.account, name='account'),
      path('login/', views.login, name='login'),
    
]