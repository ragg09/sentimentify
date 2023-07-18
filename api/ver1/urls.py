from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from ver1.views.authViews import LogoutView, RegisterView
from ver1.views.sentimentifyViews import SentimentView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', obtain_auth_token, name='login'),
    path('logout/',  LogoutView.as_view(), name='logout'),
    
    path('sentimentify/',  SentimentView.as_view(), name='sentimentify'),
]
