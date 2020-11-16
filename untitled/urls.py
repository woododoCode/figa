from django.conf.urls import url
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.urls import path, include
from django.views.generic import RedirectView

from blog import views
from untitled import settings


urlpatterns = [
    path('admin/', admin.site.urls),
    path('',  views.index),
    path('blog/', include('blog.urls', namespace='blog')),
]

# if settings.DEBUG:
#     import os
#     from django.conf.urls.static import static
#     from django.views.generic.base import RedirectView
#     from django.contrib.staticfiles.urls import staticfiles_urlpatterns
#
#     urlpatterns += staticfiles_urlpatterns() # tell gunicorn where static files are in dev mode
#     urlpatterns += static(settings.MEDIA_URL + 'images/', document_root=os.path.join(settings.MEDIA_ROOT, 'images'))
#     urlpatterns += [
#         url(r'^favicon\.ico$', RedirectView.as_view(url=settings.STATIC_URL + 'untitled/images/favicon.ico')),
#     ]

if settings.DEBUG:
    urlpatterns = urlpatterns + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
