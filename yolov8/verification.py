from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client['ipper']
collection = db['verification']

def turnOnAlert(image_name, date, time, location):
    collection.update_one(
        {"_id": 1},
        {"$set": {
            "isAlertOn": True,
            "imageName": image_name,
            "date": date,
            "time": time,
            "location": location
            }
        }
    )

def getAlertValue():
    verification = collection.find_one({ "_id": 1 })
    return verification['isAlertOn']

