from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from db import models, schemas
from db.db import SessionLocal, engine, get_db

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.post("/parents/", response_model=schemas.Parent)
def create_parent(parent: schemas.ParentCreate, db: Session = Depends(get_db)):
    db_parent = models.Parent(**parent.dict())
    db.add(db_parent)
    db.commit()
    db.refresh(db_parent)
    return db_parent

@app.get("/parents/{parent_id}", response_model=schemas.Parent)
def read_parent(parent_id: int, db: Session = Depends(get_db)):
    db_parent = db.query(models.Parent).filter(models.Parent.id == parent_id).first()
    if db_parent is None:
        raise HTTPException(status_code=404, detail="Parent not found")
    return db_parent