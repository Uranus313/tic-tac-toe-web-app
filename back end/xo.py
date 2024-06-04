import time
from typing import List
from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

import models,database,CRUD,schemas

from fastapi.middleware.cors import CORSMiddleware

# Base.metadata.create_all(engine)
class Match:
    def __init__(self,matchID,player1,player2):
        self.matchID = matchID
        self.player1 = player1
        self.player2 = player2
        self.plays = [0,0,0,0,0,0,0,0,0]
        self.turn = 1
waitingPlayers = []
matches = List[Match]
matchCounter = 0
# player1 = User(name = 'akbar', score = 10)
# with SessionLocal.begin() as session:
#     session.add(player1)
#     session.commit()
#     session.close()
models.Base.metadata.create_all(bind=database.engine)
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()
# # db = Depends(get_db)
# db = database.SessionLocal()
# print(CRUD.change_user_score(db,"Arsam",1))
# # db.commit()
# users = CRUD.get_users(db, skip=0, limit=100)
# for user in users:
#     print(user.name,user.score)

# print(read_data.create_user(db,schemas.UserCreate(name = "Arsam",score = 1000)))

# class Item(BaseModel):
#     name: str
#     status: str

app = FastAPI()
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/users/", response_model=list[schemas.User])
async def get_all_users(db: Session = Depends(get_db)):
    return CRUD.get_users(db)
@app.get("/users/top", response_model=list[schemas.User])
async def get_all_users(db: Session = Depends(get_db),limit: int | None = None):
    return CRUD.get_top_users(db,limit)
@app.get("/users/{name}")
async def get_user(name: str, db: Session = Depends(get_db)):
    return CRUD.get_user(db, name)
@app.post("/users/")
async def add_user(user : schemas.UserCreate, db : Session = Depends(get_db)):
    past_user = CRUD.get_user(db, user.name)
    if past_user :
        raise HTTPException(403,"the user already exists")
    else:
        new_user = CRUD.create_user(db,user)
        return new_user   
@app.post("/waitingUsers/")
async def add_waiting_user(user : schemas.UserCreate):
    if len(waitingPlayers) == 0: 
        waitingPlayers.append(user.name)  
        return {}  
    else :
        newMatch = Match(matchCounter,user.name,waitingPlayers[0])
        matchCounter += 1
        waitingPlayers.pop()

        matches.append(newMatch)
        return newMatch
@app.get("/matchfound/{name}")
async def get_match(name):
    for match  in matches:
        if(match.player1 == name or match.player2 == name):
            return match
    return {}     
class Move():
    def __init__(self,matchID,location,player):
        self.matchID = matchID
        self.location = location
        self.player = player

@app.post('/moves/')
async def make_a_move(move : Move):
    for match in matches:
        if match.matchID == move.matchID:
            match.plays[move.location] = move.player
            match.turn += 1
            return match
    raise HTTPException(404,'match not found')        
@app.get('/turn/{matchID}')
async def get_turn(matchID):
    for match in matches:
        if match.matchID == matchID:
            return match.turn
    raise HTTPException(404,'match not found')        
@app.delete('/matches/{matchID}')
async def abandon_match(matchID):
    for match in matches:
        if match.matchID == matchID:
            matches.remove(match)
            return {'deleted' : True}
    raise HTTPException(404,'match not found') 
    

# @app.post("/users/chs")
# async def change_user_score(items : List[schemas.Item], db: Session = Depends(get_db)):

#     for item in items:
#         past_user = CRUD.get_user(db, item.name)
#         if not past_user:
#              user = models.User(name= item.name, score=0)
#              CRUD.create_user(db, user=user)

#     newItems = CRUD.change_user_scores(db,items)      
    
#     return newItems
                
@app.post("/users/changeScore")
async def change_user_score(items : List[schemas.Item], db: Session = Depends(get_db)):
    newItems = []
    for item in items:
        past_user = CRUD.get_user(db, item.name)
        if item.status == "Lose":
                if past_user:
                    newItems.append(CRUD.change_user_score(db, item.name, -1))
                else:    
                    user = models.User(name= item.name, score=0)
                    newItems.append( CRUD.create_user(db, user=user))
                    
        elif item.status == "Win":
                if past_user:
                    newItems.append( CRUD.change_user_score(db, item.name, 1))
                else:
                    user = models.User(name= item.name, score=1)
                    newItems.append( CRUD.create_user(db, user=user))
    for item in newItems:
        item.score += 0 
        pass    
    
    return newItems                