from django.shortcuts import render
from .models import Entries


# Create your views here.
def home(request):
    return render(request, 'home.html')


def about(request):
    return render(request, 'about.html')


def profile(request):
    return render(request, 'profile.html')


def search(request):
    search = ''

    if request.method == 'POST':
        search = request.POST.get("search")

    return render(request, 'search.html', {'searchy': search, 'entries': Entries.objects.all()})


def addEntry(request):
    return render(request, 'addEntry.html')


def signIn(request):
    return render(request, 'signIn.html')