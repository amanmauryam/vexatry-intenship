from django.contrib import admin
from .models import Candidate
# Register your models here.
@admin.register(Candidate)
class CandidateAdmin(admin.ModelAdmin):
    list_display = ('user', 'phone', 'status', 'role')
    list_filter = ('status', 'role')
    search_fields = ('user__username', 'user__email')