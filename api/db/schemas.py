from pydantic import BaseModel
from typing import List, Optional

class StudentBase(BaseModel):
    full_name: str
    email: str
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
        orm_mode: True

class ParentBase(BaseModel):
    full_name: str
    email: str
    students: List[int]

class ParentCreate(ParentBase):
    pass

class Parent(ParentBase):
    id: int
    students: List[int] = []

    class Config:
        orm_mode: True