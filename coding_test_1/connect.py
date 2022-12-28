from pymongo import MongoClient

def get_database():
    CONNECTION_STRING = "mongodb+srv://admin:Sbi%401234@test-database.4jkwo.mongodb.net/test?authSource=admin&replicaSet=atlas-32jw9u-shard-0&readPreference=primary&ssl=true"
    client = MongoClient(CONNECTION_STRING)
    return client['netra-ids']

if __name__ == "__main__":
    dbname = get_database()
    db = dbname.get_collection("netras")
    lst = []
    f = open('coding_test_1/1st_csea.txt').readlines()
    for i in f:
        i = i.split("    ")
        lst.append({'netra': int(i[0]), 'rollno': i[1].replace('\n', ''), 'class': 'CSD', 'year': 1, 'section': 'A', '__v': 0})
    print(*lst, sep="\n")
    db.insert_many(lst)