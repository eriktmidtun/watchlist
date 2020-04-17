"""
Views for mediaItems.
MediaItem is a list of either movies or series with external movie database IDs (mdbID).
This file should be updated!!! We implemented the mediaItem with a lot of redundancy in the models.
This view tries to work around the redundancy and "pretends"
that a mediaItem is not bound by a single user.
"""

from django.shortcuts import get_object_or_404
from rest_framework import viewsets, permissions, exceptions, status
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response
from mediaItem.models import HaveWatchedMediaItem, WantToWatchMediaItem
from .serializers import HaveWatchedMediaItemSerializer, WantToWatchMediaItemSerializer


class wantToWatchMediaItemViewSet(viewsets.ModelViewSet):
    """
    View for the list of mediaItems in wantToWatch for a single user.
    """
    serializer_class = WantToWatchMediaItemSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        """
        Returns a list of all mediaItems a user have in its list.
        """
        return self.request.user.wantToWatchMediaItem.all()

    @staticmethod
    def retrieve(request, pk):
        """
        Returns a mediaItem by mdbID if it is in the user's list.
        """
        queryset = request.user.wantToWatchMediaItem.all()
        mediaItem = queryset.filter(mdbID=pk)
        # Retrieves only if it exists.
        obj = get_object_or_404(mediaItem)
        return Response(WantToWatchMediaItemSerializer(obj).data)

    def destroy(self, request, pk):
        """
        Deletes a mediaItem by mdbID if it is in the user's list.
        """
        queryset = request.user.wantToWatchMediaItem.all()
        mediaItem = queryset.filter(mdbID=pk)
        obj = get_object_or_404(mediaItem)
        self.perform_destroy(obj)
        return Response(status=status.HTTP_204_NO_CONTENT)

    @staticmethod
    def perform_destroy(instance):
        """
        A helper function for destroy().
        """
        instance.delete()

    def perform_create(self, serializer):
        """
        Adds a mediaItem by mdbID if it is not already in the list.
        """
        queryset = self.request.user.wantToWatchMediaItem.\
                   all().filter(mdbID=self.request.data['mdbID'])
        if queryset.exists():
            raise ValidationError('Elementet finnes allerede i listen.')
        serializer.save(owner=self.request.user)


class haveWatchedMediaItemViewSet(viewsets.ModelViewSet):
    """
    View for the list of mediaItems in haveWatched for a single user.
    """
    serializer_class = HaveWatchedMediaItemSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        """
        Returns a list of all mediaItems a user have in its list.
        """
        return self.request.user.haveWatchedMediaItem.all()

    @staticmethod
    def retrieve(request, pk):
        """
        Returns a mediaItem by mdbID if it is in the users list.
        """
        queryset = request.user.haveWatchedMediaItem.all()
        mediaItem = queryset.filter(mdbID=pk)
        obj = get_object_or_404(mediaItem)
        return Response(HaveWatchedMediaItemSerializer(obj).data)

    def destroy(self, request, pk):
        """
        Deletes a mediaItem by mdbID if it is in the users list.
        """
        queryset = request.user.haveWatchedMediaItem.all()
        mediaItem = queryset.filter(mdbID=pk)
        obj = get_object_or_404(mediaItem)
        self.perform_destroy(obj)
        return Response(status=status.HTTP_204_NO_CONTENT)

    @staticmethod
    def perform_destroy(instance):
        """
        A helper function for destroy().
        """
        instance.delete()

    def perform_create(self, serializer):
        """
        Adds a mediaItem by mdbID if it is not already in the list.
        """
        queryset = self.request.user.haveWatchedMediaItem.\
                   all().filter(mdbID=self.request.data['mdbID'])
        if queryset.exists():
            raise ValidationError('Elementet finnes allerede i listen.')
        serializer.save(owner=self.request.user)
