from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from . import models, schemas, crud
from .database import engine, SessionLocal

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/users/")
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    return crud.create_user(db, user)

@app.put("/users/{user_id}")
def update_user(user_id: int, user: schemas.UserUpdate, db: Session = Depends(get_db)):
    updated_user = crud.update_user(db, user_id, user)
    if not updated_user:
        raise HTTPException(status_code=404, detail="User not found")
    return updated_user

@app.delete("/users/{user_id}")
def delete_user(user_id: int, db: Session = Depends(get_db)):
    deleted_user = crud.delete_user(db, user_id)
    if not deleted_user:
        raise HTTPException(status_code=404, detail="User not found")
    return {"detail": "User deleted successfully"}

@app.post("/sessions/")
def create_session(session: schemas.SessionCreate, db: Session = Depends(get_db)):
    return crud.create_session(db, session)

@app.put("/sessions/{session_id}")
def update_session(session_id: int, session: schemas.SessionUpdate, db: Session = Depends(get_db)):
    updated_session = crud.update_session(db, session_id, session)
    if not updated_session:
        raise HTTPException(status_code=404, detail="Session not found")
    return updated_session

@app.delete("/sessions/{session_id}")
def delete_session(session_id: int, db: Session = Depends(get_db)):
    deleted_session = crud.delete_session(db, session_id)
    if not deleted_session:
        raise HTTPException(status_code=404, detail="Session not found")
    return {"detail": "Session deleted successfully"}

@app.post("/feedback/")
def create_feedback(feedback: schemas.FeedbackCreate, db: Session = Depends(get_db)):
    return crud.create_feedback(db, feedback)

@app.delete("/feedback/{feedback_id}")
def delete_feedback(feedback_id: int, db: Session = Depends(get_db)):
    deleted_feedback = crud.delete_feedback(db, feedback_id)
    if not deleted_feedback:
        raise HTTPException(status_code=404, detail="Feedback not found")
    return {"detail": "Feedback deleted successfully"}