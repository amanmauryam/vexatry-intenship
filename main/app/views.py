from django.shortcuts import render

from app.models import Internship

# Create your views here.
def home(request):
    internships=Internship.objects.all()
    return render(request,'pages/home.html', {'internships': internships})

def contact(request):
    return render(request,'pages/contact.html')

def about(request):
    return render(request,'pages/about.html')

def internship(request):
    internships=Internship.objects.all()
    return render(request,'pages/internship.html', {'internships': internships})