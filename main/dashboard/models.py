from django.db import models
from app.models import Internship
from django.conf import settings

# Create your models here.
class Candidate(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="candidates",
    )
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    status = models.CharField(max_length=20, choices=[
        ('student', 'Student'),
        ('graduate', 'Recent Graduate'),
        ('professional', 'Working Professional'),
        ('other', 'Other')
    ])
    role = models.ForeignKey('app.Internship', on_delete=models.SET_NULL, null=True, blank=True)
    portfolio=models.URLField(max_length=200, null=True, blank=True)