from django.http import HttpResponse

class SimpleMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        # One-time configuration and initialization.

    def __call__(self, request):
        # Code to be executed for each request before
        # the view (and later middleware) are called.

        request.META['Desmond'] = "Selasi"
        

        uri =  request.build_absolute_uri() #https://foo.myvelocity.tech
        link_without_slashes = uri.split('/')[2] # foo.myvelocity.tech
        seller_subdomain = link_without_slashes.split('.')[0] #foo

        request.META['seller_subdomain'] = seller_subdomain


        response = self.get_response(request)

        # Code to be executed for each request/response after
        # the view is called.


        return response

    # def process_view(request, view_func, view_args, view_kwargs):
    #     # view_kwargs['name'] = "Hello"
    #     response = HttpResponse()
    #     response['Desmond'] = 120
    #     return response