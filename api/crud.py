from sqlalchemy.orm import Session
from . import models, schemas

def log_action(db: Session, action: str):
    log = models.AuditLog(action=action)
    db.add(log)
    db.commit()

def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(
        name=user.name,
        email=user.email,
        password_hash=user.password,  # Hash password in production
        user_type=user.user_type,
        school_name=user.school_name
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    log_action(db, action=f"User {db_user.user_id} created")
    return db_user

def update_user(db: Session, user_id: int, user: schemas.UserUpdate):
    db_user = db.query(models.User).filter(models.User.user_id == user_id).first()
    if not db_user:
        return None
    for key, value in user.dict(exclude_unset=True).items():
        setattr(db_user, key, value)
    db.commit()
    db.refresh(db_user)
    log_action(db, action=f"User {db_user.user_id} updated")
    return db_user

def delete_user(db: Session, user_id: int):
    db_user = db.query(models.User).filter(models.User.user_id == user_id).first()
    if not db_user:
        return None
    db.delete(db_user)
    db.commit()
    log_action(db, action=f"User {user_id} deleted")
    return db_user

def create_session(db: Session, session: schemas.SessionCreate):
    db_session = models.Session(
        tutor_id=session.tutor_id,
        tutee_id=session.tutee_id,
        date=session.date,
        time=session.time,
        mode=session.mode
    )
    db.add(db_session)
    db.commit()
    db.refresh(db_session)
    log_action(db, action=f"Session {db_session.session_id} created")
    return db_session

def update_session(db: Session, session_id: int, session: schemas.SessionUpdate):
    db_session = db.query(models.Session).filter(models.Session.session_id == session_id).first()
    if not db_session:
        return None
    for key, value in session.dict(exclude_unset=True).items():
        setattr(db_session, key, value)
    db.commit()
    db.refresh(db_session)
    log_action(db, action=f"Session {db_session.session_id} updated")
    return db_session

def delete_session(db: Session, session_id: int):
    db_session = db.query(models.Session).filter(models.Session.session_id == session_id).first()
    if not db_session:
        return None
    db.delete(db_session)
    db.commit()
    log_action(db, action=f"Session {session_id} deleted")
    return db_session

def create_feedback(db: Session, feedback: schemas.FeedbackCreate):
    db_feedback = models.Feedback(
        session_id=feedback.session_id,
        from_user_id=feedback.from_user_id,
        to_user_id=feedback.to_user_id,
        feedback_text=feedback.feedback_text
    )
    db.add(db_feedback)
    db.commit()
    db.refresh(db_feedback)
    log_action(db, action=f"Feedback {db_feedback.feedback_id} created")
    return db_feedback

def delete_feedback(db: Session, feedback_id: int):
    db_feedback = db.query(models.Feedback).filter(models.Feedback.feedback_id == feedback_id).first()
    if not db_feedback:
        return None
    db.delete(db_feedback)
    db.commit()
    log_action(db, action=f"Feedback {feedback_id} deleted")
    return db_feedback