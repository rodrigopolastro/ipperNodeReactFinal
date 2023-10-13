from pymongo import MongoClient
from datetime import datetime
from pytz import timezone

# Conectar ao servidor MongoDB
client = MongoClient('mongodb://localhost:27017/')
# Acessar um banco de dados (ou criar se não existir)
db = client['ipper']
# Acessar uma coleção dentro do banco de dados (ou criar se não existir)
colecao = db['alertas']

# brasilia_tz = timezone('America/Sao_Paulo')
# utc_tz = timezone('UTC')
#
# current_datetime = datetime.now(utc_tz)
# current_datetime_brasilia = current_datetime.astimezone(brasilia_tz)
#
# time = current_datetime_brasilia.strftime("%H:%M:%S")
# date = current_datetime.date()
# current_date = date.strftime("%d-%m-%Y")
def registerAlert(hora):
    nome = hora.strftime("%Y/%m/%d, %H:%M:%S")
    time = hora.strftime("%H:%M:%S")
    date = hora.strftime("%d/%m/%Y")
    novo_documento = {
        "nome": nome,
        "time": time,
        "date": date
    }
    colecao.insert_one(novo_documento)