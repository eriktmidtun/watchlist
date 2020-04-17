"""
Urls for mediaItem.
"""

from rest_framework import routers
from .views import wantToWatchMediaItemViewSet, haveWatchedMediaItemViewSet

router = routers.DefaultRouter()

router.register('wantToWatch', wantToWatchMediaItemViewSet, 'wantToWatch')
router.register('haveWatched', haveWatchedMediaItemViewSet, 'haveWatched')
# router.register('<The URL prefix>', <The viewset class>, '<The URL name>')

urlpatterns = router.urls
