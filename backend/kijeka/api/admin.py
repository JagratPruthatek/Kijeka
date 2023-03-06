from django.contrib import admin
from .models import Category, SubCategory, Product
from import_export.admin import ExportActionMixin


class CategoryAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ('categoryName', 'categoryLink')
    search_fields = ['categoryName', 'categoryLink']

class SubCategoryAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ('subCategoryName', 'category')
    search_fields = ['subCategoryName', 'category']

class ProductAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ('productName', 'category', 'modelNo', 'isOnHome', 'isUploaded')
    search_fields = ['productName', 'category', 'modelNo', 'isOnHome', 'isUploaded']

admin.site.register(Category, CategoryAdmin)
admin.site.register(SubCategory, SubCategoryAdmin)
admin.site.register(Product, ProductAdmin)