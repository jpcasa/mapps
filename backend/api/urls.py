from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.authtoken.views import obtain_auth_token
from .views import (CreateView, DetailsView, UserView, UserDetailsView,
                    UserViewCreate)

urlpatterns = {
    path('contacts/', CreateView.as_view(), name="create"),
    path('contacts/<int:pk>/', DetailsView.as_view(), name="details"),
    path('auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('users/', UserView.as_view(), name="users"),
    path('users/create/', UserViewCreate.as_view(), name="users_create"),
    path('users/<int:pk>/', UserDetailsView.as_view(), name="user_details"),
    path('get-token/', obtain_auth_token)
}

urlpatterns = format_suffix_patterns(urlpatterns)
