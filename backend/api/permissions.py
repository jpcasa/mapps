from rest_framework.permissions import BasePermission
from .models import Contact


class IsOwner(BasePermission):
    """Custom permission class to allow only contact owners to edit them."""

    def has_object_permission(self, request, view, obj):
        """Return True if permission is granted to the contact owner."""
        if isinstance(obj, Contact):
            return obj.owner == request.user
        return obj.owner == request.user
