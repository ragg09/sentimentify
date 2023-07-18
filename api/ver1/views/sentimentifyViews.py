import nltk
from nltk.sentiment import SentimentIntensityAnalyzer
from rest_framework import generics, status
from rest_framework.response import Response
from ver1.models import SentimentAnalysist
from ver1.serializers.sentimentifySerializer import SentimentifySerializer
from ver1.utils.sentiment_helper import SentimentInterpreter

# https://www.nltk.org/
# Download all NLTK data
# downloading everything will take time to finish
# downloading specific packages is better
# nltk.download('all')

# Download the necessary NLTK data for sentiment analysis
nltk.download('vader_lexicon')


# https://huggingface.co/
from transformers import pipeline


class SentimentView(generics.ListCreateAPIView):
    queryset = SentimentAnalysist.objects.all()
    serializer_class = SentimentifySerializer
    
    def create(self, request):
        # Get the AI package parameter from the request query parameters
        ai_package = request.query_params.get('ai_package', '')
        
        if ai_package == 'vader':
            # Use NLTK's VADER for sentiment analysis
            sia = SentimentIntensityAnalyzer()
            score = sia.polarity_scores(request.data['text'])
            sentimentInterpreter = SentimentInterpreter()
            sentimentiment_equivalence = sentimentInterpreter.compound_score_equivalence(score['compound'])
            
            return Response({
                "score": score['compound'],
                "sentiment": sentimentiment_equivalence
            })
        elif ai_package == 'transformers':
            # Use sentiment-analysis pipeline for sentiment analysis
            sentiment = pipeline("sentiment-analysis")
            
           # Use ChatGPT for text generation
            # chatgpt_generator = pipeline("text-generation", model="EleutherAI/gpt-neo-2.7B")
            # generated_text = chatgpt_generator(request.data['text'], max_length=1000, do_sample=True)
            
            sentiment = sentiment(request.data['text'])
            
            return Response({
                "score_text": sentiment[0]["score"],
                "sentiment": sentiment[0]["label"],
            })
        else:
            return Response({"message": "Invalid AI package specified."}, status=status.HTTP_400_BAD_REQUEST)
