from django.shortcuts import render

from .models import Offers
from .models import Stock
from .models import RBreed

# Create your views here.

def about(request):
    return render(request, "about.html")

def contacts(request):
    return render(request, "contacts.html")
def premium(request):
    return render(request, "premium.html")
def index(request):

   
    dests = Offers.objects.all()
    return render(request, "index.html", {'dests': dests})
def stock(request):

    stocks = Stock.objects.all()
    return render(request, "stock.html", {'stocks': stocks})
    
def pricelist(request):

    return render(request, "pricelist.html")

def Rbreed(request):

   rab = RBreed.objects.all()
   return render(request, "learn.html", {'rab': rab})

def market(request):

   return render(request, "market.html")
def orders(request):

   return render(request, "orders.html")