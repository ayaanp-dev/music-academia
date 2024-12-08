from pydantic import BaseModel, EmailStr
from typing import List

class StudentBase(BaseModel):
    full_name: str
    email: EmailStr
    grade_level: int
    instrument: str
    group: str
    available_days: List[str]
    available_times: List[str]
    parent_id: int

class StudentCreate(StudentBase):
    pass

class Student(StudentBase):
    id: int

    class Config:
        orm_mode = True

class ParentBase(BaseModel):
    full_name: str
    email: EmailStr

class ParentCreate(ParentBase):
    password: str  # Password added for sign-up

class Parent(ParentBase):
    id: int

    class Config:
        orm_mode = True