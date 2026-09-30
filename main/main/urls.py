
from django.conf.urls.static import static
from django.contrib import admin
from django.template.backends import django
from django.urls import path,include
from django.conf import settings


urlpatterns = [
    path('802134admin/', admin.site.urls),
    path('',include('app.urls')),
    path('dashboard/',include('dashboard.urls'))
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
