from restframework.views import APIView
from restframework.authentication import 

class AuthView(APIView):
    authentication_classes = [TokenAuthentication]
    pass