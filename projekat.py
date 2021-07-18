from pymongo import MongoClient
import os, time
from datetime import datetime
import json
import serial

ser = serial.Serial('COM7', 115200)

#ser = serial.Serial()
#ser.baudrate = 115200
#ser.port = 'COM7'
#ser.timeout = 5


client = MongoClient('localhost', 27017)

db = client['baza']

collection = db['pocetni']


def WriteToBase():
    now = datetime.now()
    today = now.strftime("%d/%m/%Y %H:%M:%S")
    data = {str(today) : ser_bytes}
    #data1 = {vreme : str(today), lux : ser_bytes}
    collection.insert_one(data)
    #collection.insert_one(data1)
    

def ExportBase():
    test_command = "mongoexport --collection=pocetni --db=baza --out=events.json"
    os.system(test_command)

def ParseData():
    teststring = ""
    with open('events.json', 'r') as f:
        for count, line in enumerate(f, start=1):
            teststring += line[43:].replace("}", ",")
    file1 = open("parsedData.json", "w")
    broj = len(teststring) - 2
    teststring = "{\n" + teststring[:broj] + "\n}"
    file1.write(teststring) 
    file1.close()

while 1:
    ser_bytes = ser.readline().rstrip().decode('utf-8')
    WriteToBase()
    ExportBase()
    ParseData()
    #ser.flushOutput()
    #ser.flushInput()
    #ser.flush()
    time.sleep(1)
    
    
    