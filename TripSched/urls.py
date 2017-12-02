from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings

from django.contrib.staticfiles.urls import staticfiles_urlpatterns
urlpatterns = [
    # Examples:
    # url(r'^$', 'TripSched.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^', include('app.urls')),
    url(r'^admin/', include(admin.site.urls)),
]

if settings.DEBUG:
    urlpatterns +=staticfiles_urlpatterns()
