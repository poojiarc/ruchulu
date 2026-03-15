from django.contrib import admin
from .models import Category, Product


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("id", "name_english", "name_telugu")


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("id", "name_english", "category", "price_per_kg")
    list_filter = ("category",)
    search_fields = ("name_english", "name_telugu")