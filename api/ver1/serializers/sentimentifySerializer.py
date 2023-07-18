from rest_framework import serializers
from ver1.models import SentimentAnalysist


class SentimentifySerializer(serializers.ModelSerializer):
    class Meta:
        model = SentimentAnalysist
        fields = '__all__'
