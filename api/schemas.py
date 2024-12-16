from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str
    user_type: str
    school_name: Optional[str] = None

class UserUpdate(BaseModel):
    name: Optional[str] = None
    email: Optional[EmailStr] = None
    password: Optional[str] = None
    user_type: Optional[str] = None
    school_name: Optional[str] = None
    status: Optional[str] = None

class SessionCreate(BaseModel):
    tutor_id: int
    tutee_id: int
    date: datetime
    time: str
    mode: str

class SessionUpdate(BaseModel):
    date: Optional[datetime] = None
    time: Optional[str] = None
    mode: Optional[str] = None
    status: Optional[str] = None

class FeedbackCreate(BaseModel):
    session_id: int
    from_user_id: int
    to_user_id: int
    feedback_text: str

class AuditLogCreate(BaseModel):
    action: str