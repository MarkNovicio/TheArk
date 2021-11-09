from django.shortcuts import render
from django.core.mail import send_mail

def index(request):
    return render(request, "index.html")

def contact(request):
    if request.method == "POST":
        message_name = request.POST['name']
        message_email = request.POST['email']
        message = request.POST['message']

        #send an email
        send_mail(
            name, 

        )
    return render(request, "contact.html")
