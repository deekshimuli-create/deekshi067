import { useState } from 'react';
import { 
  BarChart3, Users, Utensils, Brain, Heart, TrendingUp, 
  Calendar, Bell, Smartphone, Globe, Award, Zap,
  Target, BookOpen, Star, Timer, Leaf
} from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: any;
  category: string;
  complexity: 'Basic' | 'Advanced' | 'Premium';
  benefits: string[];
  techStack: string[];
  userStories: string[];
  color: string;
}

export default function FeatureBreakdown() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  const features: Feature[] = [
    {
      id: 'dosha-dashboard',
      title: 'Dosha Balance Dashboard',
      description: 'Interactive visualization of Vata, Pitta, and Kapha balance with real-time analytics and personalized insights.',
      icon: BarChart3,
      category: 'Core Features',
      complexity: 'Advanced',
      benefits: [
        'Real-time dosha balance tracking',
        'Personalized wellness insights',
        'Progress visualization over time',
        'Dosha-specific recommendations'
      ],
      techStack: ['React', 'Recharts', 'D3.js', 'SQLite'],
      userStories: [
        'As a user, I can track my daily dosha balance',
        'As a user, I can see trends in my wellness metrics',
        'As a user, I get personalized recommendations based on my dosha'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'recipe-analyzer',
      title: 'Recipe Analyzer & Gallery',
      description: '8,000+ curated Ayurvedic recipes with detailed dosha effects, nutritional analysis, and cooking instructions.',
      icon: Utensils,
      category: 'Content',
      complexity: 'Advanced',
      benefits: [
        'Extensive recipe database',
        'Dosha-specific filtering',
        'Nutritional analysis',
        'Step-by-step cooking guides'
      ],
      techStack: ['React', 'Search API', 'Image Processing', 'Content Management'],
      userStories: [
        'As a user, I can find recipes suitable for my dosha',
        'As a user, I can analyze any recipe for dosha effects',
        'As a user, I can save favorite recipes'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'doctor-consultation',
      title: 'Doctor Consultation Platform',
      description: 'Connect with 1,000+ verified Ayurvedic practitioners for personalized video consultations and treatment plans.',
      icon: Users,
      category: 'Healthcare',
      complexity: 'Premium',
      benefits: [
        'Verified practitioner network',
        'Video consultation capability',
        'Appointment scheduling',
        'Prescription management'
      ],
      techStack: ['WebRTC', 'Video SDK', 'Payment Gateway', 'Calendar API'],
      userStories: [
        'As a user, I can book consultations with verified doctors',
        'As a user, I can have video calls with practitioners',
        'As a user, I can access my consultation history'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'progress-tracking',
      title: 'Wellness Progress Tracking',
      description: 'Comprehensive tracking of energy, digestion, sleep, mood, and symptoms with detailed analytics.',
      icon: TrendingUp,
      category: 'Analytics',
      complexity: 'Advanced',
      benefits: [
        'Multiple wellness metrics',
        'Trend analysis and insights',
        'Goal setting and tracking',
        'Health score calculations'
      ],
      techStack: ['Time Series DB', 'Analytics Engine', 'Data Visualization', 'ML Models'],
      userStories: [
        'As a user, I can log daily wellness metrics',
        'As a user, I can see my progress over time',
        'As a user, I can set and track health goals'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'meal-planning',
      title: 'Personalized Meal Planning',
      description: 'AI-powered meal plans based on dosha type, seasonal considerations, and dietary preferences.',
      icon: Calendar,
      category: 'Personalization',
      complexity: 'Advanced',
      benefits: [
        'Dosha-specific meal plans',
        'Seasonal food recommendations',
        'Shopping list generation',
        'Nutritional balance optimization'
      ],
      techStack: ['AI/ML', 'Nutrition API', 'Recipe Database', 'Optimization Algorithms'],
      userStories: [
        'As a user, I can get weekly meal plans for my dosha',
        'As a user, I can customize meals based on preferences',
        'As a user, I can generate shopping lists automatically'
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'food-scanner',
      title: 'QR Code Food Scanner',
      description: 'Scan packaged foods to get instant Ayurvedic property analysis and dosha compatibility ratings.',
      icon: Smartphone,
      category: 'Innovation',
      complexity: 'Advanced',
      benefits: [
        'Instant food analysis',
        'Dosha compatibility scoring',
        'Ingredient breakdown',
        'Alternative suggestions'
      ],
      techStack: ['Camera API', 'QR Scanner', 'Food Database', 'Image Recognition'],
      userStories: [
        'As a user, I can scan food packages for dosha effects',
        'As a user, I can get instant compatibility ratings',
        'As a user, I can find better alternatives'
      ],
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'community-groups',
      title: 'Community & Gamification',
      description: 'Join dosha-specific groups, earn points for healthy choices, and participate in wellness challenges.',
      icon: Award,
      category: 'Social',
      complexity: 'Advanced',
      benefits: [
        'Dosha-based communities',
        'Wellness challenges',
        'Achievement system',
        'Social motivation'
      ],
      techStack: ['Social Platform', 'Gamification Engine', 'Push Notifications', 'Community Management'],
      userStories: [
        'As a user, I can join groups with similar dosha types',
        'As a user, I can participate in wellness challenges',
        'As a user, I can earn points and badges'
      ],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'smart-notifications',
      title: 'Smart Notifications',
      description: 'Intelligent reminders for meals, yoga, meditation, and medicine based on your routine and dosha.',
      icon: Bell,
      category: 'Automation',
      complexity: 'Basic',
      benefits: [
        'Personalized reminder system',
        'Dosha-aware timing',
        'Habit formation support',
        'Lifestyle optimization'
      ],
      techStack: ['Push Notifications', 'Scheduling Engine', 'ML Personalization', 'Time Zone Handling'],
      userStories: [
        'As a user, I get reminders at optimal times for my dosha',
        'As a user, I can customize notification preferences',
        'As a user, I receive motivational wellness tips'
      ],
      color: 'from-teal-500 to-green-500'
    },
    {
      id: 'regional-foods',
      title: 'Regional Food Database',
      description: 'Extensive database of local foods from different regions with authentic Ayurvedic properties.',
      icon: Globe,
      category: 'Content',
      complexity: 'Basic',
      benefits: [
        'Region-specific food data',
        'Local ingredient focus',
        'Cultural food wisdom',
        'Seasonal availability info'
      ],
      techStack: ['Geographic Database', 'Content Management', 'Search & Filter', 'Localization'],
      userStories: [
        'As a user, I can find foods available in my region',
        'As a user, I can explore traditional foods',
        'As a user, I can understand local food properties'
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'symptom-tracker',
      title: 'Symptom & Mood Tracker',
      description: 'Track physical symptoms and emotional states to understand patterns and correlations with lifestyle.',
      icon: Heart,
      category: 'Analytics',
      complexity: 'Advanced',
      benefits: [
        'Comprehensive symptom logging',
        'Mood pattern analysis',
        'Correlation insights',
        'Early warning system'
      ],
      techStack: ['Data Analytics', 'Pattern Recognition', 'Health Monitoring', 'Correlation Analysis'],
      userStories: [
        'As a user, I can log symptoms and moods daily',
        'As a user, I can see patterns in my health data',
        'As a user, I can identify triggers and correlations'
      ],
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'seasonal-guidance',
      title: 'Seasonal Wellness Guidance',
      description: 'Dynamic recommendations that adapt to seasonal changes and their effects on different doshas.',
      icon: Leaf,
      category: 'Personalization',
      complexity: 'Basic',
      benefits: [
        'Season-aware recommendations',
        'Weather-based adjustments',
        'Preventive health tips',
        'Seasonal food suggestions'
      ],
      techStack: ['Weather API', 'Seasonal Algorithms', 'Location Services', 'Content Management'],
      userStories: [
        'As a user, I get guidance adapted to current season',
        'As a user, I understand how weather affects my dosha',
        'As a user, I can prepare for seasonal transitions'
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'meditation-yoga',
      title: 'Dosha-Specific Yoga & Meditation',
      description: 'Curated yoga sequences and meditation practices tailored to balance specific dosha imbalances.',
      icon: Brain,
      category: 'Wellness',
      complexity: 'Basic',
      benefits: [
        'Dosha-specific practices',
        'Guided meditation sessions',
        'Yoga sequence builder',
        'Progress tracking'
      ],
      techStack: ['Video Streaming', 'Audio Processing', 'Content Delivery', 'Progress Tracking'],
      userStories: [
        'As a user, I can access yoga for my dosha type',
        'As a user, I can follow guided meditation',
        'As a user, I can track my practice consistency'
      ],
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const categories = ['all', 'Core Features', 'Content', 'Healthcare', 'Analytics', 'Personalization', 'Innovation', 'Social', 'Automation', 'Wellness'];

  const filteredFeatures = selectedCategory === 'all' 
    ? features 
    : features.filter(feature => feature.category === selectedCategory);

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Basic': return 'bg-green-100 text-green-800';
      case 'Advanced': return 'bg-blue-100 text-blue-800';
      case 'Premium': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const stats = [
    { label: 'Total Features', value: features.length, icon: Target },
    { label: 'Core Features', value: features.filter(f => f.category === 'Core Features').length, icon: Zap },
    { label: 'Premium Features', value: features.filter(f => f.complexity === 'Premium').length, icon: Star },
    { label: 'Categories', value: categories.length - 1, icon: BookOpen }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Feature Breakdown
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive overview of all features in the AyuDiet platform, from core functionality to advanced AI-powered tools
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-4">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Category Filter */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Filter by Category</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? 'All Features' : category}
            </button>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFeatures.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={feature.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedFeature(feature)}
            >
              <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(feature.complexity)}`}>
                    {feature.complexity}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {feature.description}
                </p>

                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Category</span>
                    <p className="text-sm text-gray-900">{feature.category}</p>
                  </div>
                  
                  <div>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Key Benefits</span>
                    <div className="mt-1">
                      {feature.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                          <span>{benefit}</span>
                        </div>
                      ))}
                      {feature.benefits.length > 2 && (
                        <p className="text-xs text-gray-500 mt-1">
                          +{feature.benefits.length - 2} more benefits
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Timer className="w-4 h-4" />
                    <span>{feature.techStack.length} technologies</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Feature Detail Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className={`h-2 bg-gradient-to-r ${selectedFeature.color}`}></div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${selectedFeature.color} rounded-xl`}>
                    <selectedFeature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {selectedFeature.title}
                    </h2>
                    <div className="flex items-center space-x-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
                        {selectedFeature.category}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-sm font-medium ${getComplexityColor(selectedFeature.complexity)}`}>
                        {selectedFeature.complexity}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                >
                  ✕
                </button>
              </div>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {selectedFeature.description}
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                      <Target className="w-5 h-5 text-green-500" />
                      <span>Key Benefits</span>
                    </h3>
                    <ul className="space-y-2">
                      {selectedFeature.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                      <BookOpen className="w-5 h-5 text-blue-500" />
                      <span>User Stories</span>
                    </h3>
                    <ul className="space-y-2">
                      {selectedFeature.userStories.map((story, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></span>
                          <span className="text-gray-700 italic">"{story}"</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                      <Zap className="w-5 h-5 text-purple-500" />
                      <span>Tech Stack</span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedFeature.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-3">Implementation Priority</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Complexity Level:</span>
                        <span className="font-medium">{selectedFeature.complexity}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Development Effort:</span>
                        <span className="font-medium">
                          {selectedFeature.complexity === 'Basic' ? '2-4 weeks' :
                           selectedFeature.complexity === 'Advanced' ? '6-10 weeks' :
                           '12-16 weeks'}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Team Size:</span>
                        <span className="font-medium">
                          {selectedFeature.complexity === 'Basic' ? '2-3 developers' :
                           selectedFeature.complexity === 'Advanced' ? '3-5 developers' :
                           '5-8 developers'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Summary Section */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Platform Overview</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Core Philosophy</h3>
            <p className="text-blue-100">
              Bridging ancient Ayurvedic wisdom with modern technology to create a comprehensive wellness platform that adapts to individual constitutional needs.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">User Experience</h3>
            <p className="text-blue-100">
              Intuitive interface with personalized recommendations, real-time tracking, and community support to guide users on their wellness journey.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Technology Stack</h3>
            <p className="text-blue-100">
              Modern web technologies combined with AI/ML capabilities for personalization, analytics, and predictive health insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
