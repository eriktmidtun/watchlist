from django.db import models
# For å kunne relatere et movieItem til en bruker. 
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