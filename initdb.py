import json
import sqlite3

connection = sqlite3.connect('office_quotes.sql')
cursor = connection.cursor()
cursor.execute('Create Table if not exists Quote (quote_id Integer, quote Text, character Text)')

office_quotes = json.load(open('src/data/office_quotes.json'))
columns = ['quote_id','quote','character']
for row in office_quotes:
    keys= tuple(row[c] for c in columns)
    cursor.execute('insert into Quote values(?,?,?)',keys)
    print(f'quote #{row["quote_id"]} inserted Succefully')

connection.commit()
connection.close()