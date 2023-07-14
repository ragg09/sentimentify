from django.urls import path
from ver1.views.authViews import RegisterView

urlpatterns = [
    path('register/', RegisterView.as_view()),
]
