"""
    Views for mediaItems.
    MediaItem is a list of either movies or series with external Movie Database IDs(mbdID).
    This File should be updated!!! We implemented the mediaItem with a lot of redundancy in the models,
    this view tries to go around the redundancy and pretends that a mediaItem is not bound by a single user.
"""
from rest_framework import  viewsets, permissions, exceptions, status
from rest_framework.exceptions import  ValidationError
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from .serializers import HaveWatchedMediaItemSerializer, WantToWatchMediaItemSerializer
from mediaItem.models import HaveWatchedMediaItem, WantToWatchMediaItem

class wantToWatchMediaItemViewSet(viewsets.ModelViewSet):
    """ 
    View for the list of mediaItems in wantToWatch for a single user
    """
    serializer_class = WantToWatchMediaItemSerializer
    permission_classes = [permissions.IsAuthenticated]  

    def get_queryset(self):
        """ 
        returns a list of all mediaItems a user have in its list
        """
        return self.request.user.wantToWatchMediaItem.all()
    
    def retrieve(self, request, pk):
        """ 
        returns a mediaItem by mdbID if it lays in the users list
        """
        queryset = request.user.wantToWatchMediaItem.all()
        mediaItem= queryset.filter(mdbID = pk)
        # retrieve only if it exits
        obj = get_object_or_404(mediaItem)
        return Response(WantToWatchMediaItemSerializer(obj).data)

    def destroy(self, request, pk):
        """ 
        deletes a mediaItem by mdbID if it lays in the users list
        """
        queryset = request.user.wantToWatchMediaItem.all()
        mediaItem= queryset.filter(mdbID = pk)
        obj = get_object_or_404(mediaItem)
        self.perform_destroy(obj)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

    def perform_create(self, serializer):
        """ 
        adds a mediaItem by mdbID if it doesn't lay in the list already
        """
        queryset = self.request.user.wantToWatchMediaItem.all().filter(mdbID = self.request.data['mdbID'])
        if queryset.exists():
            raise ValidationError('mediumet finnes allerede i listen')
        serializer.save(owner=self.request.user)



class haveWatchedMediaItemViewSet(viewsets.ModelViewSet):
    """ 
    View for the list of mediaItems in haveWatched for a single user
    """
    serializer_class = HaveWatchedMediaItemSerializer
    permission_classes = [permissions.IsAuthenticated]  

    def get_queryset(self): 
        """ 
        returns a list of all mediaItems a user have in its list
        """
        return self.request.user.haveWatchedMediaItem.all()

    def retrieve(self, request, pk):
        """ 
        returns a mediaItem by mdbID if it lays in the users list
        """
        queryset = request.user.haveWatchedMediaItem.all()
        mediaItem= queryset.filter(mdbID = pk)
        obj = get_object_or_404(mediaItem)
        return Response(HaveWatchedMediaItemSerializer(obj).data)


    def destroy(self, request, pk):
        """ 
        deletes a mediaItem by mdbID if it lays in the users list
        """
        queryset = request.user.haveWatchedMediaItem.all()
        mediaItem= queryset.filter(mdbID = pk)
        obj = get_object_or_404(mediaItem)
        self.perform_destroy(obj)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()
    
    def perform_create(self, serializer):
        """ 
        adds a mediaItem by mdbID if it doesn't lay in the list already
        """
        queryset = self.request.user.haveWatchedMediaItem.all().filter(mdbID = self.request.data['mdbID'])
        if queryset.exists():
            raise ValidationError('mediumet finnes allerede i listen')
        serializer.save(owner=self.request.user)


    