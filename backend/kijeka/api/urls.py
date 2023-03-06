from django.urls import path

from . import views

urlpatterns = [
    path('addProduct/', views.addProduct, name='addProduct'),
    path('addCategory/', views.addCategory, name='addCategory'),
    path('categoryList/', views.categoryList, name='categoryList'),
    path('categorySideBar/', views.categorySideBar, name='categorySideBar'),
    path('productList/', views.productList, name='productList'),
    path('getProductDetail/', views.getProductDetail, name='getProductDetail'),
    path('homeProductList/', views.homeProductList, name='homeProductList'),
    path('getCategoryProducts/', views.getCategoryProducts, name='getCategoryProducts'),
    path('getCategoryDescription/', views.getCategoryDescription, name='getCategoryDescription'),
    path('dataAdder/', views.dataAdder, name='dataAdder'),
    path('dataUpdater/', views.dataUpdater, name='dataUpdater'),
]