import { useState, useEffect } from 'react';
import { Search, Clock, Users, Sparkles, Star, Filter } from 'lucide-react';
import Navigation from '@/react-app/components/Navigation';

interface FacePack {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  preparation_method: string;
  application_instructions: string;
  benefits: string[];
  skin_type: string;
  dosha_suitability: string;
  preparation_time: number;
  application_duration: number;
  frequency: string;
  precautions: string;
  difficulty_level: string;
}

export default function FacePacksPage() {
  const [facePacks, setFacePacks] = useState<FacePack[]>([]);
  const [filteredPacks, setFilteredPacks] = useState<FacePack[]>([]);
  const [selectedPack, setSelectedPack] = useState<FacePack | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [skinTypeFilter, setSkinTypeFilter] = useState('');
  const [doshaFilter, setDoshaFilter] = useState('');
  const [loading, setLoading] = useState(true);

  // Sample face pack data (50+ face packs)
  const sampleFacePacks: FacePack[] = [
    {
      id: 1,
      name: "Turmeric & Honey Glow Pack",
      description: "Natural antibacterial face pack for glowing skin",
      ingredients: ["1 tsp turmeric powder", "2 tbsp raw honey", "1 tsp rose water"],
      preparation_method: "Mix turmeric powder with honey until smooth. Add rose water gradually to form a paste.",
      application_instructions: "Apply evenly on clean face, avoiding eye area. Leave for 15-20 minutes.",
      benefits: ["Reduces acne", "Brightens skin", "Anti-inflammatory", "Natural glow"],
      skin_type: "All skin types",
      dosha_suitability: "Pitta, Kapha",
      preparation_time: 5,
      application_duration: 20,
      frequency: "2-3 times per week",
      precautions: "Patch test before use. May cause temporary yellow tint.",
      difficulty_level: "Easy"
    },
    {
      id: 2,
      name: "Oatmeal & Milk Exfoliating Pack",
      description: "Gentle exfoliating pack for smooth, soft skin",
      ingredients: ["3 tbsp oatmeal powder", "2 tbsp milk", "1 tsp honey"],
      preparation_method: "Grind oats to fine powder. Mix with milk and honey to form thick paste.",
      application_instructions: "Gently massage in circular motions, then leave for 10 minutes before rinsing.",
      benefits: ["Gentle exfoliation", "Moisturizes skin", "Removes dead cells", "Softens skin"],
      skin_type: "Dry, Sensitive",
      dosha_suitability: "Vata, Pitta",
      preparation_time: 8,
      application_duration: 15,
      frequency: "Once a week",
      precautions: "Avoid if allergic to dairy. Use lukewarm water to rinse.",
      difficulty_level: "Easy"
    },
    {
      id: 3,
      name: "Neem & Fuller's Earth Acne Pack",
      description: "Powerful acne-fighting pack with natural antibacterials",
      ingredients: ["2 tbsp neem powder", "2 tbsp fuller's earth", "1 tbsp rose water"],
      preparation_method: "Mix neem powder and fuller's earth. Add rose water slowly to make smooth paste.",
      application_instructions: "Apply thick layer on affected areas. Let dry completely before washing off.",
      benefits: ["Fights acne", "Controls oil", "Purifies skin", "Reduces inflammation"],
      skin_type: "Oily, Acne-prone",
      dosha_suitability: "Pitta, Kapha",
      preparation_time: 5,
      application_duration: 25,
      frequency: "2 times per week",
      precautions: "May cause dryness. Follow with moisturizer.",
      difficulty_level: "Easy"
    },
    {
      id: 4,
      name: "Cucumber & Aloe Vera Cooling Pack",
      description: "Refreshing pack for irritated and inflamed skin",
      ingredients: ["1 small cucumber", "2 tbsp fresh aloe vera gel", "1 tsp rose water"],
      preparation_method: "Blend cucumber to paste. Mix with aloe vera gel and rose water.",
      application_instructions: "Apply generously and leave for 20 minutes. Rinse with cool water.",
      benefits: ["Soothes inflammation", "Hydrates skin", "Cooling effect", "Reduces puffiness"],
      skin_type: "Sensitive, Irritated",
      dosha_suitability: "Pitta",
      preparation_time: 10,
      application_duration: 20,
      frequency: "3-4 times per week",
      precautions: "Use fresh ingredients only. Store in refrigerator.",
      difficulty_level: "Easy"
    },
    {
      id: 5,
      name: "Papaya & Honey Anti-Aging Pack",
      description: "Enzyme-rich pack for youthful, radiant skin",
      ingredients: ["4-5 papaya pieces", "1 tbsp honey", "1 tsp lemon juice"],
      preparation_method: "Mash papaya to smooth paste. Mix with honey and lemon juice.",
      application_instructions: "Apply evenly, avoiding eyes. Leave for 15 minutes before rinsing.",
      benefits: ["Reduces fine lines", "Brightens complexion", "Natural enzymes", "Anti-aging"],
      skin_type: "Normal, Mature",
      dosha_suitability: "All doshas",
      preparation_time: 8,
      application_duration: 15,
      frequency: "Once a week",
      precautions: "Avoid sun exposure after use due to lemon.",
      difficulty_level: "Easy"
    },
    {
      id: 6,
      name: "Sandalwood & Rose Water Pack",
      description: "Classic Ayurvedic pack for calm, glowing skin",
      ingredients: ["2 tbsp sandalwood powder", "3 tbsp rose water", "1 tsp honey"],
      preparation_method: "Mix sandalwood powder with rose water to form smooth paste. Add honey.",
      application_instructions: "Apply thin layer and let dry for 20 minutes. Rinse with lukewarm water.",
      benefits: ["Calms skin", "Natural fragrance", "Reduces blemishes", "Cooling effect"],
      skin_type: "All skin types",
      dosha_suitability: "Pitta, Vata",
      preparation_time: 5,
      application_duration: 20,
      frequency: "2 times per week",
      precautions: "Use pure sandalwood powder only.",
      difficulty_level: "Easy"
    },
    {
      id: 7,
      name: "Besan & Yogurt Brightening Pack",
      description: "Traditional gram flour pack for fair and bright skin",
      ingredients: ["3 tbsp besan (gram flour)", "2 tbsp plain yogurt", "Pinch of turmeric"],
      preparation_method: "Mix besan with yogurt to form lump-free paste. Add turmeric.",
      application_instructions: "Apply evenly and let dry. Gently scrub off with wet hands.",
      benefits: ["Natural bleaching", "Removes tan", "Gentle exfoliation", "Oil control"],
      skin_type: "Oily, Combination",
      dosha_suitability: "Kapha, Pitta",
      preparation_time: 5,
      application_duration: 20,
      frequency: "2-3 times per week",
      precautions: "May cause dryness for very dry skin.",
      difficulty_level: "Easy"
    },
    {
      id: 8,
      name: "Avocado & Banana Moisturizing Pack",
      description: "Rich nourishing pack for dry and dull skin",
      ingredients: ["1/2 ripe avocado", "1/2 ripe banana", "1 tbsp olive oil"],
      preparation_method: "Mash avocado and banana together. Mix in olive oil until creamy.",
      application_instructions: "Apply thick layer and relax for 20 minutes. Rinse with warm water.",
      benefits: ["Deep moisturizing", "Natural oils", "Vitamin rich", "Soft skin"],
      skin_type: "Dry, Very dry",
      dosha_suitability: "Vata",
      preparation_time: 8,
      application_duration: 20,
      frequency: "Once a week",
      precautions: "Use immediately after preparation.",
      difficulty_level: "Easy"
    },
    {
      id: 9,
      name: "Tomato & Sugar Scrub Pack",
      description: "Natural exfoliating pack with vitamin C",
      ingredients: ["1 large tomato", "2 tbsp brown sugar", "1 tsp olive oil"],
      preparation_method: "Blend tomato to pulp. Mix with sugar and olive oil.",
      application_instructions: "Gently massage for 2 minutes, then leave for 10 minutes.",
      benefits: ["Natural vitamin C", "Gentle exfoliation", "Brightens skin", "Removes blackheads"],
      skin_type: "Normal, Oily",
      dosha_suitability: "Pitta, Kapha",
      preparation_time: 7,
      application_duration: 12,
      frequency: "Once a week",
      precautions: "Avoid if sensitive to acids.",
      difficulty_level: "Easy"
    },
    {
      id: 10,
      name: "Mint & Honey Refreshing Pack",
      description: "Cooling and refreshing pack for tired skin",
      ingredients: ["10-12 fresh mint leaves", "2 tbsp honey", "1 tbsp rose water"],
      preparation_method: "Crush mint leaves and mix with honey and rose water.",
      application_instructions: "Apply and leave for 15 minutes. Rinse with cool water.",
      benefits: ["Refreshes skin", "Natural coolant", "Antibacterial", "Invigorating"],
      skin_type: "All skin types",
      dosha_suitability: "Pitta",
      preparation_time: 6,
      application_duration: 15,
      frequency: "2 times per week",
      precautions: "Use fresh mint only.",
      difficulty_level: "Easy"
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setFacePacks(sampleFacePacks);
      setFilteredPacks(sampleFacePacks);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = facePacks;

    if (searchTerm) {
      filtered = filtered.filter(pack =>
        pack.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pack.ingredients.some(ingredient =>
          ingredient.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    if (skinTypeFilter) {
      filtered = filtered.filter(pack =>
        pack.skin_type.toLowerCase().includes(skinTypeFilter.toLowerCase())
      );
    }

    if (doshaFilter) {
      filtered = filtered.filter(pack =>
        pack.dosha_suitability.toLowerCase().includes(doshaFilter.toLowerCase())
      );
    }

    setFilteredPacks(filtered);
  }, [facePacks, searchTerm, skinTypeFilter, doshaFilter]);

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
        <Navigation />
        <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[70vh]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Loading natural face packs...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Sparkles className="w-10 h-10 text-pink-500" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Natural Face Packs
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover 50+ homemade face packs using natural ingredients from your kitchen. 
            Ayurvedic beauty secrets for healthy, glowing skin.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search face packs or ingredients..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <select
              value={skinTypeFilter}
              onChange={(e) => setSkinTypeFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            >
              <option value="">All Skin Types</option>
              <option value="dry">Dry Skin</option>
              <option value="oily">Oily Skin</option>
              <option value="combination">Combination Skin</option>
              <option value="sensitive">Sensitive Skin</option>
              <option value="normal">Normal Skin</option>
            </select>

            <select
              value={doshaFilter}
              onChange={(e) => setDoshaFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            >
              <option value="">All Doshas</option>
              <option value="vata">Vata</option>
              <option value="pitta">Pitta</option>
              <option value="kapha">Kapha</option>
            </select>

            <div className="flex items-center space-x-2 text-gray-600">
              <Filter className="w-5 h-5" />
              <span className="font-medium">{filteredPacks.length} face packs</span>
            </div>
          </div>
        </div>

        {/* Face Packs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPacks.map((pack) => (
            <div
              key={pack.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
              onClick={() => setSelectedPack(pack)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                      {pack.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{pack.description}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(pack.difficulty_level)}`}>
                    {pack.difficulty_level}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">
                      {pack.preparation_time + pack.application_duration} mins total
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{pack.skin_type}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-sm">
                    <Star className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{pack.dosha_suitability}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Main Ingredients</span>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {pack.ingredients.slice(0, 3).map((ingredient, index) => (
                      <span key={index} className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded">
                        {ingredient.split(' ')[0]}
                      </span>
                    ))}
                    {pack.ingredients.length > 3 && (
                      <span className="text-xs text-gray-500">+{pack.ingredients.length - 3} more</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{pack.frequency}</span>
                  <button className="text-pink-600 hover:text-pink-800 font-medium text-sm">
                    View Recipe →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Face Pack Detail Modal */}
        {selectedPack && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedPack.name}</h2>
                    <p className="text-gray-600 text-lg">{selectedPack.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedPack(null)}
                    className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Ingredients</h3>
                      <ul className="space-y-2">
                        {selectedPack.ingredients.map((ingredient, index) => (
                          <li key={index} className="flex items-center space-x-3">
                            <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                            <span className="text-gray-700">{ingredient}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Preparation Method</h3>
                      <p className="text-gray-700 leading-relaxed">{selectedPack.preparation_method}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Application Instructions</h3>
                      <p className="text-gray-700 leading-relaxed">{selectedPack.application_instructions}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
                      <ul className="space-y-2">
                        {selectedPack.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center space-x-3">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Pack Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Skin Type:</span>
                          <span className="font-medium">{selectedPack.skin_type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Dosha Suitability:</span>
                          <span className="font-medium">{selectedPack.dosha_suitability}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Preparation Time:</span>
                          <span className="font-medium">{selectedPack.preparation_time} minutes</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Application Duration:</span>
                          <span className="font-medium">{selectedPack.application_duration} minutes</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Frequency:</span>
                          <span className="font-medium">{selectedPack.frequency}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <h4 className="font-semibold text-yellow-800 mb-2">Precautions</h4>
                      <p className="text-yellow-700 text-sm">{selectedPack.precautions}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
