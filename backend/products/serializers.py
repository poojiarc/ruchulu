from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source="category.name_english")

    class Meta:
        model = Product
        fields = [
            "id",
            "name_telugu",
            "name_english",
            "price_per_kg",
            "image",
            "category"
        ]