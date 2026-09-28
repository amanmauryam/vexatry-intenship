from email import message
from django.contrib import messages
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.shortcuts import redirect, render
from django.contrib.auth.models import User
from app.models import Internship
from django.contrib.auth import authenticate, login, logout
from dashboard.models import Candidate
from django.db import transaction
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
    if request.method == 'POST':
        email=request.POST.get('email').strip()
        password=request.POST.get('password')
        user = authenticate(request,username=email,password=password)
        if user is not None:
            login(request,user)
            next_url = request.GET.get("next", "manage_dashboard")
            return redirect(next_url)
        messages.error(request, "Invalid email or password.")

    return render(request,'pages/login.html')

def logout_view(request):
    logout(request)
    return redirect('home')

def apply(request):
    internships = Internship.objects.all()

    if request.method == "POST":
        name = request.POST.get("name", "").strip()
        email = request.POST.get("email", "").strip().lower()
        phone = request.POST.get("phone", "").strip()
        portfolio = request.POST.get("portfolio", "").strip()
        password = request.POST.get("password", "")
        password2 = request.POST.get("password2", "")
        status = request.POST.get("status", "").strip()
        role_id = request.POST.get("role", "").strip()

        # Required fields
        if not name or not email or not phone or not password or not password2:
            messages.error(request, "Please fill in all required fields.")
            return render(
                request,
                "pages/apply.html",
                {"internships": internships}
            )

        # Validate email
        try:
            validate_email(email)
        except ValidationError:
            messages.error(request, "Enter a valid email address.")
            return render(
                request,
                "pages/apply.html",
                {"internships": internships}
            )

        # Check duplicate email
        if User.objects.filter(email__iexact=email).exists():
            messages.error(
                request,
                "An account with this email already exists."
            )
            return render(
                request,
                "pages/apply.html",
                {"internships": internships}
            )

        # Validate phone
        if not phone.isdigit() or len(phone) != 10:
            messages.error(request, "Enter a valid 10-digit phone number.")
            return render(
                request,
                "pages/apply.html",
                {"internships": internships}
            )

        # Validate password
        if password != password2:
            messages.error(request, "Passwords do not match.")
            return render(
                request,
                "pages/apply.html",
                {"internships": internships}
            )

        if len(password) < 8:
            messages.error(
                request,
                "Password must be at least 8 characters."
            )
            return render(
                request,
                "pages/apply.html",
                {"internships": internships}
            )

        if password.isdigit():
            messages.error(
                request,
                "Password cannot be entirely numeric."
            )
            return render(
                request,
                "pages/apply.html",
                {"internships": internships}
            )

        # Validate status
        allowed_statuses = {
            "student",
            "graduate",
            "professional",
            "other",
        }

        if status not in allowed_statuses:
            messages.error(request, "Please select a valid status.")
            return render(
                request,
                "pages/apply.html",
                {"internships": internships}
            )

        # Validate internship
        if not role_id.isdigit():
            messages.error(
                request,
                "Please select a valid internship role."
            )
            return render(
                request,
                "pages/apply.html",
                {"internships": internships}
            )

        try:
            internship = Internship.objects.get(pk=role_id)
        except Internship.DoesNotExist:
            messages.error(
                request,
                "Selected internship is not valid."
            )
            return render(
                request,
                "pages/apply.html",
                {"internships": internships}
            )

        # Create user and candidate
        try:
            with transaction.atomic():

                user = User.objects.create_user(
                    username=email,
                    email=email,
                    password=password,
                )

                Candidate.objects.create(
                    user=user,
                    name=name,
                    phone=phone,
                    portfolio=portfolio,
                    status=status,
                    role=internship,
                )

        except Exception:
            messages.error(
                request,
                "Unable to create your application. Please try again."
            )
            return render(
                request,
                "pages/apply.html",
                {"internships": internships}
            )

        # Login after successful registration
        login(request, user)

        messages.success(
            request,
            "Your account has been created successfully."
        )

        return redirect("manage_dashboard")

    return render(
        request,
        "pages/apply.html",
        {"internships": internships}
    )