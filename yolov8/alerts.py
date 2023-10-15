from pymongo import MongoClient

# from datetime import datetime
# from pytz import timezone

# brasilia_tz = timezone('America/Sao_Paulo')
# utc_tz = timezone('UTC')
#
# current_datetime = datetime.now(utc_tz)
# current_datetime_brasilia = current_datetime.astimezone(brasilia_tz)
#
# time = current_datetime_brasilia.strftime("%H:%M:%S")
# date = current_datetime.date()
# current_date = date.strftime("%d-%m-%Y")

client = MongoClient('mongodb://localhost:27017/')
db = client['ipper']
collection = db['alerts']

def registerAlert(image_name, date, time, location):
    new_alert = {
        "imageName": image_name,
        "date": date,
        "time": time,
        "location": location
    }
    collection.insert_one(new_alert)