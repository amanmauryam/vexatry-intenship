from django.db import models
from app.models import Internship
from django.conf import settings
from django.core.validators import FileExtensionValidator
from PIL import Image
from io import BytesIO
from django.utils.text import slugify
from django.core.files.base import ContentFile
import os
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
    phone = models.CharField(max_length=15)
    status = models.CharField(max_length=20, choices=[
        ('student', 'Student'),
        ('graduate', 'Recent Graduate'),
        ('professional', 'Working Professional'),
        ('other', 'Other')
    ])
    role = models.ForeignKey('app.Internship', on_delete=models.SET_NULL, null=True, blank=True)
    portfolio=models.URLField(max_length=200, null=True, blank=True)
    image = models.ImageField(
        upload_to="profile_image/",
        validators=[
            FileExtensionValidator(
                allowed_extensions=["jpg", "jpeg", "png", "webp"]
            )
        ],
        blank=True,
        null=True,
    )
    def save(self, *args, **kwargs):
        previous_image = None
        if self.pk:
            previous_image = (
                Candidate.objects.filter(pk=self.pk)
                .values_list("image", flat=True)
                .first()
            )

        if self.image and not self.image._committed:
            self.image.file.seek(0)
            img = Image.open(self.image.file)

            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")

            img.thumbnail((1200, 1200))

            buffer = BytesIO()
            img.save(
                buffer,
                format="WEBP",
                quality=80,
                optimize=True,
            )

            filename = slugify(self.name) + ".webp"

            self.image.save(
                filename,
                ContentFile(buffer.getvalue()),
                save=False,
            )

        super().save(*args, **kwargs)

        if previous_image and self.image and previous_image != self.image.name:
            self.image.storage.delete(previous_image)