
from django.contrib import admin
from ver1.models import SentimentAnalysist, User

# Register your models here.
admin.site.register(
    [
        User,
        SentimentAnalysist
    ]
)
