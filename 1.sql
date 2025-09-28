
-- Users table for app users
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT,
  name TEXT,
  age INTEGER,
  weight REAL,
  height REAL,
  primary_dosha TEXT, -- vata, pitta, kapha
  secondary_dosha TEXT,
  region TEXT,
  language TEXT, -- telugu, tamil, english, hindi, malayalam, kannada
  subscription_type TEXT, -- free, premium, doctor_consultation
  subscription_expires_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Dosha assessments and tracking
CREATE TABLE dosha_assessments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  vata_score REAL,
  pitta_score REAL,
  kapha_score REAL,
  energy_level INTEGER, -- 1-10 scale
  digestion_quality INTEGER, -- 1-10 scale
  sleep_quality INTEGER, -- 1-10 scale
  stress_level INTEGER, -- 1-10 scale
  assessment_date DATE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Food items with ayurvedic properties
CREATE TABLE food_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  name_local TEXT, -- localized name
  category TEXT, -- vegetables, fruits, grains, etc
  vata_effect TEXT, -- increase, decrease, neutral
  pitta_effect TEXT,
  kapha_effect TEXT,
  thermal_effect TEXT, -- heating, cooling, neutral
  weight_effect TEXT, -- heavy, light, neutral
  taste TEXT, -- sweet, sour, salty, bitter, pungent, astringent
  season TEXT, -- spring, summer, autumn, winter, all
  region TEXT,
  is_local BOOLEAN,
  nutritional_data TEXT, -- JSON string
  qr_code TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Recipes with ayurvedic analysis
CREATE TABLE recipes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  description TEXT,
  ingredients TEXT, -- JSON array
  instructions TEXT,
  prep_time INTEGER, -- minutes
  cook_time INTEGER, -- minutes
  servings INTEGER,
  dosha_effects TEXT, -- JSON object with vata, pitta, kapha effects
  thermal_effect TEXT,
  weight_effect TEXT,
  recommended_doshas TEXT, -- JSON array
  seasonal_suitability TEXT, -- JSON array
  difficulty_level TEXT, -- easy, medium, hard
  calories_per_serving INTEGER,
  image_url TEXT,
  rating REAL,
  rating_count INTEGER,
  created_by TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Meal plans
CREATE TABLE meal_plans (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  title TEXT,
  week_start_date DATE,
  plan_data TEXT, -- JSON object with daily meals
  dosha_focus TEXT,
  calories_target INTEGER,
  is_active BOOLEAN,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Progress tracking
CREATE TABLE progress_entries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  entry_date DATE,
  weight REAL,
  energy_level INTEGER,
  digestion_score INTEGER,
  sleep_quality INTEGER,
  mood_score INTEGER,
  symptoms TEXT, -- JSON array
  notes TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Community features
CREATE TABLE community_groups (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  description TEXT,
  dosha_focus TEXT,
  member_count INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_groups (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  group_id INTEGER,
  points INTEGER DEFAULT 0,
  badges TEXT, -- JSON array
  joined_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Notifications
CREATE TABLE notifications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  type TEXT, -- meal, yoga, sleep, general
  title TEXT,
  message TEXT,
  scheduled_time DATETIME,
  is_sent BOOLEAN DEFAULT FALSE,
  is_read BOOLEAN DEFAULT FALSE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Ratings and reviews
CREATE TABLE reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  recipe_id INTEGER,
  consultation_id INTEGER,
  rating INTEGER, -- 1-5
  review_text TEXT,
  is_verified BOOLEAN DEFAULT FALSE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
