from django.conf.urls import url, include
from . import views, apis

urlpatterns = [
    url(r'^$', views.index),
    url(r'^api/v1/todo/get/', apis.read, name='read'),
    url(r'^api/v1/todo/add/$', apis.create, name='create'),
    url(r'^api/v1/todo/update/(?P<todoID>\d+)/$', apis.update, name='update'),
    url(r'^api/v1/todo/delete/(?P<todoID>\d+)/$', apis.delete, name='delete'),
]
