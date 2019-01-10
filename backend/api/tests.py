from django.test import TestCase
from .models import Contact
from rest_framework.test import APIClient
from rest_framework import status
from django.urls import reverse
from django.contrib.auth.models import User

# Model Test Cases
class ModelTestCase(TestCase):
    """This class defines the test suite for the contact model."""

    def setUp(self):
        """Define the test client and other test variables."""
        user = User.objects.create(username="nerd")
        self.contact_name = "Jane Doe"
        self.contact = Contact(name=self.contact_name, owner=user)


    def test_model_can_create_a_contact(self):
        """Test the contact model can create a contact."""
        old_count = Contact.objects.count()
        self.contact.save()
        new_count = Contact.objects.count()
        self.assertNotEqual(old_count, new_count)


# View Test Cases
class ViewTestCase(TestCase):
    """Test suite for the api views."""

    def setUp(self):
        """Define the test client and other test variables."""
        user = User.objects.create(username="nerd")

        # Initialize client and force it to use authentication
        self.client = APIClient()
        self.client.force_authenticate(user=user)

        # Since user model instance is not serializable, use its Id/PK
        self.contact_data = {'name': 'Go to Ibiza', 'owner': user.id}
        self.response = self.client.post(
            reverse('create'),
            self.contact_data,
            format="json")


    def test_api_can_create_a_contact(self):
        """Test the api has contact creation capability."""
        self.assertEqual(self.response.status_code, status.HTTP_201_CREATED)


    def test_authorization_is_enforced(self):
        """Test that the api has user authorization."""
        new_client = APIClient()
        res = new_client.get('/contacts/', kwargs={'pk': 3}, format="json")
        self.assertEqual(res.status_code, status.HTTP_403_FORBIDDEN)


    def test_api_can_get_a_contact(self):
        """Test the api can get a given contact."""
        contact = Contact.objects.get(id=1)
        response = self.client.get(
            '/contacts/',
            kwargs={'pk': contact.id}, format="json")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertContains(response, contact)


    def test_api_can_update_contact(self):
        """Test the api can update a given contact."""
        contact = Contact.objects.get()
        change_contact = {'name': 'Something new'}
        res = self.client.put(
            reverse('details', kwargs={'pk': contact.id}),
            change_contact, format='json'
        )
        self.assertEqual(res.status_code, status.HTTP_200_OK)


    def test_api_can_delete_contact(self):
        """Test the api can delete a contact."""
        contact = Contact.objects.get()
        response = self.client.delete(
            reverse('details', kwargs={'pk': contact.id}),
            format='json',
            follow=True)
        self.assertEquals(response.status_code, status.HTTP_204_NO_CONTENT)
