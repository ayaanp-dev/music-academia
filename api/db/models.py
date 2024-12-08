# FastAPI database models

from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql.schema import ForeignKey
from sqlalchemy.sql.sqltypes import Boolean

Base = declarative_base()

# Only parents/legal guardians can sign up for their students. Must have the ability to change sign ups. The sign up must include Parent's full name, their email address, Student's full name, Student's email address, grade level, instrument/vocal and which group they belong to (Band, Choir, Orchestra), their available days and times (at least 2 days and 2 different times must be provided by the students signing up) they are available.
class Parent(Base):
    __tablename__ = 'parents'

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String)
    email = Column(String)
    students = Column(String)

class Student(Base):
    __tablename__ = 'students'

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String)
    email = Column(String)
    grade_level = Column(Integer)
    instrument = Column(String)
    group = Column(String)
    available_days = Column(String)
    available_times = Column(String)
    parent_id = Column(Integer, ForeignKey('parents.id'))