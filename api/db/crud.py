from sqlalchemy.orm import Session
from . import models, schemas

def create_parent(db: Session, parent: schemas.ParentCreate):
    db.add(parent)
    db.commit()
    db.refresh(parent)
    return parent

def get_parent(db: Session, parent_id: int):
    return db.query(models.Parent).filter(models.Parent.id == parent_id).first()

def get_parents(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Parent).offset(skip).limit(limit).all()

def create_student(db: Session, student: schemas.StudentCreate):
    db.add(student)
    db.commit()
    db.refresh(student)
    return student

def get_student(db: Session, student_id: int):
    return db.query(models.Student).filter(models.Student.id == student_id).first()

def get_students(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Student).offset(skip).limit(limit).all()

def get_students_by_parent_id(db: Session, parent_id: int):
    return db.query(models.Student).filter(models.Student.parent_id == parent_id).all()