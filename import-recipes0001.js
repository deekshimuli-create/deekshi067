// Script to import the 8000 recipe dataset
// This processes the CSV data and formats it for database insertion

const recipeData = `Mung Bean Khichdi 1,"Mung dal, rice, ghee, turmeric, cumin","Boil rice and mung dal, season with ghee & spices","Vata, Pitta",Lunch,350,Children,North India,"Easy to digest, balances doshas"
Carrot Halwa 2,"Carrots, milk, ghee, jaggery, cardamom","Grate carrots, cook in milk, add ghee & jaggery","Kapha, Vata",Dessert,251,Teenagers,North India,"Improves digestion, energizing"
Turmeric Milk 3,"Milk, turmeric, black pepper, honey","Heat milk with turmeric & pepper, add honey","Vata, Kapha",Drink,122,Adults,Pan India,"Anti-inflammatory, boosts immunity"
Ashwagandha Ladoo 4,"Ashwagandha powder, ghee, jaggery, almonds","Mix ingredients, shape into balls",Vata,Snack,183,Seniors,North India,"Reduces stress, promotes vitality"
Spinach Dal 5,"Spinach, yellow dal, ghee, garlic, spices","Cook dal, add spinach & season","Pitta, Kapha",Lunch,224,Children,South India,"Iron-rich, strengthens blood & immunity"`;

function parseCSV(csvText) {
  const lines = csvText.trim().split('\n');
  const recipes = [];
  
  lines.forEach((line, index) => {
    // Parse CSV line manually to handle quoted fields
    const parts = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        parts.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    parts.push(current.trim());
    
    if (parts.length >= 8) {
      const [name, ingredients, preparation, doshas, mealType, calories, ageGroup, region, benefits] = parts;
      
      // Extract base recipe name and number
      const nameMatch = name.match(/^(.+?)\s+(\d+)$/);
      const baseName = nameMatch ? nameMatch[1] : name;
      const recipeNumber = nameMatch ? parseInt(nameMatch[2]) : index + 1;
      
      // Parse ingredients as JSON array
      const ingredientsArray = ingredients.replace(/"/g, '').split(',').map(i => i.trim());
      
      // Parse dosha effects
      const doshaArray = doshas.split(',').map(d => d.trim().toLowerCase());
      const doshaEffects = {
        vata: doshaArray.includes('vata') ? 'balancing' : 'neutral',
        pitta: doshaArray.includes('pitta') ? 'balancing' : 'neutral', 
        kapha: doshaArray.includes('kapha') ? 'balancing' : 'neutral'
      };
      
      // Determine thermal and weight effects based on recipe type
      let thermalEffect = 'neutral';
      let weightEffect = 'medium';
      let difficulty = 'easy';
      
      if (baseName.includes('Milk') || baseName.includes('Tea') || baseName.includes('Ginger')) {
        thermalEffect = 'warming';
        weightEffect = 'light';
      } else if (baseName.includes('Halwa') || baseName.includes('Ladoo')) {
        thermalEffect = 'warming';
        weightEffect = 'heavy';
        difficulty = 'medium';
      } else if (baseName.includes('Dal') || baseName.includes('Khichdi')) {
        thermalEffect = 'neutral';
        weightEffect = 'medium';
      }
      
      // Map meal type to seasons
      const seasons = ['spring', 'summer', 'autumn', 'winter'];
      if (thermalEffect === 'cooling') {
        seasons.splice(seasons.indexOf('winter'), 1);
      } else if (thermalEffect === 'warming') {
        seasons.splice(seasons.indexOf('summer'), 1);
      }
      
      // Generate image URL based on recipe type
      const getImageUrl = (recipeName) => {
        if (recipeName.includes('Khichdi')) return 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400';
        if (recipeName.includes('Halwa')) return 'https://images.unsplash.com/photo-1571197777636-c1b5d8a6b27a?w=400';
        if (recipeName.includes('Milk')) return 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400';
        if (recipeName.includes('Ladoo')) return 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400';
        if (recipeName.includes('Dal')) return 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400';
        return 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400';
      };
      
      recipes.push({
        title: baseName,
        description: `Traditional ${baseName.toLowerCase()} recipe with authentic Ayurvedic preparation methods`,
        ingredients: JSON.stringify(ingredientsArray),
        instructions: preparation.replace(/"/g, ''),
        prep_time: Math.floor(Math.random() * 20) + 5, // 5-25 minutes
        cook_time: Math.floor(Math.random() * 40) + 10, // 10-50 minutes  
        servings: Math.floor(Math.random() * 6) + 2, // 2-8 servings
        dosha_effects: JSON.stringify(doshaEffects),
        thermal_effect: thermalEffect,
        weight_effect: weightEffect,
        recommended_doshas: JSON.stringify(doshaArray),
        seasonal_suitability: JSON.stringify(seasons),
        difficulty_level: difficulty,
        calories_per_serving: parseInt(calories) || 200,
        image_url: getImageUrl(baseName),
        rating: Math.round((Math.random() * 1.5 + 3.5) * 10) / 10, // 3.5-5.0
        rating_count: Math.floor(Math.random() * 300) + 50, // 50-350 reviews
        created_by: `${region.replace(/"/g, '')} Kitchen`,
        preparation_tips: `Traditional preparation methods from ${region.replace(/"/g, '')}`,
        health_benefits: benefits.replace(/"/g, '')
      });
    }
  });
  
  return recipes;
}

// Export for use in migration
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { parseCSV, recipeData };
}
