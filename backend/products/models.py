from django.db import models

class Category(models.Model):
    name_telugu = models.CharField(max_length=200)
    name_english = models.CharField(max_length=200)

    def __str__(self):
        return self.name_english


class Product(models.Model):
    name_telugu = models.CharField(max_length=200)
    name_english = models.CharField(max_length=200)

    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    price_per_kg = models.IntegerField()

    image = models.ImageField(upload_to="products/")

    def __str__(self):
        return self.name_english