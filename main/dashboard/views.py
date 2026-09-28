from django.contrib import messages
from django.shortcuts import get_object_or_404, redirect, render
from django.contrib.auth import authenticate, login, logout
from app.models import Internship
from dashboard.models import Candidate
from django.contrib.auth.decorators import login_required
STATUS_CHOICES = Candidate._meta.get_field('status').choices

# Create your views here.
@login_required(login_url="loginview")
def manage_dashboard(request):
    candidate = Candidate.objects.filter(user=request.user).first()

    if not candidate:
        messages.error(
            request,
            "Candidate profile not found. Please complete your application."
        )
        return redirect("apply")

    return render(
        request,
        "dashboard/manage_dashboard.html",
        {"candidate": candidate}
    )

@login_required(login_url="loginview")
def manage_dashboard_form(request):
    candidate =get_object_or_404(Candidate, user=request.user)

    if request.method == 'POST':
        candidate.name = request.POST.get('name', candidate.name).strip()
        candidate.phone = request.POST.get('phone', candidate.phone).strip()
        candidate.portfolio = request.POST.get('portfolio') or None

        status = request.POST.get('status')
        if status in dict(STATUS_CHOICES):
            candidate.status = status

        role_id = request.POST.get('role')
        candidate.role = Internship.objects.filter(id=role_id).first() if role_id else None

        candidate.save()
        messages.success(request, 'Your profile has been updated.')
        return redirect('manage_dashboard')

    context = {
        'candidate': candidate,
        'internships': Internship.objects.all(),
        'status_choices': STATUS_CHOICES,
    }
    return render(request, 'dashboard/manage_dashboard_form.html', context)



@login_required(login_url="loginview")
def logout_view(request):
    logout(request)
    return redirect('home')
