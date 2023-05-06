from django.shortcuts import render
from .models import mail
# Create your views here.
from django.shortcuts import render,redirect
from django.contrib import messages
from django.contrib.auth.models import User, auth
# Create your views here.
def mail(request):
 if request.method == 'POST':
     name = request.POST['name']
     email = request.POST['email']
     subject = request.POST['subject']
     message = request.POST['message']
     user = User.objects.create_user(name=name, subject=subject,email=email, message=message,)
     user.save();
     return redirect('/mail/mail')
 else:
      return render(request, 'contact.html') 