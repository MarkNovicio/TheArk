from django.shortcuts import render
from django.core.mail import send_mail

def index(request):
    return render(request, "index.html")

def contact(request):

    return render(request, "contact.html")

def submit_mail(request):
    if request.method == "POST":
        message_name = request.POST['name']
        message_email = request.POST['email']
        message = request.POST['message']

        #send an email
        send_mail(
            message_name, #subject
            message, # message
            message_email, 
            ['th3arclearningcenter@gmail.com'],

        )
        return render(request, 'sent_email.html', {'message_email'})

    else:
        return render(request, 'sent_email.html', {})