

from django.urls import path
from .views import about, contact, home, internship

urlpatterns = [
    path('', home, name='home'),
    path('contact/',contact, name='contact'),
    path('about/',about, name='about'),
    path('internships/',internship, name='internships')
    
]
