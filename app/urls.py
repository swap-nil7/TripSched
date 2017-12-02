from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

from app.models import *
from app.views import *

urlpatterns = [
    # Examples:

    url(r'^$', custom_login, {'template_name': 'index.html'}, name='home'),
    url(r'^logout/$', custom_logout, {'next_page': 'home'}, name='logout'),
    url(r'^signup/$', signup, name='signup'),

    url(r'^admin/', include(admin.site.urls)),
]
