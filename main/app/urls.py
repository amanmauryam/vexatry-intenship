

from django.urls import path
from .views import about, apply, contact, home, internship, loginview,logout_view

urlpatterns = [
    path('', home, name='home'),
    path('contact/',contact, name='contact'),
    path('about/',about, name='about'),
    path('internships/',internship, name='internships'),
    path('login/',loginview, name='loginview'),
    path('apply/',apply, name='apply'),
    path('logout/',logout_view, name='logout_view')
    
]
