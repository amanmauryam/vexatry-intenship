from django.urls import path,include
from .views import manage_dashboard,manage_dashboard_form
urlpatterns=[
    path('',manage_dashboard, name='manage_dashboard'),
    path('form/',manage_dashboard_form,name='manage_dashboard_form')
]