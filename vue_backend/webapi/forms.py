from django import forms


class SearchForm(forms.Form):
    key = forms.CharField(max_length=32)