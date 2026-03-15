# from rest_framework.views import APIView
# from rest_framework.response import Response
# from .models import Banner
# from .serializers import BannerSerializer

# class BannerListAPIView(APIView):
#     def get(self, request):
#         banners = Banner.objects.filter(is_active=True)
#         serializer = BannerSerializer(banners, many=True)
#         return Response(serializer.data)



from rest_framework.generics import ListAPIView
from .models import Banner
from .serializers import BannerSerializer

class BannerListAPIView(ListAPIView):
    queryset = Banner.objects.filter(is_active=True).order_by("-created_at")[:2]
    serializer_class = BannerSerializer