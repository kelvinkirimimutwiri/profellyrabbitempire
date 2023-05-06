from django.shortcuts import render,redirect
from django.contrib import messages
from django.contrib.auth.models import User, auth
# Create your views here.
def account(request):
 if request.method == 'POST':
     first_name = request.POST['first_name']
     last_name = request.POST['last_name']
     username = request.POST['username']
     password = request.POST['password']
     email = request.POST['email']
     if User.objects.filter(username=username).exists():
       messages.info(request, 'Username already taken')
       return redirect('/accounts/account')
     elif User.objects.filter(email=email).exists():
       messages.info(request, 'Email already taken')
       return redirect('/accounts/account')
     else:
      user = User.objects.create_user(username=username, password=password,email=email, first_name=first_name, last_name=last_name)
      user.save();
      return redirect('/accounts/account')
 else:
      return render(request, 'accounts.html') 
 
def login(request):
  if request.method== 'POST':
      username = request.POST['username']
      password = request.POST['password']
      user = auth.authenticate(username=username, password=password)
      if user is not None:
         auth.login(request, user)
         return redirect ('/premium')

      else:
         messages.info(request,'invalid credintials')
         return redirect('/accounts/account')
  else:
   return render(request, 'account.html')
   