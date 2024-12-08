from sqlalchemy.orm import Session
from . import models, schemas
from passlib.context import CryptContext

# Initialize password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

def create_parent(db: Session, parent: schemas.ParentCreate):
    hashed_password = get_password_hash(parent.password)
    db_parent = models.Parent(
        full_name=parent.full_name,
        email=parent.email,
        password=hashed_password
    )
    db.add(db_parent)
    db.commit()
    db.refresh(db_parent)
    return db_parent

def get_parent(db: Session, parent_id: int):
    return db.query(models.Parent).filter(models.Parent.id == parent_id).first()

def authenticate_parent(db: Session, email: str, password: str):
    parent = db.query(models.Parent).filter(models.Parent.email == email).first()
    if parent and verify_password(password, parent.password):
        return parent
    return None