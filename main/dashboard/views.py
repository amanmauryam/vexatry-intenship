from webbrowser import get

from django.shortcuts import render,get_object_or_404

from dashboard.models import Candidate

# Create your views here.
def manage_dashboard(request):
    candidate =get_object_or_404(Candidate, user=request.user)
    return render(request, 'dashboard/manage_dashboard.html', {'candidate': candidate})

def manage_dashboard_form(request):
    candidate = get_object_or_404(Candidate, user=request.user)
    return render(request, 'dashboard/manage_dashboard_form.html', {'candidate': candidate})