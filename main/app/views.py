from email import message
from django.core.checks import messages
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.shortcuts import render

from app.models import Internship

# Create your views here.
def home(request):
    internships=Internship.objects.filter(is_featured=True)
    return render(request,'pages/home.html', {'internships': internships})

def contact(request):
    return render(request,'pages/contact.html')

def about(request):
    return render(request,'pages/about.html')

def internship(request):
    internships=Internship.objects.all()
    return render(request,'pages/internship.html', {'internships': internships})

def loginview(request):

    return render(request,'pages/login.html')

def apply(request):
    internships=Internship.objects.all()
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        portfolio = request.POST.get('portfolio')
        password = request.POST.get('password')
        password2 = request.POST.get('password2')
        if not name or not email or not phone or not password or not password2:
            message.error(request,'please fill in all required fields')
        if password != password2:
            message.error(request, 'Passwords do not match')
        elif len(password) < 6:
            message.error(request,'password must be at least 6 characters')  
        else: 
            try:
                validate_email(email) 
            except ValidationError:
                messages.error(request, 'Enter a valid email address.')
                return          
    return render(request,'pages/apply.html', {'internships': internships})