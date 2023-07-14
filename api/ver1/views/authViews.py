from rest_framework.response import Response
from rest_framework.views import APIView
from ver1.serializers.authSerializer import UserSerializer


class RegisterView(APIView):
    permission_classes = []
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)