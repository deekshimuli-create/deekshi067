import { useState, useEffect } from 'react';
import { Search, Thermometer, Leaf, MapPin, Clock, BookOpen, AlertCircle, Heart } from 'lucide-react';
import Navigation from '@/react-app/components/Navigation';

interface FoodItem {
  id: number;
  name: string;
  name_local: string;
  category: string;
  vata_effect: string;
  pitta_effect: string;
  kapha_effect: string;
  thermal_effect: string;
  weight_effect: string;
  taste: string;
  season: string;
  region: string;
  is_local: boolean;
  nutritional_data: string;
  ingredients: string;
  preparation_instructions: string;
  usage_tips: string;
  health_benefits: string;
  precautions: string;
}

export default function FoodItemsPage() {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedThermalEffect, setSelectedThermalEffect] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('');
  const [selectedFoodItem, setSelectedFoodItem] = useState<FoodItem | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchFoodItems = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: '20',
        ...(selectedCategory && { category: selectedCategory }),
        ...(selectedThermalEffect && { thermal_effect: selectedThermalEffect }),
        ...(selectedSeason && { season: selectedSeason }),
        ...(searchTerm && { search: searchTerm })
      });

      const response = await fetch(`/api/food-items?${params}`);
      const data = await response.json();
      
      setFoodItems(data.foodItems || []);
    } catch (error) {
      console.error('Failed to fetch food items:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFoodItems();
  }, [currentPage, selectedCategory, selectedThermalEffect, selectedSeason, searchTerm]);

  const getEffectColor = (effect: string) => {
    switch (effect) {
      case 'increase': return 'text-red-600 bg-red-100';
      case 'decrease': return 'text-green-600 bg-green-100';
      case 'neutral': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getThermalIcon = (effect: string) => {
    switch (effect) {
      case 'heating': return '🔥';
      case 'cooling': return '❄️';
      case 'neutral': return '🌡️';
      default: return '🌡️';
    }
  };

  const parsedIngredients = (ingredients: string) => {
    try {
      return JSON.parse(ingredients || '[]');
    } catch {
      return [];
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-teal-50 relative" style={{backgroundImage: 'url(https://mocha-cdn.com/01997178-dfe4-7eb2-bf8a-1469c258d0ad/ayurvedic-background-pattern.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}}>
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      <div className="relative z-10">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Ayurvedic Food Items
          </h1>
          <p className="text-xl text-gray-600">
            Explore food items with detailed Ayurvedic properties, ingredients, and preparation guides
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search food items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">All Categories</option>
              <option value="vegetables">Vegetables</option>
              <option value="fruits">Fruits</option>
              <option value="grains">Grains</option>
              <option value="spices">Spices</option>
              <option value="legumes">Legumes</option>
              <option value="dairy">Dairy</option>
            </select>

            <select
              value={selectedThermalEffect}
              onChange={(e) => setSelectedThermalEffect(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">All Thermal Effects</option>
              <option value="heating">Heating</option>
              <option value="cooling">Cooling</option>
              <option value="neutral">Neutral</option>
            </select>

            <select
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">All Seasons</option>
              <option value="spring">Spring</option>
              <option value="summer">Summer</option>
              <option value="autumn">Autumn</option>
              <option value="winter">Winter</option>
            </select>
          </div>
        </div>

        {/* Food Items Grid */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 animate-pulse">
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-3 bg-gray-200 rounded mb-2"></div>
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
            {foodItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group hover:scale-105 cursor-pointer"
                onClick={() => setSelectedFoodItem(item)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg text-gray-900 group-hover:text-green-600 transition-colors">
                      {item.name}
                    </h3>
                    {item.is_local && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                        Local
                      </span>
                    )}
                  </div>
                  
                  {item.name_local && (
                    <p className="text-gray-600 text-sm mb-3 italic">
                      {item.name_local}
                    </p>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                      {item.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <span>{getThermalIcon(item.thermal_effect)}</span>
                      <span className="text-xs capitalize text-gray-600">{item.thermal_effect}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                    <div className={`px-2 py-1 rounded text-center ${getEffectColor(item.vata_effect)}`}>
                      V: {item.vata_effect}
                    </div>
                    <div className={`px-2 py-1 rounded text-center ${getEffectColor(item.pitta_effect)}`}>
                      P: {item.pitta_effect}
                    </div>
                    <div className={`px-2 py-1 rounded text-center ${getEffectColor(item.kapha_effect)}`}>
                      K: {item.kapha_effect}
                    </div>
                  </div>

                  <div className="space-y-1 text-xs text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Leaf className="w-3 h-3" />
                      <span>Taste: {item.taste}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>Season: {item.season}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>Region: {item.region}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Food Item Detail Modal */}
        {selectedFoodItem && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {selectedFoodItem.name}
                    </h2>
                    {selectedFoodItem.name_local && (
                      <p className="text-xl text-gray-600 italic">
                        {selectedFoodItem.name_local}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedFoodItem(null)}
                    className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column - Properties */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                        <Thermometer className="w-5 h-5 text-blue-500" />
                        <span>Ayurvedic Properties</span>
                      </h3>
                      <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-2">
                          <div className={`px-3 py-2 rounded-lg text-center ${getEffectColor(selectedFoodItem.vata_effect)}`}>
                            <div className="font-medium">Vata</div>
                            <div className="text-xs">{selectedFoodItem.vata_effect}</div>
                          </div>
                          <div className={`px-3 py-2 rounded-lg text-center ${getEffectColor(selectedFoodItem.pitta_effect)}`}>
                            <div className="font-medium">Pitta</div>
                            <div className="text-xs">{selectedFoodItem.pitta_effect}</div>
                          </div>
                          <div className={`px-3 py-2 rounded-lg text-center ${getEffectColor(selectedFoodItem.kapha_effect)}`}>
                            <div className="font-medium">Kapha</div>
                            <div className="text-xs">{selectedFoodItem.kapha_effect}</div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">Thermal Effect:</span>
                            <span className="flex items-center space-x-1">
                              <span>{getThermalIcon(selectedFoodItem.thermal_effect)}</span>
                              <span className="capitalize">{selectedFoodItem.thermal_effect}</span>
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">Weight Effect:</span>
                            <span className="capitalize">{selectedFoodItem.weight_effect}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {selectedFoodItem.ingredients && parsedIngredients(selectedFoodItem.ingredients).length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                          <Leaf className="w-5 h-5 text-green-500" />
                          <span>Main Components</span>
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          {parsedIngredients(selectedFoodItem.ingredients).map((ingredient: string, index: number) => (
                            <li key={index}>{ingredient}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedFoodItem.health_benefits && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                          <Heart className="w-5 h-5 text-red-500" />
                          <span>Health Benefits</span>
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{selectedFoodItem.health_benefits}</p>
                      </div>
                    )}
                  </div>

                  {/* Right Column - Usage & Preparation */}
                  <div className="space-y-6">
                    {selectedFoodItem.preparation_instructions && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                          <BookOpen className="w-5 h-5 text-purple-500" />
                          <span>Preparation Instructions</span>
                        </h3>
                        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {selectedFoodItem.preparation_instructions}
                        </div>
                      </div>
                    )}

                    {selectedFoodItem.usage_tips && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                          <BookOpen className="w-5 h-5 text-blue-500" />
                          <span>Usage Tips</span>
                        </h3>
                        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {selectedFoodItem.usage_tips}
                        </div>
                      </div>
                    )}

                    {selectedFoodItem.precautions && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                          <AlertCircle className="w-5 h-5 text-orange-500" />
                          <span>Precautions</span>
                        </h3>
                        <div className="text-gray-700 leading-relaxed bg-orange-50 p-4 rounded-lg border border-orange-200">
                          {selectedFoodItem.precautions}
                        </div>
                      </div>
                    )}

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Additional Information</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Category:</span> {selectedFoodItem.category}
                        </div>
                        <div>
                          <span className="font-medium">Taste:</span> {selectedFoodItem.taste}
                        </div>
                        <div>
                          <span className="font-medium">Season:</span> {selectedFoodItem.season}
                        </div>
                        <div>
                          <span className="font-medium">Region:</span> {selectedFoodItem.region}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center mt-8">
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
      </div>
    </div>
  );
}
