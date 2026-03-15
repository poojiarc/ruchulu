from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product, Category


@api_view(["GET"])
def product_list(request):
    products = Product.objects.all()

    data = []

    for p in products:
        data.append({
            "id": p.id,
            "name_telugu": p.name_telugu,
            "name_english": p.name_english,
            "price_per_kg": p.price_per_kg,
            "image": request.build_absolute_uri(p.image.url) if p.image else None,
            "category": p.category.name_english if p.category else None,
        })

    return Response(data)


@api_view(["GET"])
def category_list(request):
    categories = Category.objects.all()

    data = []

    for c in categories:
        data.append({
            "id": c.id,
            "name_telugu": c.name_telugu,
            "name_english": c.name_english,
        })

    return Response(data)