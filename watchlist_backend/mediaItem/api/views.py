
from rest_framework import  viewsets, permissions, exceptions
from rest_framework.exceptions import  ValidationError
from django.shortcuts import get_object_or_404
from rest_framework.response import Response

from .serializers import HaveWatchedMediaItemSerializer, WantToWatchMediaItemSerializer
from mediaItem.models import HaveWatchedMediaItem, WantToWatchMediaItem


class wantToWatchMediaItemViewSet(viewsets.ModelViewSet):
    serializer_class = WantToWatchMediaItemSerializer
    permission_classes = [permissions.IsAuthenticated]  

    def get_queryset(self):  
        return self.request.user.wantToWatchMediaItem.all()
    
    def retrieve(self, request, pk):
        queryset = request.user.wantToWatchMediaItem.all()
        mediaItem= queryset.filter(mdbID = pk)
        obj = get_object_or_404(mediaItem)
        return Response(WantToWatchMediaItemSerializer(obj).data)

    def perform_create(self, serializer):  
        queryset = self.request.user.wantToWatchMediaItem.all().filter(mdbID = self.request.data['mdbID'])
        if queryset.exists():
            raise ValidationError('mediumet finnes allerede i listen')
        serializer.save(owner=self.request.user)



class haveWatchedMediaItemViewSet(viewsets.ModelViewSet):
    serializer_class = HaveWatchedMediaItemSerializer
    permission_classes = [permissions.IsAuthenticated]  

    def get_queryset(self):  
        return self.request.user.haveWatchedMediaItem.all()

    def perform_create(self, serializer):  
        queryset = self.request.user.haveWatchedMediaItem.all().filter(mdbID = self.request.data['mdbID'])
        if queryset.exists():
            raise ValidationError('mediumet finnes allerede i listen')
        serializer.save(owner=self.request.user)
    
    def retrieve(self, request, pk):
        queryset = request.user.haveWatchedMediaItem.all()
        mediaItem= queryset.filter(mdbID = pk)
        obj = get_object_or_404(mediaItem)
        return Response(HaveWatchedMediaItemSerializer(obj).data)


    