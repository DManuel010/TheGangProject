from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

# 'methods' can be used to apply the same modification to multiple methods
@swagger_auto_schema(methods=['get'], responses={200: "Ya good"})
@api_view(["GET"])
def index(request):
    return HttpResponse("Hello world! This is the testapp index.")
