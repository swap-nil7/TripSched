from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Review


class SignUpForm(UserCreationForm):
    birth_date = forms.DateField(help_text='Required. Format: YYYY-MM-DD')
    phone = forms.DecimalField(max_digits=10, decimal_places=0, help_text="Enter number in form of '9876543210'")

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'username', 'birth_date', 'password1', 'password2', 'phone')

class ReviewForm(UserCreationForm):
    class Meta:
        model = Review
        fields = ('place', 'review', 'rating')