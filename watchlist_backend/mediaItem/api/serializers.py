"""
Serializer for the mediaItem lists. 
"""

from rest_framework import serializers
from mediaItem.models import HaveWatchedMediaItem, WantToWatchMediaItem


class HaveWatchedMediaItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = HaveWatchedMediaItem
        fields = ('mdbID','mediumType',)


class WantToWatchMediaItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = WantToWatchMediaItem
        fields = ('mdbID','mediumType',)
