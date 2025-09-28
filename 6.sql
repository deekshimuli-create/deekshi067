
-- Insert sample user data for testing
INSERT INTO users (email, name, age, weight, height, primary_dosha, secondary_dosha, region, language, subscription_type) VALUES
('user1@example.com', 'Priya Sharma', 28, 60.5, 165, 'Pitta', 'Vata', 'Chennai', 'Tamil', 'free'),
('user2@example.com', 'Rahul Kumar', 35, 75.0, 175, 'Vata', 'Kapha', 'Mumbai', 'Hindi', 'premium'),
('user3@example.com', 'Lakshmi Nair', 42, 68.2, 160, 'Kapha', 'Pitta', 'Kochi', 'Malayalam', 'free');

-- Insert sample dosha assessments
INSERT INTO dosha_assessments (user_id, vata_score, pitta_score, kapha_score, energy_level, digestion_quality, sleep_quality, stress_level, assessment_date) VALUES
(1, 35.0, 40.0, 25.0, 7, 8, 6, 4, '2024-09-20'),
(2, 45.0, 30.0, 25.0, 6, 7, 5, 5, '2024-09-21'),
(3, 20.0, 35.0, 45.0, 8, 9, 8, 3, '2024-09-22');

-- Insert sample progress entries
INSERT INTO progress_entries (user_id, entry_date, weight, energy_level, digestion_score, sleep_quality, mood_score, symptoms, notes) VALUES
(1, '2024-09-15', 60.5, 7, 8, 6, 7, 'None', 'Feeling good overall'),
(1, '2024-09-16', 60.3, 8, 7, 7, 8, 'Slight headache', 'Better sleep last night'),
(1, '2024-09-17', 60.4, 6, 9, 8, 7, 'None', 'Excellent digestion'),
(1, '2024-09-18', 60.2, 9, 8, 7, 9, 'None', 'High energy day'),
(1, '2024-09-19', 60.1, 8, 7, 6, 8, 'Mild fatigue', 'Need more rest'),
(1, '2024-09-20', 60.0, 7, 8, 9, 8, 'None', 'Great sleep quality'),
(1, '2024-09-21', 60.2, 8, 9, 8, 9, 'None', 'Perfect balance day');

-- Insert sample community groups
INSERT INTO community_groups (name, description, dosha_focus, member_count) VALUES
('Pitta Balance Warriors', 'Community for Pitta dominant individuals focusing on cooling foods and stress management', 'Pitta', 245),
('Vata Grounding Circle', 'Support group for Vata types working on stability and nourishment', 'Vata', 180),
('Kapha Energy Boosters', 'Active community helping Kapha types increase metabolism and energy', 'Kapha', 156),
('Ayurvedic Mothers', 'Support network for mothers practicing Ayurvedic parenting and family wellness', 'All', 320),
('Weight Loss Ayurveda', 'Community focused on healthy weight management through Ayurvedic principles', 'All', 280);

-- Insert sample notifications
INSERT INTO notifications (user_id, type, title, message, scheduled_time, is_sent) VALUES
(1, 'meal_reminder', 'Time for Lunch', 'Its time for your Pitta-balancing lunch. Remember to include cooling foods!', '2024-09-22 12:00:00', FALSE),
(1, 'yoga_reminder', 'Evening Yoga Session', 'Your scheduled cooling yoga practice starts in 15 minutes', '2024-09-22 18:00:00', FALSE),
(2, 'supplement_reminder', 'Ashwagandha Time', 'Take your Vata-balancing ashwagandha supplement', '2024-09-22 20:00:00', FALSE);

-- Insert sample meal plans
INSERT INTO meal_plans (user_id, title, week_start_date, plan_data, dosha_focus, calories_target, is_active) VALUES
(1, 'Pitta Cooling Week', '2024-09-16', '{"breakfast": "Coconut rice with mint", "lunch": "Cucumber raita with quinoa", "dinner": "Cooling vegetable soup"}', 'Pitta', 1800, TRUE),
(2, 'Vata Grounding Plan', '2024-09-16', '{"breakfast": "Warm oatmeal with dates", "lunch": "Kitchari with ghee", "dinner": "Root vegetable stew"}', 'Vata', 2200, TRUE);
