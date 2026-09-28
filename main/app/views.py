from email import message
from django.contrib import messages
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.shortcuts import redirect, render
from django.contrib.auth.models import User
from app.models import Internship
from django.contrib.auth import authenticate, login, logout
from dashboard.models import Candidate
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
        status = request.POST.get('status')
        role_id = request.POST.get('role')
        internship = Internship.objects.get(id=role_id)
        if not name or not email or not phone or not password or not password2:
            messages.error(request,'please fill in all required fields')
        if password != password2:
            messages.error(request, 'Passwords do not match.')
        elif not email:
            messages.error(request, 'Email is required.') 
        else: 
            try:
                validate_email(email) 
            except ValidationError:
                messages.error(request, 'Enter a valid email address.')
                return render(request, 'pages/apply.html',{'internships':internships}) 
            if User.objects.filter(email=email).exists():
                messages.error(request, 'An account with this email already exists.')
                return render(request, 'pages/apply.html',{'internships':internships})
            if len(password) < 8:
                messages.error(request, 'Password must be at least 8 characters.')
                return render(request, 'pages/apply.html',{'internships':internships})

            if password.isdigit():
                messages.error(request, 'Password cannot be entirely numeric.')
                return render(request, 'pages/apply.html',{'internships':internships})
            user = User.objects.create_user(
                username=email,
                email=email,
                password=password,
                
            )
            Candidate.objects.create(
                user=user,
                phone=phone,
                portfolio=portfolio,
                status=status,
                role=internship
)
            login(request, user)
            return redirect('dashboard')
    return render(request,'pages/apply.html', {'internships': internships})