
-- Add ingredients and preparation instructions to food_items
ALTER TABLE food_items ADD COLUMN ingredients TEXT; -- JSON array of ingredients
ALTER TABLE food_items ADD COLUMN preparation_instructions TEXT; -- Step by step instructions
ALTER TABLE food_items ADD COLUMN usage_tips TEXT; -- How to use the food item
ALTER TABLE food_items ADD COLUMN health_benefits TEXT; -- Health benefits description
ALTER TABLE food_items ADD COLUMN precautions TEXT; -- Any precautions or contraindications

-- Update existing recipes table to ensure consistency
ALTER TABLE recipes ADD COLUMN preparation_tips TEXT; -- Additional preparation tips
ALTER TABLE recipes ADD COLUMN health_benefits TEXT; -- Health benefits of the recipe
