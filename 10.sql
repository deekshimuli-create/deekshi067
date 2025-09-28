
-- Add comprehensive recipe data with detailed ingredients and instructions
INSERT INTO recipes (
  title, description, ingredients, instructions, prep_time, cook_time, servings,
  dosha_effects, thermal_effect, weight_effect, recommended_doshas, seasonal_suitability,
  difficulty_level, calories_per_serving, rating, rating_count, created_by,
  preparation_tips, health_benefits
) VALUES 
(
  'Ayurvedic Kitchari', 
  'Complete protein meal perfect for detox and digestive healing',
  '["1 cup basmati rice", "1/2 cup yellow mung dal", "1 tsp turmeric powder", "1 tsp cumin seeds", "1 tsp coriander seeds", "1/2 tsp mustard seeds", "1 inch ginger piece (grated)", "2 cloves garlic (minced)", "1 tsp ghee", "4 cups water", "1 tsp salt", "Fresh cilantro for garnish", "1/2 tsp hing (asafoetida)", "1 bay leaf"]',
  '["Wash rice and dal together until water runs clear", "Heat ghee in a heavy-bottomed pot", "Add cumin, coriander, and mustard seeds until they splutter", "Add hing, bay leaf, ginger, and garlic. Sauté for 1 minute", "Add rice and dal, stir for 2 minutes", "Add turmeric, salt, and water", "Bring to boil, then reduce heat to low", "Cover and simmer for 25-30 minutes until soft", "Stir occasionally, add more water if needed", "Garnish with fresh cilantro before serving"]',
  15, 30, 4,
  '{"vata": "balancing", "pitta": "balancing", "kapha": "balancing"}',
  'neutral', 'light', 'All Doshas', 'All seasons',
  'Easy', 220, 4.9, 3245, 'Dr. Vasant Lad',
  'Use organic ingredients for best results. The consistency should be like a thick porridge. Add vegetables like carrots or spinach for variation.',
  'Kitchari is tri-doshic and supports digestive fire. It provides complete protein and is easily digestible. Perfect for cleansing and rejuvenation.'
),
(
  'Cooling Cucumber Raita',
  'Refreshing yogurt-based side dish perfect for hot weather',
  '["2 large cucumbers (peeled and diced)", "1 cup fresh yogurt", "1/4 cup fresh mint leaves (chopped)", "2 tbsp cilantro (chopped)", "1/2 tsp roasted cumin powder", "1/4 tsp black salt", "1/4 tsp regular salt", "1 tsp lime juice", "Pinch of black pepper", "Mint sprigs for garnish"]',
  '["Peel and dice cucumbers into small pieces", "Place diced cucumber in a bowl and sprinkle with salt", "Let sit for 10 minutes, then squeeze out excess water", "In a mixing bowl, whisk yogurt until smooth", "Add roasted cumin powder, black salt, and lime juice", "Mix in the cucumber, mint, and cilantro", "Chill in refrigerator for 30 minutes", "Garnish with mint sprigs before serving", "Serve immediately after garnishing"]',
  15, 0, 4,
  '{"vata": "slightly increasing", "pitta": "decreasing", "kapha": "slightly increasing"}',
  'cooling', 'light', 'Pitta', 'Summer',
  'Easy', 85, 4.6, 1876, 'Chef Madhur Jaffrey',
  'Use thick, fresh yogurt for best texture. Squeeze cucumber well to prevent watery raita. Can be made 2 hours ahead.',
  'Excellent for cooling pitta dosha. Aids digestion and provides probiotics. Rich in vitamins and helps maintain hydration during hot weather.'
),
(
  'Warming Ginger Tea',
  'Traditional Ayurvedic digestive tea to kindle agni (digestive fire)',
  '["2 inches fresh ginger root", "2 cups water", "1 tsp honey", "1/4 tsp turmeric powder", "Pinch of black pepper", "1/4 tsp cinnamon powder", "3-4 cardamom pods (crushed)", "1 tsp lemon juice"]',
  '["Peel and slice ginger root thinly", "Bring water to boil in a saucepan", "Add ginger slices and reduce heat to simmer", "Add crushed cardamom and cinnamon", "Simmer for 10-15 minutes until aromatic", "Add turmeric and black pepper", "Strain the tea into cups", "Add honey and lemon juice when slightly cooled", "Serve warm immediately"]',
  5, 15, 2,
  '{"vata": "balancing", "pitta": "slightly increasing", "kapha": "decreasing"}',
  'heating', 'light', 'Vata, Kapha', 'Winter, Monsoon',
  'Easy', 25, 4.7, 2156, 'Dr. Deepak Chopra',
  'Never add honey to boiling water as it becomes toxic. Fresh ginger is more potent than dried. Adjust strength to taste.',
  'Stimulates digestive fire, reduces ama (toxins), and supports respiratory health. Natural anti-inflammatory and immunity booster.'
),
(
  'Nourishing Ojas Smoothie',
  'Strength-building smoothie with almonds, dates, and spices',
  '["10 soaked almonds (peeled)", "4 medjool dates (pitted)", "1 cup warm milk", "1/4 tsp cardamom powder", "Pinch of saffron strands", "1 tsp ghee", "1/4 tsp vanilla extract", "1 tsp rose water", "Chopped pistachios for garnish"]',
  '["Soak almonds overnight and peel in the morning", "Soak saffron in 2 tbsp warm milk for 10 minutes", "Remove pits from dates and chop roughly", "Blend almonds, dates, and half the milk until smooth", "Add remaining milk, cardamom, vanilla, and rose water", "Blend again until creamy and frothy", "Heat ghee slightly and add to blender for final mix", "Pour into glasses and garnish with pistachios", "Serve immediately while fresh"]',
  10, 5, 2,
  '{"vata": "balancing", "pitta": "balancing", "kapha": "slightly increasing"}',
  'neutral', 'heavy', 'Vata, Pitta', 'Winter, Spring',
  'Easy', 285, 4.8, 1967, 'Ayurvedic Institute',
  'Use organic ingredients. Soak almonds overnight for better digestion. Can substitute plant milk for dairy if needed.',
  'Builds ojas (vital essence), strengthens nervous system, and provides sustainable energy. Rich in healthy fats and natural sugars.'
),
(
  'Detox Mung Bean Soup',
  'Cleansing soup perfect for Ayurvedic detox programs',
  '["1 cup split yellow mung dal", "4 cups water", "1 tsp turmeric", "1 tsp cumin seeds", "1/2 tsp coriander seeds", "1 inch ginger (minced)", "1 bay leaf", "1 tsp ghee", "1/2 tsp salt", "1/4 tsp black pepper", "Fresh cilantro", "1/4 cup coconut flakes", "Lime wedges for serving"]',
  '["Rinse mung dal until water runs clear", "Heat ghee in a pot over medium heat", "Add cumin and coriander seeds until fragrant", "Add minced ginger and bay leaf, sauté briefly", "Add mung dal and stir for 2 minutes", "Add water, turmeric, salt, and black pepper", "Bring to boil, then reduce heat and simmer", "Cook for 20-25 minutes until dal is soft", "Mash slightly with back of spoon for texture", "Garnish with cilantro and coconut", "Serve with lime wedges"]',
  10, 25, 3,
  '{"vata": "balancing", "pitta": "balancing", "kapha": "balancing"}',
  'neutral', 'light', 'All Doshas', 'All seasons',
  'Easy', 195, 4.5, 1543, 'Panchakarma Center',
  'Dal should be soft but not mushy. Add more water for thinner consistency. Perfect for mono-diet cleansing days.',
  'Excellent for detoxification and digestive rest. Provides plant protein while being easy to digest. Supports liver function and elimination.'
);
