
-- Add doctors table
CREATE TABLE doctors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  qualification TEXT,
  specialization TEXT,
  experience_years INTEGER,
  consultation_fee INTEGER,
  rating REAL DEFAULT 0.0,
  rating_count INTEGER DEFAULT 0,
  languages TEXT, -- JSON array of supported languages
  region TEXT,
  availability_hours TEXT, -- JSON object for schedule
  bio TEXT,
  profile_image_url TEXT,
  is_verified BOOLEAN DEFAULT FALSE,
  is_available BOOLEAN DEFAULT TRUE,
  commission_rate REAL DEFAULT 0.25, -- 25% default commission
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Add consultations table
CREATE TABLE consultations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  doctor_id INTEGER,
  scheduled_time DATETIME,
  duration_minutes INTEGER DEFAULT 30,
  status TEXT DEFAULT 'scheduled', -- scheduled, completed, cancelled
  consultation_fee INTEGER,
  commission_amount INTEGER,
  notes TEXT,
  prescription TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_doctors_region ON doctors(region);
CREATE INDEX idx_doctors_specialization ON doctors(specialization);
CREATE INDEX idx_doctors_rating ON doctors(rating);
CREATE INDEX idx_consultations_user ON consultations(user_id);
CREATE INDEX idx_consultations_doctor ON consultations(doctor_id);
