
CREATE TABLE face_packs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  ingredients TEXT NOT NULL,
  preparation_method TEXT NOT NULL,
  application_instructions TEXT,
  benefits TEXT,
  skin_type TEXT,
  dosha_suitability TEXT,
  preparation_time INTEGER,
  application_duration INTEGER,
  frequency TEXT,
  precautions TEXT,
  image_url TEXT,
  difficulty_level TEXT DEFAULT 'Easy',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE bams_books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  author TEXT,
  subject TEXT,
  year_of_study INTEGER,
  semester INTEGER,
  description TEXT,
  pdf_url TEXT,
  cover_image_url TEXT,
  page_count INTEGER,
  language TEXT DEFAULT 'English',
  is_free BOOLEAN DEFAULT FALSE,
  price INTEGER DEFAULT 0,
  file_size_mb REAL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_book_access (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  book_id INTEGER NOT NULL,
  access_type TEXT DEFAULT 'free',
  purchased_at DATETIME,
  expires_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE herbal_seeds (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  scientific_name TEXT,
  common_names TEXT,
  plant_type TEXT,
  medicinal_properties TEXT,
  health_benefits TEXT,
  growing_instructions TEXT,
  climate_requirements TEXT,
  soil_type TEXT,
  watering_frequency TEXT,
  sunlight_requirements TEXT,
  harvest_time TEXT,
  usage_parts TEXT,
  preparation_methods TEXT,
  dosage_instructions TEXT,
  precautions TEXT,
  image_url TEXT,
  seed_price INTEGER DEFAULT 0,
  availability TEXT DEFAULT 'Available',
  growing_difficulty TEXT DEFAULT 'Easy',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE yoga_asanas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  sanskrit_name TEXT,
  category TEXT,
  difficulty_level TEXT DEFAULT 'Beginner',
  duration_minutes INTEGER,
  step_instructions TEXT NOT NULL,
  benefits TEXT,
  precautions TEXT,
  contraindications TEXT,
  best_time TEXT,
  dosha_benefits TEXT,
  sequence_order INTEGER,
  prerequisite_asanas TEXT,
  modifications TEXT,
  breathing_pattern TEXT,
  image_url TEXT,
  video_url TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_yoga_progress (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  asana_id INTEGER NOT NULL,
  practice_date DATE,
  duration_practiced INTEGER,
  difficulty_experienced INTEGER,
  notes TEXT,
  completed BOOLEAN DEFAULT FALSE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
