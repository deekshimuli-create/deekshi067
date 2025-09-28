
-- Insert sample food items with Ayurvedic properties
INSERT INTO food_items (name, name_local, category, vata_effect, pitta_effect, kapha_effect, thermal_effect, weight_effect, taste, season, region, is_local, nutritional_data, qr_code) VALUES
('Rice', 'అన్నం', 'Grains', 'Balancing', 'Neutral', 'Increasing', 'cooling', 'heavy', 'sweet', 'All seasons', 'All regions', TRUE, '{"calories": 130, "carbs": 28, "protein": 2.7, "fiber": 0.4}', 'QR001'),
('Turmeric', 'పసుపు', 'Spices', 'Balancing', 'Heating', 'Reducing', 'heating', 'light', 'bitter, pungent', 'All seasons', 'All regions', TRUE, '{"calories": 29, "curcumin": "high", "antioxidants": "very high"}', 'QR002'),
('Coconut', 'కొబ్బరి', 'Fruits', 'Nourishing', 'Cooling', 'Increasing', 'cooling', 'heavy', 'sweet', 'Summer', 'South India', TRUE, '{"calories": 354, "fat": 33, "fiber": 9, "potassium": "high"}', 'QR003'),
('Ginger', 'అల్లం', 'Spices', 'Balancing', 'Heating', 'Reducing', 'heating', 'light', 'pungent, sweet', 'Winter, Monsoon', 'All regions', TRUE, '{"calories": 80, "gingerol": "high", "digestive": "excellent"}', 'QR004'),
('Spinach', 'పాలకూర', 'Vegetables', 'Balancing', 'Cooling', 'Neutral', 'cooling', 'light', 'bitter, astringent', 'Winter, Spring', 'All regions', TRUE, '{"calories": 23, "iron": "high", "folate": "very high", "vitamin_k": "excellent"}', 'QR005'),
('Mung Dal', 'పెసలు', 'Legumes', 'Balancing', 'Cooling', 'Reducing', 'cooling', 'light', 'sweet, astringent', 'All seasons', 'All regions', TRUE, '{"calories": 347, "protein": 24, "fiber": 16, "digestibility": "excellent"}', 'QR006'),
('Ghee', 'నెయ్యి', 'Dairy', 'Nourishing', 'Cooling', 'Increasing', 'cooling', 'heavy', 'sweet', 'All seasons', 'All regions', TRUE, '{"calories": 902, "saturated_fat": 62, "vitamin_a": "high", "butyric_acid": "present"}', 'QR007'),
('Cumin', 'జీలకర్ర', 'Spices', 'Balancing', 'Heating', 'Reducing', 'heating', 'light', 'pungent, bitter', 'All seasons', 'All regions', TRUE, '{"calories": 375, "iron": "very high", "digestive": "excellent"}', 'QR008');

-- Generate more food items
INSERT INTO food_items (name, name_local, category, vata_effect, pitta_effect, kapha_effect, thermal_effect, weight_effect, taste, season, region, is_local, nutritional_data, qr_code)
SELECT 
  food_name,
  local_name,
  category,
  CASE (ABS(RANDOM()) % 3)
    WHEN 0 THEN 'Balancing'
    WHEN 1 THEN 'Nourishing'
    ELSE 'Reducing'
  END as vata_effect,
  
  CASE (ABS(RANDOM()) % 3)
    WHEN 0 THEN 'Cooling'
    WHEN 1 THEN 'Heating'
    ELSE 'Neutral'
  END as pitta_effect,
  
  CASE (ABS(RANDOM()) % 3)
    WHEN 0 THEN 'Reducing'
    WHEN 1 THEN 'Increasing'
    ELSE 'Neutral'
  END as kapha_effect,
  
  CASE (ABS(RANDOM()) % 3)
    WHEN 0 THEN 'heating'
    WHEN 1 THEN 'cooling'
    ELSE 'neutral'
  END as thermal_effect,
  
  CASE (ABS(RANDOM()) % 3)
    WHEN 0 THEN 'light'
    WHEN 1 THEN 'medium'
    ELSE 'heavy'
  END as weight_effect,
  
  CASE (ABS(RANDOM()) % 6)
    WHEN 0 THEN 'sweet'
    WHEN 1 THEN 'sour'
    WHEN 2 THEN 'salty'
    WHEN 3 THEN 'pungent'
    WHEN 4 THEN 'bitter'
    ELSE 'astringent'
  END as taste,
  
  CASE (ABS(RANDOM()) % 4)
    WHEN 0 THEN 'All seasons'
    WHEN 1 THEN 'Summer'
    WHEN 2 THEN 'Winter'
    ELSE 'Monsoon'
  END as season,
  
  CASE (ABS(RANDOM()) % 5)
    WHEN 0 THEN 'All regions'
    WHEN 1 THEN 'South India'
    WHEN 2 THEN 'North India'
    WHEN 3 THEN 'Coastal regions'
    ELSE 'Mountain regions'
  END as region,
  
  TRUE as is_local,
  '{"calories": ' || (50 + ABS(RANDOM()) % 300) || ', "protein": ' || (1 + ABS(RANDOM()) % 25) || '}' as nutritional_data,
  'QR' || PRINTF('%03d', row_number) as qr_code

FROM (
  WITH food_data(row_number, food_name, local_name, category) AS (
    VALUES 
    (9, 'Quinoa', 'క్వినోవా', 'Grains'),
    (10, 'Sweet Potato', 'చిలకడదుంప', 'Vegetables'),
    (11, 'Cardamom', 'ఏలకులు', 'Spices'),
    (12, 'Almonds', 'బాదం', 'Nuts'),
    (13, 'Tomato', 'టొమాటో', 'Vegetables'),
    (14, 'Carrot', 'కేరట్', 'Vegetables'),
    (15, 'Coriander', 'ధనియాలు', 'Spices'),
    (16, 'Lemon', 'నిమ్మ', 'Fruits'),
    (17, 'Beetroot', 'బీట్రూట్', 'Vegetables'),
    (18, 'Sesame Seeds', 'నువ్వులు', 'Seeds'),
    (19, 'Bottle Gourd', 'సొరకాయ', 'Vegetables'),
    (20, 'Ridge Gourd', 'బీరకాయ', 'Vegetables'),
    (21, 'Okra', 'బెండకాయ', 'Vegetables'),
    (22, 'Eggplant', 'వంకాయ', 'Vegetables'),
    (23, 'Green Beans', 'కాయలు', 'Vegetables'),
    (24, 'Cabbage', 'కోసుమల్లి', 'Vegetables'),
    (25, 'Cauliflower', 'కాలీఫ్లవర్', 'Vegetables'),
    (26, 'Broccoli', 'బ్రోకలీ', 'Vegetables'),
    (27, 'Pumpkin', 'గుమ్మడికాయ', 'Vegetables'),
    (28, 'Cucumber', 'దోసకాయ', 'Vegetables')
  )
  SELECT * FROM food_data
  
  UNION ALL
  
  SELECT 
    28 + row_number() OVER(),
    CASE (row_number() OVER() % 25)
      WHEN 0 THEN 'Black Pepper'
      WHEN 1 THEN 'Cinnamon'
      WHEN 2 THEN 'Cloves'
      WHEN 3 THEN 'Fenugreek'
      WHEN 4 THEN 'Mustard Seeds'
      WHEN 5 THEN 'Fennel'
      WHEN 6 THEN 'Garlic'
      WHEN 7 THEN 'Onion'
      WHEN 8 THEN 'Drumstick'
      WHEN 9 THEN 'Bitter Gourd'
      WHEN 10 THEN 'Ash Gourd'
      WHEN 11 THEN 'Snake Gourd'
      WHEN 12 THEN 'Ivy Gourd'
      WHEN 13 THEN 'Plantain'
      WHEN 14 THEN 'Raw Banana'
      WHEN 15 THEN 'Jackfruit'
      WHEN 16 THEN 'Papaya'
      WHEN 17 THEN 'Mango'
      WHEN 18 THEN 'Guava'
      WHEN 19 THEN 'Pomegranate'
      WHEN 20 THEN 'Grapes'
      WHEN 21 THEN 'Dates'
      WHEN 22 THEN 'Raisins'
      WHEN 23 THEN 'Cashews'
      ELSE 'Pistachios'
    END,
    CASE (row_number() OVER() % 25)
      WHEN 0 THEN 'కల్లి మిర్చి'
      WHEN 1 THEN 'దాల్చిన చెక్క'
      WHEN 2 THEN 'లవంగం'
      WHEN 3 THEN 'మెంతులు'
      WHEN 4 THEN 'ఆవాలు'
      WHEN 5 THEN 'సోంపు'
      WHEN 6 THEN 'వెల్లుల్లి'
      WHEN 7 THEN 'ఉల్లిపాయ'
      WHEN 8 THEN 'మునగకాయ'
      WHEN 9 THEN 'కాకరకాయ'
      WHEN 10 THEN 'బూడిదగుమ్మడి'
      WHEN 11 THEN 'పొట్లకాయ'
      WHEN 12 THEN 'దొండకాయ'
      WHEN 13 THEN 'అరటి'
      WHEN 14 THEN 'అరటిపండు'
      WHEN 15 THEN 'పనసకాయ'
      WHEN 16 THEN 'బొప్పాయి'
      WHEN 17 THEN 'మామిడికాయ'
      WHEN 18 THEN 'జామకాయ'
      WHEN 19 THEN 'దానిమ్మ'
      WHEN 20 THEN 'ద్రాక్ష'
      WHEN 21 THEN 'ఖర్జూరం'
      WHEN 22 THEN 'కిష్మిష్'
      WHEN 23 THEN 'జీడిపప్పు'
      ELSE 'పిస్తా'
    END,
    CASE (row_number() OVER() % 8)
      WHEN 0 THEN 'Spices'
      WHEN 1 THEN 'Spices'
      WHEN 2 THEN 'Spices'
      WHEN 3 THEN 'Vegetables'
      WHEN 4 THEN 'Vegetables'
      WHEN 5 THEN 'Fruits'
      WHEN 6 THEN 'Nuts'
      ELSE 'Seeds'
    END
  FROM (
    WITH RECURSIVE food_counter(x) AS (
      SELECT 1
      UNION ALL
      SELECT x + 1 FROM food_counter WHERE x < 200
    )
    SELECT x FROM food_counter
  )
);
