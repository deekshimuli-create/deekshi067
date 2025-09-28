
CREATE TABLE disease_assessments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  age INTEGER,
  days_suffering INTEGER,
  disease_name TEXT,
  symptoms TEXT,
  severity_level INTEGER,
  primary_dosha_affected TEXT,
  secondary_dosha_affected TEXT,
  recommended_foods TEXT,
  foods_to_avoid TEXT,
  lifestyle_recommendations TEXT,
  herbal_remedies TEXT,
  assessment_result TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_disease_assessments_user_id ON disease_assessments(user_id);
