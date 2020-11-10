
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from blog import views
from untitled import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',  views.index),
    path('blog/', include('blog.urls', namespace='blog')),
]

if settings.DEBUG:
    urlpatterns = urlpatterns + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
