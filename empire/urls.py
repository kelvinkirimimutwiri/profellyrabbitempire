from django.urls import include, path
from . import views
from django.contrib import admin
urlpatterns = [ 
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('stock/', views.stock, name='stock'),
    path('contacts/', views.contacts, name='contacts'),
    path('premium/', views.premium, name='premium'),
    path('pricelist/', views.pricelist, name='pricelist'),
    path('RBreed/', views.Rbreed, name='Rbreed'),
    path('market/', views.market, name='market'),
    path('orders/', views.orders, name='orders'),
]