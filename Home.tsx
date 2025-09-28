import { Link } from 'react-router';
import { 
  BarChart3, 
  Users, 
  FileText, 
  Utensils, 
  TrendingUp,
  Heart,
  Award,
  ArrowRight,
  Play,
  Check
} from 'lucide-react';
import Navigation from '@/react-app/components/Navigation';

export default function HomePage() {
  const features = [
    {
      icon: BarChart3,
      title: 'Dosha Balance Dashboard',
      description: 'Interactive Vata/Pitta/Kapha visualization with real-time analytics',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Utensils,
      title: '8,000+ Recipes',
      description: 'Curated Ayurvedic recipes with detailed nutritional properties',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: '1,000+ Doctors',
      description: 'Verified Ayurvedic practitioners for personalized consultations',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Weekly/monthly reports on energy, digestion, sleep, and wellness',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Free',
      price: '₹0',
      period: 'forever',
      features: [
        'Basic dosha assessment',
        'Limited recipe access',
        'Basic progress tracking',
        'Community access'
      ],
      popular: false,
      color: 'border-gray-200'
    },
    {
      name: 'Premium',
      price: '₹249',
      period: 'per month',
      features: [
        'Complete dosha dashboard',
        'Full recipe library access',
        'Personalized meal plans',
        'Nutrient heatmaps',
        'Advanced analytics',
        'Priority support'
      ],
      popular: true,
      color: 'border-blue-500 ring-2 ring-blue-500'
    },
    {
      name: 'Consultation',
      price: '₹650',
      period: 'per session',
      features: [
        'One-on-one doctor consultation',
        '30-minute video session',
        'Personalized treatment plan',
        'Follow-up recommendations',
        'Herbal prescriptions'
      ],
      popular: false,
      color: 'border-purple-200'
    }
  ];

  const stats = [
    { label: 'Recipes', value: '8,000+', icon: Utensils },
    { label: 'Doctors', value: '1,000+', icon: Users },
    { label: 'Happy Users', value: '50K+', icon: Heart },
    { label: 'Success Rate', value: '94%', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative" style={{backgroundImage: 'url(https://mocha-cdn.com/01997178-dfe4-7eb2-bf8a-1469c258d0ad/ayurvedic-background-pattern.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}}>
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      <div className="relative z-10">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              AyuDiet
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Your personalized Ayurvedic wellness companion with dosha balance tracking,
            8,000+ recipes, and 1,000+ verified doctors
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/dashboard"
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <BarChart3 className="w-5 h-5" />
              <span>View Dashboard</span>
            </Link>
            <Link
              to="/features"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Explore Features</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Ayurvedic Wellness Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience ancient wisdom through modern technology with our feature-rich platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore AyuDiet
          </h2>
          <p className="text-xl text-gray-600">
            Discover all features and capabilities of our comprehensive platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            to="/dashboard"
            className="bg-gradient-to-br from-blue-500 to-purple-500 text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <BarChart3 className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-2">Dosha Dashboard</h3>
            <p className="text-blue-100 mb-4">View your personalized dosha balance and wellness analytics</p>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>

          <Link
            to="/recipes"
            className="bg-gradient-to-br from-green-500 to-emerald-500 text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <Utensils className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-2">Recipe Gallery</h3>
            <p className="text-green-100 mb-4">Browse 8,000+ curated Ayurvedic recipes with properties</p>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>

          <Link
            to="/doctors"
            className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <Users className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-2">Doctor Directory</h3>
            <p className="text-purple-100 mb-4">Connect with 1,000+ verified Ayurvedic practitioners</p>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your wellness journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg ${plan.color} ${plan.popular ? 'transform scale-105' : ''} transition-all duration-300 hover:shadow-xl`}>
              {plan.popular && (
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-1">{plan.price}</div>
                <div className="text-gray-600">{plan.period}</div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg' 
                  : 'border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Start Your Ayurvedic Journey Today
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of users who have transformed their health with personalized Ayurvedic guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <BarChart3 className="w-5 h-5" />
              <span>Start Free Assessment</span>
            </Link>
            <Link
              to="/features"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <FileText className="w-5 h-5" />
              <span>View All Features</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AD</span>
              </div>
              <span className="text-2xl font-bold">AyuDiet</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Bridging ancient Ayurvedic wisdom with modern technology for optimal wellness
            </p>
            <div className="flex justify-center space-x-6 text-gray-400">
              <span>© 2024 AyuDiet. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
}
