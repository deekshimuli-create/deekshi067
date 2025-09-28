import { useState, useEffect } from 'react';
import { Search, Sprout, Sun, Droplets, Clock, Thermometer, ShoppingCart, Heart } from 'lucide-react';
import Navigation from '@/react-app/components/Navigation';

interface HerbalSeed {
  id: number;
  name: string;
  scientific_name: string;
  common_names: string[];
  plant_type: string;
  medicinal_properties: string[];
  health_benefits: string[];
  growing_instructions: string;
  climate_requirements: string;
  soil_type: string;
  watering_frequency: string;
  sunlight_requirements: string;
  harvest_time: string;
  usage_parts: string[];
  preparation_methods: string[];
  dosage_instructions: string;
  precautions: string;
  seed_price: number;
  availability: string;
  growing_difficulty: string;
  image_url: string;
}

export default function HerbalSeedsPage() {
  const [seeds, setSeeds] = useState<HerbalSeed[]>([]);
  const [filteredSeeds, setFilteredSeeds] = useState<HerbalSeed[]>([]);
  const [selectedSeed, setSelectedSeed] = useState<HerbalSeed | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [plantTypeFilter, setPlantTypeFilter] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('');
  const [loading, setLoading] = useState(true);

  // Sample herbal seeds data
  const sampleSeeds: HerbalSeed[] = [
    {
      id: 1,
      name: "Holy Basil (Tulsi)",
      scientific_name: "Ocimum tenuiflorum",
      common_names: ["Sacred Basil", "Tulsi", "Krishna Tulsi"],
      plant_type: "Herb",
      medicinal_properties: ["Adaptogenic", "Antimicrobial", "Anti-inflammatory", "Antioxidant"],
      health_benefits: ["Stress relief", "Immune support", "Respiratory health", "Blood sugar regulation"],
      growing_instructions: "Sow seeds in well-drained soil. Keep soil moist but not waterlogged. Germination occurs in 7-14 days.",
      climate_requirements: "Warm, humid climate. Temperature range 20-35°C",
      soil_type: "Well-drained loamy soil with pH 6.0-7.5",
      watering_frequency: "Daily during dry periods, avoid overwatering",
      sunlight_requirements: "Full sun to partial shade (6-8 hours daily)",
      harvest_time: "60-90 days from planting",
      usage_parts: ["Leaves", "Seeds", "Flowers"],
      preparation_methods: ["Fresh consumption", "Tea", "Extract", "Powder"],
      dosage_instructions: "2-3 fresh leaves daily or 1 cup tea twice daily",
      precautions: "Avoid during pregnancy. May interact with blood-thinning medications.",
      seed_price: 25,
      availability: "Available",
      growing_difficulty: "Easy",
      image_url: "https://images.unsplash.com/photo-1616781239916-0b13cc63e8a4?w=400"
    },
    {
      id: 2,
      name: "Ashwagandha",
      scientific_name: "Withania somnifera",
      common_names: ["Winter Cherry", "Indian Ginseng", "Poison Gooseberry"],
      plant_type: "Shrub",
      medicinal_properties: ["Adaptogenic", "Anxiolytic", "Anti-inflammatory", "Immunomodulatory"],
      health_benefits: ["Stress management", "Energy boost", "Sleep improvement", "Hormone balance"],
      growing_instructions: "Sow seeds 1 cm deep in seed trays. Transplant after 4-6 weeks. Requires minimal care once established.",
      climate_requirements: "Dry climate preferred. Temperature range 20-30°C",
      soil_type: "Sandy loam with good drainage. pH 7.5-8.0",
      watering_frequency: "Minimal watering, drought tolerant once established",
      sunlight_requirements: "Full sun (8+ hours daily)",
      harvest_time: "150-180 days for roots",
      usage_parts: ["Roots", "Leaves", "Berries"],
      preparation_methods: ["Powder", "Extract", "Decoction", "Capsules"],
      dosage_instructions: "300-500mg root powder daily with milk or water",
      precautions: "Avoid during pregnancy and breastfeeding. May interact with thyroid medications.",
      seed_price: 45,
      availability: "Available",
      growing_difficulty: "Medium",
      image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
    },
    {
      id: 3,
      name: "Fenugreek",
      scientific_name: "Trigonella foenum-graecum",
      common_names: ["Methi", "Greek Hay", "Bird's Foot"],
      plant_type: "Herb",
      medicinal_properties: ["Hypoglycemic", "Galactagogue", "Anti-inflammatory", "Digestive"],
      health_benefits: ["Blood sugar control", "Lactation support", "Digestive health", "Cholesterol reduction"],
      growing_instructions: "Direct sow seeds 1-2 cm deep. Thin seedlings to 10 cm apart. Cool season crop.",
      climate_requirements: "Cool, dry climate. Temperature range 15-25°C",
      soil_type: "Well-drained fertile soil. pH 6.0-7.0",
      watering_frequency: "Regular watering until establishment, then moderate",
      sunlight_requirements: "Full sun (6-8 hours daily)",
      harvest_time: "90-120 days for seeds, 30-40 days for leaves",
      usage_parts: ["Seeds", "Leaves"],
      preparation_methods: ["Sprouted seeds", "Powder", "Tea", "Cooked leaves"],
      dosage_instructions: "1 tsp soaked seeds daily or fresh leaves as vegetable",
      precautions: "May cause digestive upset in large quantities. Avoid if allergic to legumes.",
      seed_price: 20,
      availability: "Available",
      growing_difficulty: "Easy",
      image_url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400"
    },
    {
      id: 4,
      name: "Brahmi",
      scientific_name: "Bacopa monnieri",
      common_names: ["Water Hyssop", "Herb of Grace", "Indian Pennywort"],
      plant_type: "Herb",
      medicinal_properties: ["Nootropic", "Adaptogenic", "Neuroprotective", "Anti-anxiety"],
      health_benefits: ["Memory enhancement", "Cognitive function", "Stress reduction", "Mental clarity"],
      growing_instructions: "Grows well in wet soil or shallow water. Can be grown in containers with regular watering.",
      climate_requirements: "Warm, humid climate. Temperature range 22-35°C",
      soil_type: "Moist, fertile soil or aquatic conditions",
      watering_frequency: "Keep constantly moist or in standing water",
      sunlight_requirements: "Partial shade to full sun",
      harvest_time: "60-90 days for continuous harvesting",
      usage_parts: ["Whole plant", "Leaves"],
      preparation_methods: ["Fresh juice", "Powder", "Oil infusion", "Tea"],
      dosage_instructions: "1-2 tsp fresh juice or 300mg powder daily",
      precautions: "May cause drowsiness. Start with small doses.",
      seed_price: 35,
      availability: "Available",
      growing_difficulty: "Medium",
      image_url: "https://images.unsplash.com/photo-1524441138824-6ad77a14d0c0?w=400"
    },
    {
      id: 5,
      name: "Neem",
      scientific_name: "Azadirachta indica",
      common_names: ["Indian Lilac", "Margosa Tree", "Nimba"],
      plant_type: "Tree",
      medicinal_properties: ["Antimicrobial", "Anti-inflammatory", "Antifungal", "Insecticidal"],
      health_benefits: ["Skin health", "Dental care", "Immune support", "Blood purification"],
      growing_instructions: "Soak seeds overnight before planting. Grows slowly initially but becomes hardy. Needs space to grow.",
      climate_requirements: "Tropical to subtropical. Temperature range 21-32°C",
      soil_type: "Well-drained soil, tolerates poor soils. pH 6.2-7.0",
      watering_frequency: "Regular watering for first 2 years, then drought tolerant",
      sunlight_requirements: "Full sun",
      harvest_time: "3-5 years for significant harvest",
      usage_parts: ["Leaves", "Bark", "Seeds", "Oil"],
      preparation_methods: ["Oil extraction", "Powder", "Decoction", "Paste"],
      dosage_instructions: "2-4 leaves daily or as directed by practitioner",
      precautions: "Bitter taste. Avoid internal use during pregnancy.",
      seed_price: 30,
      availability: "Available",
      growing_difficulty: "Medium",
      image_url: "https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=400"
    },
    {
      id: 6,
      name: "Aloe Vera",
      scientific_name: "Aloe barbadensis",
      common_names: ["True Aloe", "Medicinal Aloe", "Burn Plant"],
      plant_type: "Succulent",
      medicinal_properties: ["Anti-inflammatory", "Wound healing", "Moisturizing", "Antimicrobial"],
      health_benefits: ["Skin healing", "Digestive health", "Burns treatment", "Hair care"],
      growing_instructions: "Plant in well-draining soil. Water sparingly. Propagate from offsets rather than seeds for better results.",
      climate_requirements: "Warm, dry climate. Temperature range 18-27°C",
      soil_type: "Sandy, well-draining soil. pH 7.0-8.5",
      watering_frequency: "Water deeply but infrequently, allow soil to dry between waterings",
      sunlight_requirements: "Bright, indirect light to partial sun",
      harvest_time: "18-24 months for mature plants",
      usage_parts: ["Gel from leaves", "Latex"],
      preparation_methods: ["Fresh gel", "Juice", "Powder", "Topical application"],
      dosage_instructions: "2-4 tablespoons gel daily or topical application as needed",
      precautions: "Test for skin sensitivity. Avoid latex during pregnancy.",
      seed_price: 40,
      availability: "Available",
      growing_difficulty: "Easy",
      image_url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400"
    },
    {
      id: 7,
      name: "Ginger",
      scientific_name: "Zingiber officinale",
      common_names: ["Adrak", "Common Ginger", "Culinary Ginger"],
      plant_type: "Rhizome",
      medicinal_properties: ["Anti-inflammatory", "Digestive", "Anti-nausea", "Warming"],
      health_benefits: ["Digestive aid", "Nausea relief", "Anti-inflammatory", "Immune support"],
      growing_instructions: "Plant rhizome pieces with buds in rich, moist soil. Provide warmth and humidity for sprouting.",
      climate_requirements: "Warm, humid climate. Temperature range 25-30°C",
      soil_type: "Rich, well-draining loamy soil. pH 5.5-6.5",
      watering_frequency: "Keep soil consistently moist but not waterlogged",
      sunlight_requirements: "Partial shade to filtered sunlight",
      harvest_time: "8-10 months for baby ginger, 12 months for mature",
      usage_parts: ["Rhizome (root)", "Young shoots"],
      preparation_methods: ["Fresh consumption", "Tea", "Juice", "Powder", "Oil"],
      dosage_instructions: "1-3g fresh ginger daily or 1 cup ginger tea",
      precautions: "May interact with blood thinners. Limit intake if taking medications.",
      seed_price: 25,
      availability: "Available",
      growing_difficulty: "Medium",
      image_url: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400"
    },
    {
      id: 8,
      name: "Mint",
      scientific_name: "Mentha spicata",
      common_names: ["Spearmint", "Pudina", "Garden Mint"],
      plant_type: "Herb",
      medicinal_properties: ["Digestive", "Antispasmodic", "Antimicrobial", "Cooling"],
      health_benefits: ["Digestive health", "Respiratory relief", "Oral health", "Cooling effect"],
      growing_instructions: "Easy to grow from seeds or cuttings. Spreads rapidly, consider container growing to control spread.",
      climate_requirements: "Temperate climate. Temperature range 15-25°C",
      soil_type: "Moist, fertile soil. pH 6.0-7.0",
      watering_frequency: "Keep soil consistently moist",
      sunlight_requirements: "Partial shade to full sun",
      harvest_time: "60-90 days for continuous harvesting",
      usage_parts: ["Leaves", "Stems"],
      preparation_methods: ["Fresh consumption", "Tea", "Oil extraction", "Dried leaves"],
      dosage_instructions: "Fresh leaves as needed or 1-2 cups tea daily",
      precautions: "Generally safe. May cause heartburn in sensitive individuals.",
      seed_price: 15,
      availability: "Available",
      growing_difficulty: "Easy",
      image_url: "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?w=400"
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setSeeds(sampleSeeds);
      setFilteredSeeds(sampleSeeds);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = seeds;

    if (searchTerm) {
      filtered = filtered.filter(seed =>
        seed.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        seed.scientific_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        seed.health_benefits.some(benefit =>
          benefit.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    if (plantTypeFilter) {
      filtered = filtered.filter(seed =>
        seed.plant_type.toLowerCase() === plantTypeFilter.toLowerCase()
      );
    }

    if (difficultyFilter) {
      filtered = filtered.filter(seed =>
        seed.growing_difficulty.toLowerCase() === difficultyFilter.toLowerCase()
      );
    }

    setFilteredSeeds(filtered);
  }, [seeds, searchTerm, plantTypeFilter, difficultyFilter]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleAddToCart = (seed: HerbalSeed) => {
    alert(`Added ${seed.name} seeds to cart for ₹${seed.seed_price}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <Navigation />
        <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[70vh]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Loading herbal seeds collection...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Sprout className="w-10 h-10 text-green-500" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Herbal Seeds for Home
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Grow your own medicinal garden with authentic Ayurvedic herb seeds. 
            Complete growing guides and health benefits for each plant.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search herbs or benefits..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <select
              value={plantTypeFilter}
              onChange={(e) => setPlantTypeFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option value="">All Plant Types</option>
              <option value="herb">Herbs</option>
              <option value="shrub">Shrubs</option>
              <option value="tree">Trees</option>
              <option value="succulent">Succulents</option>
              <option value="rhizome">Rhizomes</option>
            </select>

            <select
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option value="">All Difficulties</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>

            <div className="flex items-center space-x-2 text-gray-600">
              <Sprout className="w-5 h-5" />
              <span className="font-medium">{filteredSeeds.length} varieties</span>
            </div>
          </div>
        </div>

        {/* Seeds Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSeeds.map((seed) => (
            <div
              key={seed.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={seed.image_url} 
                  alt={seed.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {seed.name}
                    </h3>
                    <p className="text-gray-600 text-sm italic">{seed.scientific_name}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(seed.growing_difficulty)}`}>
                    {seed.growing_difficulty}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Sprout className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{seed.plant_type}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{seed.harvest_time}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-sm">
                    <Sun className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{seed.sunlight_requirements}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Health Benefits</span>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {seed.health_benefits.slice(0, 3).map((benefit, index) => (
                      <span key={index} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        {benefit}
                      </span>
                    ))}
                    {seed.health_benefits.length > 3 && (
                      <span className="text-xs text-gray-500">+{seed.health_benefits.length - 3} more</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-green-600">₹{seed.seed_price}</div>
                  <span className="text-sm text-green-600 font-medium">{seed.availability}</span>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedSeed(seed)}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => handleAddToCart(seed)}
                    className="bg-green-100 hover:bg-green-200 text-green-700 p-2 rounded-lg transition-colors"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seed Detail Modal */}
        {selectedSeed && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedSeed.name}</h2>
                    <p className="text-gray-600 text-lg italic">{selectedSeed.scientific_name}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedSeed.plant_type}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(selectedSeed.growing_difficulty)}`}>
                        {selectedSeed.growing_difficulty} to grow
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedSeed(null)}
                    className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                        <Heart className="w-5 h-5 text-red-500" />
                        <span>Health Benefits</span>
                      </h3>
                      <ul className="space-y-2">
                        {selectedSeed.health_benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center space-x-3">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Medicinal Properties</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedSeed.medicinal_properties.map((property, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {property}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Usage & Preparation</h3>
                      <div className="space-y-3">
                        <div>
                          <span className="font-medium text-gray-700">Used Parts:</span>
                          <p className="text-gray-600">{selectedSeed.usage_parts.join(', ')}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Preparation Methods:</span>
                          <p className="text-gray-600">{selectedSeed.preparation_methods.join(', ')}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Dosage:</span>
                          <p className="text-gray-600">{selectedSeed.dosage_instructions}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                        <Sprout className="w-5 h-5 text-green-500" />
                        <span>Growing Instructions</span>
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">{selectedSeed.growing_instructions}</p>
                      
                      <div className="bg-green-50 p-4 rounded-lg space-y-3">
                        <div className="flex items-center space-x-3">
                          <Thermometer className="w-5 h-5 text-orange-500" />
                          <div>
                            <span className="font-medium text-gray-700">Climate:</span>
                            <p className="text-gray-600 text-sm">{selectedSeed.climate_requirements}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Sun className="w-5 h-5 text-yellow-500" />
                          <div>
                            <span className="font-medium text-gray-700">Sunlight:</span>
                            <p className="text-gray-600 text-sm">{selectedSeed.sunlight_requirements}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Droplets className="w-5 h-5 text-blue-500" />
                          <div>
                            <span className="font-medium text-gray-700">Watering:</span>
                            <p className="text-gray-600 text-sm">{selectedSeed.watering_frequency}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-purple-500" />
                          <div>
                            <span className="font-medium text-gray-700">Harvest Time:</span>
                            <p className="text-gray-600 text-sm">{selectedSeed.harvest_time}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <h4 className="font-semibold text-yellow-800 mb-2">Precautions</h4>
                      <p className="text-yellow-700 text-sm">{selectedSeed.precautions}</p>
                    </div>

                    <div className="bg-white border-2 border-green-200 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-3xl font-bold text-green-600">₹{selectedSeed.seed_price}</div>
                          <div className="text-sm text-gray-500">Per packet</div>
                        </div>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {selectedSeed.availability}
                        </span>
                      </div>
                      <button
                        onClick={() => handleAddToCart(selectedSeed)}
                        className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Start Your Medicinal Garden</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Easy to Grow</h3>
              <p className="text-green-100">
                Our collection includes herbs suitable for beginners. Start with easy-to-grow varieties 
                like tulsi, mint, and aloe vera.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Authentic Seeds</h3>
              <p className="text-green-100">
                All seeds are sourced from organic farms and tested for germination. 
                Each packet includes detailed growing instructions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Health Benefits</h3>
              <p className="text-green-100">
                Grow your own pharmacy at home. Fresh herbs provide maximum potency 
                and therapeutic benefits for your family's health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
