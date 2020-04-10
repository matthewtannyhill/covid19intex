from __future__ import unicode_literals

from django.http import Http404
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api import fields
from api.models import Campaign
from api.serializers import CampaignSerializer
import json
import stripe

from django.shortcuts import render
from django.http import HttpResponse


class CampaignList(APIView):
    '''Get all campaigns or create a campaign'''
    @csrf_exempt
    def get(self, request, format=None):
        camps = Campaign.objects.all()
        if request.query_params.get('id'):
            camps = camps.filter(title__contains=request.query_params.get('id'))
        serializer = CampaignSerializer(camps, many=True)
        return Response(serializer.data)

    @csrf_exempt
    def post(self, request, format=None):
        serializer = CampaignSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CampaignDetail(APIView):
    '''Work with an individual Campaign object'''
    @csrf_exempt
    def get(self, request, pk, format=None):
        camp = Campaign.objects.get(id=pk)
        serializer = CampaignSerializer(camp)
        return Response(serializer.data)

    @csrf_exempt
    def put(self, request, pk, format=None):
        camp = Campaign.objects.get(id=pk)
        serializer = CampaignSerializer(camp, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @csrf_exempt
    def delete(self, request, pk, format=None):
        camp = Campaign.objects.get(id=pk)
        camp.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# Prediction API

def loginView(request):
# this view will pull up the submit html template
        return render(request, "login.html", {})

def indexView(request):
# this view will pull up the submit html template
        return render(request, "prediction.html", {})

def resultsView(request):
# this view receives parameters from the submit html template and calls the API in azure
# this contains API code for Python and Python3 

    # If you are using Python 3+, import urllib instead of urllib2
    #import urllib2.request
    import urllib
    import json 

    our_data = {
                "Inputs": {
                    "input1": {
                    "ColumnNames": [
                        "category_id",
                        "goal_USD",
                        "description",
                        "has_beneficiary",
                        "location_country",
                        "charity_valid",
                        "avg_donation",
                        "description Language"
                    ],
                    "Values": [
                        [
                        request.POST['category_id'],
                        request.POST['goal_USD'],
                        request.POST['description'],
                        request.POST['has_beneficiary'],
                        request.POST['location_country'],
                        request.POST['charity_valid'],
                        0,
                        "English"
                        ]
                    ]
                    }
                },
                "GlobalParameters": {}
                }

    # First Model
    # the API call
    body = str.encode(json.dumps(our_data))
    url = 'https://ussouthcentral.services.azureml.net/workspaces/63c20b3b0cb64292ab6adbb2bac52a3f/services/ee47e60df6334f6e9911cd3faac44999/execute?api-version=2.0&details=true'
    api_key = 'fyVRkF/Ec0J02JenaNjlViKtb/ofqY79Nf6h6tZB/qkvxOLh7mhu5BeMW4nXSMBhRySdxaQP1XngbI4AMQfR3Q=='
    # Replace my url and api_key with your own values
    headers = {'Content-Type':'application/json', 'Authorization':('Bearer '+ api_key)}

    # If you are using Python 3+, replace urllib2 with urllib.request
    #req = urllib2.Request(url, body, headers)
    req = urllib.request.Request(url, body, headers) 

    # python3 uses urllib while python uses urllib2
    #response = urllib2.request.urlopen(req)
    response = urllib.request.urlopen(req)

    # this formats the results 


    result = response.read()
    result = json.loads(result) # turns bits into json object

    print(result["Results"])
    print(result["Results"]["output1"])
    print(result["Results"]["output1"]["value"])
    print(result["Results"]["output1"]["value"]["Values"])
    print(result["Results"]["output1"]["value"]["Values"][0])
    print(result["Results"]["output1"]["value"]["Values"][0][9])

    result = result["Results"]["output1"]["value"]["Values"][0][9]

    # azure send the response as a weird result object. It would be wise to postman to find the 
    # path to the response var value


    our_data2 = {
                "Inputs": {
                    "input1": {
                    "ColumnNames": [
                        "category_id",
                        "goal_USD",
                        "donators",
                        "has_beneficiary",
                        "social_share_total",
                        "location_country"
                    ],
                    "Values": [
                        [
                        request.POST['category_id'],
                        request.POST['goal_USD'],
                        0,
                        request.POST['has_beneficiary'],
                        request.POST['social_share_total'],
                        request.POST['location_country'],
                        ]
                    ]
                    }
                },
                "GlobalParameters": {}
                }
    # Second Model
    # the API call
    body2 = str.encode(json.dumps(our_data2))
    url2 = 'https://ussouthcentral.services.azureml.net/workspaces/63c20b3b0cb64292ab6adbb2bac52a3f/services/402f0bf6068f45ac9825dc16ea9beb63/execute?api-version=2.0&details=true'
    api_key2 = 'rGYBQHeFNCv+LT49Eqib/JkCL+CcWQRrR/urFk7oe74vgFerXOAwjghhyspSff1M/MRF9H275+2jzzTYqPQFAg=='
    # Replace my url and api_key with your own values
    headers2 = {'Content-Type':'application/json', 'Authorization':('Bearer '+ api_key2)}

    # If you are using Python 3+, replace urllib2 with urllib.request
    #req = urllib2.Request(url, body, headers)
    req2 = urllib.request.Request(url2, body2, headers2) 

    # python3 uses urllib while python uses urllib2
    #response = urllib2.request.urlopen(req)
    response2 = urllib.request.urlopen(req2)

    # this formats the results 

    result2 = response2.read()
    result2 = json.loads(result2) # turns bits into json object

    print(result2["Results"])
    print(result2["Results"]["output1"])
    print(result2["Results"]["output1"]["value"])
    print(result2["Results"]["output1"]["value"]["Values"])
    print(result2["Results"]["output1"]["value"]["Values"][0])
    print(result2["Results"]["output1"]["value"]["Values"][0][6])

    result2 = result2["Results"]["output1"]["value"]["Values"][0][6]


    result3 = float(result) * float(result2)

    return render(request, "results.html", {"result": result, "result2": result2, "result3": result3}) # this path assumes that this file is in the root directory in a folder named templates
    # the third parameter sends the result (the response variable value) to the template to be rendered