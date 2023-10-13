from pymongo import MongoClient

# Conectar ao servidor MongoDB
client = MongoClient('mongodb://localhost:27017/')
# Acessar um banco de dados (ou criar se não existir)
db = client['ipper']
# Acessar uma coleção dentro do banco de dados (ou criar se não existir)
colecao = db['login']

def turnOnAlert():
    colecao.update_one(
        {"_id": 1},
        {"$set": {"alert": True}}
    )

def getAlertValue():
    verification = colecao.find_one({ "_id": 1 })
    return verification['alert']

