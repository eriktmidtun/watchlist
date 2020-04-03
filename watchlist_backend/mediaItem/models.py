"""
List models that relates mediaItems to a user.
A user have two lists: HaveWatched and WantToWatch.
These models generate a lot of redundancy and should be updated!
"""

from django.db import models
from django.contrib.auth.models import User  


class HaveWatchedMediaItem(models.Model): 
    mdbID = models.IntegerField()
    owner = models.ForeignKey(User, related_name="haveWatchedMediaItem", on_delete = models.CASCADE, null=True)
    mediumType = models.CharField(max_length=255)

    def __str__(self):
        return str(self.mdbID)


class WantToWatchMediaItem(models.Model):
    mdbID = models.IntegerField()
    owner = models.ForeignKey(User, related_name="wantToWatchMediaItem", on_delete = models.CASCADE, null=True)
    mediumType = models.CharField(max_length=255)

    def __str__(self):
        return str(self.mdbID)
