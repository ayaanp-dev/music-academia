from sqlalchemy import Column, Integer, String, Enum, ForeignKey, DateTime, JSON
from sqlalchemy.orm import relationship
from datetime import datetime
import enum
from .database import Base

# Enum definitions
class UserType(enum.Enum):
    TEACHER = "teacher"
    TUTOR = "tutor"
    TUTEE = "tutee"
    ADMIN = "admin"

class SessionStatus(enum.Enum):
    SCHEDULED = "scheduled"
    COMPLETED = "completed"
    CANCELLED = "cancelled"

# Models
class User(Base):
    __tablename__ = "users"
    user_id = Column(Integer, primary_key=True, index=True)
    user_type = Column(Enum(UserType), nullable=False)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    password_hash = Column(String, nullable=False)
    status = Column(String, default="active")
    created_at = Column(DateTime, default=datetime.utcnow)
    school_name = Column(String, nullable=True)

class Tutor(Base):
    __tablename__ = "tutors"
    tutor_id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.user_id"), unique=True)
    availability_calendar = Column(JSON, default={})
    user = relationship("User")

class Tutee(Base):
    __tablename__ = "tutees"
    tutee_id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.user_id"), unique=True)
    assigned_tutor_id = Column(Integer, ForeignKey("tutors.tutor_id"))
    user = relationship("User")

class Teacher(Base):
    __tablename__ = "teachers"
    teacher_id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.user_id"), unique=True)
    students_registered = Column(JSON, default={})
    user = relationship("User")

class Session(Base):
    __tablename__ = "sessions"
    session_id = Column(Integer, primary_key=True)
    tutor_id = Column(Integer, ForeignKey("tutors.tutor_id"))
    tutee_id = Column(Integer, ForeignKey("tutees.tutee_id"))
    date = Column(DateTime, nullable=False)
    time = Column(String, nullable=False)
    mode = Column(String, nullable=False)
    status = Column(Enum(SessionStatus), default=SessionStatus.SCHEDULED)
    feedback_id = Column(Integer, ForeignKey("feedback.feedback_id"), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

class Feedback(Base):
    __tablename__ = "feedback"
    feedback_id = Column(Integer, primary_key=True)
    session_id = Column(Integer, ForeignKey("sessions.session_id"))
    from_user_id = Column(Integer, ForeignKey("users.user_id"))
    to_user_id = Column(Integer, ForeignKey("users.user_id"))
    feedback_text = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

class AuditLog(Base):
    __tablename__ = "audit_logs"
    log_id = Column(Integer, primary_key=True)
    action = Column(String, nullable=False)
    timestamp = Column(DateTime, default=datetime.utcnow)