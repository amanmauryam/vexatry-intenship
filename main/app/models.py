from django.db import models

# Create your models here.
class InternshipCategory(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name

class Internship(models.Model):
    name = models.CharField(max_length=100)
    category = models.ForeignKey(InternshipCategory, on_delete=models.CASCADE)
    short_description=models.TextField()
    def __str__(self):
            return self.name

class InternshipTool(models.Model):
     name = models.CharField(max_length=100)
     internship = models.ForeignKey(Internship, on_delete=models.CASCADE, related_name='tools')
     def __str__(self):
             return self.name    