# from rest_framework import serializers
# from .models import Banner

# class BannerSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Banner
#         fields = ["id", "title", "image"]


from rest_framework import serializers
from .models import Banner

class BannerSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Banner
        fields = ["id", "title", "image"]

    def get_image(self, obj):
        request = self.context.get("request")
        if obj.image:
            return request.build_absolute_uri(obj.image.url)
        return None