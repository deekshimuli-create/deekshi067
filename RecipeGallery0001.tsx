import { useState, useEffect } from 'react';
import { Search, Clock, Users, ChefHat, Star, Thermometer, Weight, Heart } from 'lucide-react';

interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string;
  instructions: string;
  prep_time: number;
  cook_time: number;
  servings: number;
  dosha_effects: string;
  thermal_effect: string;
  weight_effect: string;
  recommended_doshas: string;
  seasonal_suitability: string;
  difficulty_level: string;
  calories_per_serving: number;
  image_url: string;
  rating: number;
  rating_count: number;
  created_by: string;
  preparation_tips?: string;
  health_benefits?: string;
}

export default function RecipeGallery() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDosha, setSelectedDosha] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [maxCookTime, setMaxCookTime] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: '12',
        ...(selectedDosha && { dosha: selectedDosha }),
        ...(selectedDifficulty && { difficulty: selectedDifficulty }),
        ...(maxCookTime && { cook_time: maxCookTime }),
        ...(searchTerm && { search: searchTerm })
      });

      const response = await fetch(`/api/recipes?${params}`);
      const data = await response.json();
      
      if (data.recipes && data.recipes.length > 0) {
        // Use real data from database
        setRecipes(data.recipes);
      } else {
        // Fallback to mock data if no recipes in database
        const mockRecipes: Recipe[] = [
        {
          id: 1,
          title: "Turmeric Golden Milk",
          description: "A warming, anti-inflammatory drink perfect for balancing all doshas",
          ingredients: JSON.stringify(["1 cup almond milk", "1 tsp turmeric", "1/2 tsp ginger", "pinch of black pepper", "1 tsp honey"]),
          instructions: "Heat milk gently, whisk in spices, add honey to taste",
          prep_time: 5,
          cook_time: 10,
          servings: 1,
          dosha_effects: JSON.stringify({"vata": "balancing", "pitta": "cooling", "kapha": "warming"}),
          thermal_effect: "warming",
          weight_effect: "light",
          recommended_doshas: JSON.stringify(["vata", "kapha"]),
          seasonal_suitability: JSON.stringify(["winter", "autumn"]),
          difficulty_level: "easy",
          calories_per_serving: 120,
          image_url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
          rating: 4.8,
          rating_count: 245,
          created_by: "Dr. Priya Sharma",
          preparation_tips: "Use fresh turmeric root when available for enhanced benefits",
          health_benefits: "Anti-inflammatory, aids digestion, promotes restful sleep"
        },
        {
          id: 2,
          title: "Cooling Cucumber Raita",
          description: "Perfect Pitta-pacifying side dish with cooling properties",
          ingredients: JSON.stringify(["2 cucumbers grated", "1 cup yogurt", "1/2 tsp cumin powder", "fresh mint", "rock salt"]),
          instructions: "Mix all ingredients, chill before serving",
          prep_time: 15,
          cook_time: 0,
          servings: 4,
          dosha_effects: JSON.stringify({"vata": "neutral", "pitta": "cooling", "kapha": "neutral"}),
          thermal_effect: "cooling",
          weight_effect: "light",
          recommended_doshas: JSON.stringify(["pitta"]),
          seasonal_suitability: JSON.stringify(["summer", "spring"]),
          difficulty_level: "easy",
          calories_per_serving: 85,
          image_url: "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=400",
          rating: 4.6,
          rating_count: 128,
          created_by: "Chef Ravi Kumar",
          preparation_tips: "Remove cucumber seeds for better digestion",
          health_benefits: "Cooling, hydrating, aids digestion, reduces Pitta"
        },
        {
          id: 3,
          title: "Warming Ginger-Cardamom Tea",
          description: "Digestive tea that kindles Agni and balances Vata",
          ingredients: JSON.stringify(["1 inch fresh ginger", "4 cardamom pods", "2 cups water", "honey to taste"]),
          instructions: "Boil water with ginger and cardamom for 10 minutes, strain and add honey",
          prep_time: 5,
          cook_time: 10,
          servings: 2,
          dosha_effects: JSON.stringify({"vata": "balancing", "pitta": "neutral", "kapha": "stimulating"}),
          thermal_effect: "heating",
          weight_effect: "light",
          recommended_doshas: JSON.stringify(["vata", "kapha"]),
          seasonal_suitability: JSON.stringify(["winter", "autumn", "spring"]),
          difficulty_level: "easy",
          calories_per_serving: 25,
          image_url: "https://images.unsplash.com/photo-1597318756612-cf222d9fb86b?w=400",
          rating: 4.9,
          rating_count: 312,
          created_by: "Ayurvedic Kitchen",
          preparation_tips: "Crush cardamom pods lightly to release oils",
          health_benefits: "Improves digestion, reduces bloating, warms the body"
        },
        {
          id: 4,
          title: "Kapha-Reducing Spiced Quinoa",
          description: "Light, warming grain dish perfect for reducing Kapha",
          ingredients: JSON.stringify(["1 cup quinoa", "2 cups vegetable broth", "1 tsp cumin", "1/2 tsp turmeric", "mixed vegetables"]),
          instructions: "Sauté spices, add quinoa and broth, simmer until fluffy",
          prep_time: 10,
          cook_time: 20,
          servings: 4,
          dosha_effects: JSON.stringify({"vata": "neutral", "pitta": "neutral", "kapha": "reducing"}),
          thermal_effect: "warming",
          weight_effect: "light",
          recommended_doshas: JSON.stringify(["kapha", "vata"]),
          seasonal_suitability: JSON.stringify(["spring", "winter"]),
          difficulty_level: "medium",
          calories_per_serving: 185,
          image_url: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400",
          rating: 4.4,
          rating_count: 89,
          created_by: "Wellness Kitchen",
          preparation_tips: "Toast quinoa before cooking for better flavor",
          health_benefits: "Light, easily digestible, reduces Kapha, provides complete protein"
        },
        {
          id: 5,
          title: "Tri-Dosha Dal",
          description: "Balanced lentil curry suitable for all constitutional types",
          ingredients: JSON.stringify(["1 cup yellow moong dal", "1 tsp ghee", "cumin seeds", "ginger", "turmeric", "vegetables"]),
          instructions: "Cook dal with spices until soft, add vegetables in final stages",
          prep_time: 15,
          cook_time: 30,
          servings: 6,
          dosha_effects: JSON.stringify({"vata": "nourishing", "pitta": "cooling", "kapha": "light"}),
          thermal_effect: "neutral",
          weight_effect: "medium",
          recommended_doshas: JSON.stringify(["vata", "pitta", "kapha"]),
          seasonal_suitability: JSON.stringify(["all"]),
          difficulty_level: "medium",
          calories_per_serving: 165,
          image_url: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400",
          rating: 4.7,
          rating_count: 203,
          created_by: "Traditional Ayurveda",
          preparation_tips: "Soak dal for better digestibility",
          health_benefits: "High protein, easy to digest, balances all doshas"
        },
        {
          id: 6,
          title: "Cooling Coconut Rice",
          description: "South Indian style coconut rice with cooling properties",
          ingredients: JSON.stringify(["2 cups cooked rice", "1 cup coconut", "curry leaves", "mustard seeds", "green chilies"]),
          instructions: "Grind coconut to paste, mix with rice and temper with spices",
          prep_time: 20,
          cook_time: 15,
          servings: 4,
          dosha_effects: JSON.stringify({"vata": "nourishing", "pitta": "cooling", "kapha": "heavy"}),
          thermal_effect: "cooling",
          weight_effect: "heavy",
          recommended_doshas: JSON.stringify(["pitta", "vata"]),
          seasonal_suitability: JSON.stringify(["summer", "spring"]),
          difficulty_level: "medium",
          calories_per_serving: 245,
          image_url: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400",
          rating: 4.5,
          rating_count: 156,
          created_by: "South Indian Kitchen",
          preparation_tips: "Use fresh coconut for best taste and nutrition",
          health_benefits: "Cooling, nourishing, good source of healthy fats"
        }
      ];

      setRecipes(mockRecipes);
      }
    } catch (error) {
      console.error('Failed to fetch recipes:', error);
      // Use mock data as fallback
      const fallbackRecipes: Recipe[] = [
        {
          id: 1,
          title: "Connection Error",
          description: "Unable to load recipes from database",
          ingredients: '[]',
          instructions: "Please try again later",
          prep_time: 0,
          cook_time: 0,
          servings: 1,
          dosha_effects: '{}',
          thermal_effect: "neutral",
          weight_effect: "light",
          recommended_doshas: '[]',
          seasonal_suitability: '[]',
          difficulty_level: "easy",
          calories_per_serving: 0,
          image_url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
          rating: 0,
          rating_count: 0,
          created_by: "System"
        }
      ];
      setRecipes(fallbackRecipes);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRecipes();
  }, [currentPage, selectedDosha, selectedDifficulty, maxCookTime, searchTerm]);

  const parseJSON = (jsonString: string) => {
    try {
      return JSON.parse(jsonString);
    } catch {
      return [];
    }
  };

  const getThermalIcon = (effect: string) => {
    switch (effect) {
      case 'heating': return '🔥';
      case 'cooling': return '❄️';
      case 'warming': return '🌡️';
      default: return '🌡️';
    }
  };

  const getWeightIcon = (effect: string) => {
    switch (effect) {
      case 'heavy': return '⬇️';
      case 'light': return '⬆️';
      default: return '➡️';
    }
  };

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
          Ayurvedic Recipe Gallery
        </h1>
        <p className="text-xl text-gray-600">
          8,000+ authentic recipes with detailed dosha effects and preparation guides
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <div className="grid md:grid-cols-5 gap-4">
          <div className="relative col-span-2">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <select
            value={selectedDosha}
            onChange={(e) => setSelectedDosha(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">All Doshas</option>
            <option value="vata">Vata Balancing</option>
            <option value="pitta">Pitta Balancing</option>
            <option value="kapha">Kapha Balancing</option>
          </select>

          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">All Levels</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <select
            value={maxCookTime}
            onChange={(e) => setMaxCookTime(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">Any Time</option>
            <option value="15">Under 15 min</option>
            <option value="30">Under 30 min</option>
            <option value="60">Under 1 hour</option>
          </select>
        </div>
      </div>

      {/* Recipe Grid */}
      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-4 border border-gray-200 animate-pulse">
              <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 bg-gray-200 rounded mb-4"></div>
              <div className="flex space-x-2 mb-4">
                <div className="h-6 w-16 bg-gray-200 rounded"></div>
                <div className="h-6 w-16 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group hover:scale-105 cursor-pointer"
              onClick={() => setSelectedRecipe(recipe)}
            >
              <div className="relative">
                <img
                  src={recipe.image_url}
                  alt={recipe.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-sm font-medium">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span>{recipe.rating}</span>
                  </div>
                </div>
                <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(recipe.difficulty_level)}`}>
                  {recipe.difficulty_level}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {recipe.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {recipe.description}
                </p>

                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{recipe.prep_time + recipe.cook_time} min</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{recipe.servings} servings</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>{recipe.calories_per_serving} cal</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Thermometer className="w-4 h-4 text-red-500" />
                      <span className="text-xs">{getThermalIcon(recipe.thermal_effect)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Weight className="w-4 h-4 text-blue-500" />
                      <span className="text-xs">{getWeightIcon(recipe.weight_effect)}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    by {recipe.created_by}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {parseJSON(recipe.recommended_doshas).map((dosha: string, index: number) => (
                    <span
                      key={index}
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        dosha === 'vata' ? 'bg-purple-100 text-purple-800' :
                        dosha === 'pitta' ? 'bg-red-100 text-red-800' :
                        'bg-green-100 text-green-800'
                      }`}
                    >
                      {dosha}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Recipe Detail Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedRecipe.image_url}
                alt={selectedRecipe.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedRecipe(null)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full text-gray-600 hover:text-gray-800"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-medium">{selectedRecipe.rating}</span>
                  <span className="text-gray-600">({selectedRecipe.rating_count} reviews)</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedRecipe.title}
                </h2>
                <p className="text-xl text-gray-600">
                  {selectedRecipe.description}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Created by {selectedRecipe.created_by}
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <Clock className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                  <div className="font-medium">Prep: {selectedRecipe.prep_time}m</div>
                  <div className="font-medium">Cook: {selectedRecipe.cook_time}m</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <Users className="w-6 h-6 text-green-500 mx-auto mb-2" />
                  <div className="font-medium">{selectedRecipe.servings} Servings</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <ChefHat className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                  <div className="font-medium capitalize">{selectedRecipe.difficulty_level}</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <span className="text-2xl mb-2 block">🔥</span>
                  <div className="font-medium">{selectedRecipe.calories_per_serving} cal</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Ingredients</h3>
                  <ul className="space-y-2">
                    {parseJSON(selectedRecipe.ingredients).map((ingredient: string, index: number) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>

                  {selectedRecipe.health_benefits && (
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                        <Heart className="w-5 h-5 text-red-500" />
                        <span>Health Benefits</span>
                      </h4>
                      <p className="text-gray-700 leading-relaxed">{selectedRecipe.health_benefits}</p>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Instructions</h3>
                  <div className="prose text-gray-700 leading-relaxed whitespace-pre-line">
                    {selectedRecipe.instructions}
                  </div>

                  {selectedRecipe.preparation_tips && (
                    <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">💡 Preparation Tips</h4>
                      <p className="text-gray-700">{selectedRecipe.preparation_tips}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Ayurvedic Properties</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Thermal Effect:</span>
                      <span className="flex items-center space-x-1">
                        <span>{getThermalIcon(selectedRecipe.thermal_effect)}</span>
                        <span className="capitalize">{selectedRecipe.thermal_effect}</span>
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Weight Effect:</span>
                      <span className="flex items-center space-x-1">
                        <span>{getWeightIcon(selectedRecipe.weight_effect)}</span>
                        <span className="capitalize">{selectedRecipe.weight_effect}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Recommended For</h4>
                  <div className="flex flex-wrap gap-1">
                    {parseJSON(selectedRecipe.recommended_doshas).map((dosha: string, index: number) => (
                      <span
                        key={index}
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          dosha === 'vata' ? 'bg-purple-100 text-purple-800' :
                          dosha === 'pitta' ? 'bg-red-100 text-red-800' :
                          'bg-green-100 text-green-800'
                        }`}
                      >
                        {dosha}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Best Seasons</h4>
                  <div className="flex flex-wrap gap-1">
                    {parseJSON(selectedRecipe.seasonal_suitability).map((season: string, index: number) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium capitalize"
                      >
                        {season}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center">
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 hover:bg-gray-50 transition-colors"
          >
            Previous
          </button>
          
          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-lg font-medium">
            Page {currentPage}
          </span>
          
          <button
            onClick={() => setCurrentPage(prev => prev + 1)}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
