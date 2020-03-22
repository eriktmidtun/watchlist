from rest_framework import serializers
from mediaItem.models import HaveWatchedMediaItem, WantToWatchMediaItem

class HaveWatchedMediaItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = HaveWatchedMediaItem
        fields = ('id','mdbID','mediumType',)

class WantToWatchMediaItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = WantToWatchMediaItem
        fields = ('id','mdbID','mediumType',)