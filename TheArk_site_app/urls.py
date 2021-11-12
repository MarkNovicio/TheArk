from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('contact', views.contact),
    path('submit_mail', views.submit_mail)
]