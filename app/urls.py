from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

from app.models import *
from app import *

urlpatterns = [
    # Examples:
    url(r'^$', home, name='home'),

    url(r'^login/$', custom_login, {'template_name': 'login.html'}, name='login'),
    url(r'^logout/$', custom_logout, {'next_page': 'home'}, name='logout'),
    url(r'^signup/$', signup, name='signup'),

    url(r'^admin/', include(admin.site.urls)),
]