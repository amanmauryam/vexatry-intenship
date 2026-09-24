from django.contrib import admin
from .models import InternshipCategory, Internship, InternshipTool
# Register your models here.
@admin.register(InternshipCategory)
class InternshipCategoryAdmin(admin.ModelAdmin):
    pass

@admin.register(Internship)
class InternshipAdmin(admin.ModelAdmin):
    pass

@admin.register(InternshipTool)
class InternshipToolAdmin(admin.ModelAdmin):
    pass