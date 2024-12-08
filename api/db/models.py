from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql.schema import ForeignKey

Base = declarative_base()

class Parent(Base):
    __tablename__ = 'parents'

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String)
    email = Column(String, unique=True)
    password = Column(String)  # Store hashed password

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