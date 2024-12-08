from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from db import models, schemas
from db.db import SessionLocal, engine, get_db
from fastapi.middleware.cors import CORSMiddleware
import db
from typing import List
from db.crud import authenticate_parent

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Update this to match your frontend's origin
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

@app.post("/parents/", response_model=schemas.Parent)
def create_parent(parent: schemas.ParentCreate, database: Session = Depends(get_db)):
    return db.crud.create_parent(db=database, parent=parent)

@app.post("/login/")
def login(email: str, password: str, database: Session = Depends(get_db)):
    parent = authenticate_parent(db=database, email=email, password=password)
    if not parent:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"message": "Login successful", "parent_id": parent.id}

@app.get("/parents/{parent_id}", response_model=schemas.Parent)
def read_parent(parent_id: int, database: Session = Depends(get_db)):
    return db.crud.get_parent(db=database, parent_id=parent_id)

@app.delete("/students/{student_id}", response_model=schemas.Student)
def delete_student(student_id: int, database: Session = Depends(get_db)):
    student = db.crud.delete_student(database, student_id=student_id)
    return student

@app.delete("/parents/{parent_id}", response_model=schemas.Parent)
def delete_parent(parent_id: int, database: Session = Depends(get_db)):
    parent = db.crud.delete_parent(database, parent_id=parent_id)
    return parent

@app.put("/students/{student_id}", response_model=schemas.Student)
def update_student(student_id: int, student: schemas.StudentCreate, database: Session = Depends(get_db)):
    return db.crud.update_student(database, student_id=student_id, student=student)

@app.put("/parents/{parent_id}", response_model=schemas.Parent)
def update_parent(parent_id: int, parent: schemas.ParentCreate, database: Session = Depends(get_db)):
    return db.crud.update_parent(database, parent_id=parent_id, parent=parent)