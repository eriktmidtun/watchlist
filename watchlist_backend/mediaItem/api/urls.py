

from rest_framework import routers


from .views import wantToWatchMediaItemViewSet, haveWatchedMediaItemViewSet

router = routers.DefaultRouter()

#URL prefiks må her trolig endres 
router.register('wantToWatch', wantToWatchMediaItemViewSet, 'wantToWatch')
router.register('haveWatched', haveWatchedMediaItemViewSet, 'haveWatched')

# router.register('<The URL prefix>', <The viewset class>, '<The URL name>')

urlpatterns = router.urls