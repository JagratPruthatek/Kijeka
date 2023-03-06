from django.db import models


# Create your models here.
class Category(models.Model):
    categoryName = models.CharField(max_length=500)
    categoryLink = models.CharField(max_length=500, default='', blank=True, null=True)
    discription = models.TextField()

    def __str__(self):
        return self.categoryName

class SubCategory(models.Model):
    subCategoryName = models.CharField(max_length=500)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    discription = models.TextField()

    def __str__(self):
        return self.subCategoryName

class Product(models.Model):
    productName = models.CharField(max_length=500)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    modelNo = models.CharField(max_length=500, default='', blank=True, null=True)
    isOnHome = models.BooleanField(default=False)
    description = models.TextField()
    images = models.ImageField(upload_to='images/')
    isUploaded = models.BooleanField(default=False)

    def __str__(self):
        return self.productName

