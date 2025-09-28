
-- Insert 1000 sample doctors
INSERT INTO doctors (name, qualification, specialization, experience_years, consultation_fee, rating, rating_count, languages, region, bio, is_verified, commission_rate) VALUES
('Dr. Rajesh Kumar', 'BAMS, MD (Ayurveda)', 'Panchakarma Therapy', 15, 600, 4.8, 245, '["English", "Hindi", "Telugu"]', 'Hyderabad', 'Experienced Ayurvedic physician specializing in detoxification and rejuvenation therapies.', TRUE, 0.20),
('Dr. Priya Sharma', 'BAMS, PhD (Ayurveda)', 'Women Health & Fertility', 12, 700, 4.9, 180, '["English", "Hindi", "Tamil"]', 'Chennai', 'Expert in Ayurvedic treatments for womens health, PCOS, and fertility issues.', TRUE, 0.25),
('Dr. Suresh Nair', 'BAMS, MD (Kayachikitsa)', 'Digestive Disorders', 18, 550, 4.7, 320, '["English", "Malayalam", "Hindi"]', 'Kochi', 'Specialist in Ayurvedic treatment of digestive disorders and metabolic conditions.', TRUE, 0.22),
('Dr. Meera Reddy', 'BAMS, MD (Dravyaguna)', 'Herbal Medicine', 10, 500, 4.6, 156, '["English", "Telugu", "Kannada"]', 'Bangalore', 'Expert in medicinal plants and herbal formulations for various health conditions.', TRUE, 0.25),
('Dr. Anand Joshi', 'BAMS, MD (Panchakarma)', 'Stress & Mental Health', 14, 650, 4.8, 210, '["English", "Hindi", "Marathi"]', 'Mumbai', 'Specializes in Ayurvedic approaches to stress management and mental wellness.', TRUE, 0.23),
('Dr. Lakshmi Iyer', 'BAMS, MD (Ayurveda)', 'Skin & Hair Care', 8, 480, 4.5, 89, '["English", "Tamil", "Malayalam"]', 'Coimbatore', 'Young dynamic doctor focusing on natural beauty and dermatological treatments.', TRUE, 0.25),
('Dr. Vikram Singh', 'BAMS, MD (Shalya Tantra)', 'Joint & Bone Health', 20, 750, 4.9, 340, '["English", "Hindi", "Punjabi"]', 'Delhi', 'Senior consultant with expertise in Ayurvedic orthopedics and joint care.', TRUE, 0.18),
('Dr. Kavitha Menon', 'BAMS, MD (Kaumarabhritya)', 'Child Health', 11, 520, 4.7, 145, '["English", "Malayalam", "Tamil"]', 'Trivandrum', 'Pediatric Ayurveda specialist focusing on child development and immunity.', TRUE, 0.24);

-- Add more doctors with varying specializations, regions, and languages
INSERT INTO doctors (name, qualification, specialization, experience_years, consultation_fee, rating, rating_count, languages, region, bio, is_verified, commission_rate) 
SELECT 
  'Dr. ' || 
  CASE (ABS(RANDOM()) % 10)
    WHEN 0 THEN 'Arun'
    WHEN 1 THEN 'Sunita'
    WHEN 2 THEN 'Ravi'
    WHEN 3 THEN 'Deepika'
    WHEN 4 THEN 'Manoj'
    WHEN 5 THEN 'Pooja'
    WHEN 6 THEN 'Kiran'
    WHEN 7 THEN 'Shweta'
    WHEN 8 THEN 'Amit'
    ELSE 'Neha'
  END || ' ' ||
  CASE (ABS(RANDOM()) % 8)
    WHEN 0 THEN 'Patel'
    WHEN 1 THEN 'Shah'
    WHEN 2 THEN 'Gupta'
    WHEN 3 THEN 'Agarwal'
    WHEN 4 THEN 'Verma'
    WHEN 5 THEN 'Rao'
    WHEN 6 THEN 'Jain'
    ELSE 'Mishra'
  END as name,
  
  CASE (ABS(RANDOM()) % 4)
    WHEN 0 THEN 'BAMS, MD (Ayurveda)'
    WHEN 1 THEN 'BAMS, MD (Panchakarma)'
    WHEN 2 THEN 'BAMS, PhD (Ayurveda)'
    ELSE 'BAMS, MD (Kayachikitsa)'
  END as qualification,
  
  CASE (ABS(RANDOM()) % 10)
    WHEN 0 THEN 'General Ayurveda'
    WHEN 1 THEN 'Panchakarma Therapy'
    WHEN 2 THEN 'Digestive Health'
    WHEN 3 THEN 'Women Health'
    WHEN 4 THEN 'Skin & Hair'
    WHEN 5 THEN 'Joint Care'
    WHEN 6 THEN 'Mental Wellness'
    WHEN 7 THEN 'Child Health'
    WHEN 8 THEN 'Respiratory Health'
    ELSE 'Weight Management'
  END as specialization,
  
  5 + (ABS(RANDOM()) % 20) as experience_years,
  400 + (ABS(RANDOM()) % 400) as consultation_fee,
  3.5 + (ABS(RANDOM()) % 150) / 100.0 as rating,
  10 + (ABS(RANDOM()) % 300) as rating_count,
  
  CASE (ABS(RANDOM()) % 6)
    WHEN 0 THEN '["English", "Hindi", "Telugu"]'
    WHEN 1 THEN '["English", "Tamil", "Malayalam"]'
    WHEN 2 THEN '["English", "Hindi", "Kannada"]'
    WHEN 3 THEN '["English", "Telugu", "Tamil"]'
    WHEN 4 THEN '["English", "Hindi", "Marathi"]'
    ELSE '["English", "Malayalam", "Hindi"]'
  END as languages,
  
  CASE (ABS(RANDOM()) % 12)
    WHEN 0 THEN 'Mumbai'
    WHEN 1 THEN 'Delhi'
    WHEN 2 THEN 'Bangalore'
    WHEN 3 THEN 'Chennai'
    WHEN 4 THEN 'Hyderabad'
    WHEN 5 THEN 'Kochi'
    WHEN 6 THEN 'Pune'
    WHEN 7 THEN 'Ahmedabad'
    WHEN 8 THEN 'Jaipur'
    WHEN 9 THEN 'Coimbatore'
    WHEN 10 THEN 'Trivandrum'
    ELSE 'Mysore'
  END as region,
  
  'Experienced Ayurvedic physician with focus on holistic wellness and natural healing approaches.' as bio,
  
  CASE WHEN (ABS(RANDOM()) % 100) < 85 THEN TRUE ELSE FALSE END as is_verified,
  
  0.20 + (ABS(RANDOM()) % 10) / 100.0 as commission_rate

FROM (
  WITH RECURSIVE counter(x) AS (
    SELECT 1
    UNION ALL
    SELECT x + 1 FROM counter WHERE x < 992
  )
  SELECT x FROM counter
);
