import { ArrowRight, ArrowDown } from 'lucide-react';

interface FlowNode {
  id: string;
  label: string;
  type: 'start' | 'process' | 'decision' | 'feature' | 'end';
  color: string;
  connections: string[];
}

const flowNodes: FlowNode[] = [
  {
    id: 'start',
    label: 'User Opens AyurVida App',
    type: 'start',
    color: 'bg-green-500',
    connections: ['onboarding']
  },
  {
    id: 'onboarding',
    label: 'Initial Dosha Assessment Quiz',
    type: 'process',
    color: 'bg-blue-500',
    connections: ['dashboard']
  },
  {
    id: 'dashboard',
    label: 'Dosha Balance Dashboard',
    type: 'feature',
    color: 'bg-purple-500',
    connections: ['tracking', 'personalization', 'community']
  },
  {
    id: 'tracking',
    label: 'Tracking & Analytics',
    type: 'feature',
    color: 'bg-blue-600',
    connections: ['progress-reports', 'heatmaps']
  },
  {
    id: 'progress-reports',
    label: 'Weekly/Monthly Reports',
    type: 'process',
    color: 'bg-blue-400',
    connections: ['insights']
  },
  {
    id: 'heatmaps',
    label: 'Nutrient Heatmaps',
    type: 'process',
    color: 'bg-blue-400',
    connections: ['insights']
  },
  {
    id: 'personalization',
    label: 'Personalized Recommendations',
    type: 'feature',
    color: 'bg-green-600',
    connections: ['meal-plans', 'recipe-analyzer', 'regional-food']
  },
  {
    id: 'meal-plans',
    label: 'Custom Meal Plans',
    type: 'process',
    color: 'bg-green-400',
    connections: ['notifications']
  },
  {
    id: 'recipe-analyzer',
    label: 'Recipe Analyzer',
    type: 'process',
    color: 'bg-green-400',
    connections: ['qr-scanner']
  },
  {
    id: 'regional-food',
    label: 'Regional Food Suggestions',
    type: 'process',
    color: 'bg-green-400',
    connections: ['seasonal-recommendations']
  },
  {
    id: 'community',
    label: 'Community & Engagement',
    type: 'feature',
    color: 'bg-pink-600',
    connections: ['groups', 'gamification']
  },
  {
    id: 'groups',
    label: 'Community Groups',
    type: 'process',
    color: 'bg-pink-400',
    connections: ['motivation']
  },
  {
    id: 'gamification',
    label: 'Points & Badges',
    type: 'process',
    color: 'bg-pink-400',
    connections: ['motivation']
  },
  {
    id: 'notifications',
    label: 'Smart Notifications',
    type: 'process',
    color: 'bg-orange-500',
    connections: ['insights']
  },
  {
    id: 'qr-scanner',
    label: 'QR Code Scanner',
    type: 'process',
    color: 'bg-red-500',
    connections: ['food-properties']
  },
  {
    id: 'food-properties',
    label: 'Ayurvedic Food Properties',
    type: 'process',
    color: 'bg-red-400',
    connections: ['insights']
  },
  {
    id: 'seasonal-recommendations',
    label: 'Seasonal Suggestions',
    type: 'process',
    color: 'bg-teal-500',
    connections: ['insights']
  },
  {
    id: 'motivation',
    label: 'User Motivation & Retention',
    type: 'process',
    color: 'bg-yellow-500',
    connections: ['subscription']
  },
  {
    id: 'insights',
    label: 'Personalized Insights',
    type: 'process',
    color: 'bg-indigo-500',
    connections: ['subscription']
  },
  {
    id: 'subscription',
    label: 'Freemium → Premium',
    type: 'decision',
    color: 'bg-amber-500',
    connections: ['premium-features', 'consultation']
  },
  {
    id: 'premium-features',
    label: 'Premium Features',
    type: 'feature',
    color: 'bg-amber-600',
    connections: ['end']
  },
  {
    id: 'consultation',
    label: 'Doctor Consultation',
    type: 'feature',
    color: 'bg-amber-600',
    connections: ['end']
  },
  {
    id: 'end',
    label: 'Enhanced Wellness Journey',
    type: 'end',
    color: 'bg-emerald-500',
    connections: []
  }
];

export default function FlowchartVisualization() {
  

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          App Feature Flow
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Visual representation of how features connect and interact in the AyurVida ecosystem
        </p>
      </div>

      {/* Flowchart Legend */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4">Legend</h3>
        <div className="grid md:grid-cols-5 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span>Start/End Points</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-600 rounded"></div>
            <span>Core Features</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-500 rounded"></div>
            <span>Processes</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-amber-500 rounded transform rotate-45"></div>
            <span>Decision Points</span>
          </div>
          <div className="flex items-center space-x-2">
            <ArrowRight className="w-4 h-4 text-gray-400" />
            <span>Flow Direction</span>
          </div>
        </div>
      </div>

      {/* Interactive Flowchart */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 overflow-x-auto">
        <div className="relative" style={{ minWidth: '1200px', minHeight: '800px' }}>
          {/* Level 1: Start */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center">
              <div className={`${flowNodes[0].color} text-white p-4 rounded-full shadow-lg`}>
                <div className="text-center font-medium">User Opens App</div>
              </div>
              <ArrowDown className="w-6 h-6 text-gray-400 mt-2" />
            </div>
          </div>

          {/* Level 2: Onboarding */}
          <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center">
              <div className={`${flowNodes[1].color} text-white p-4 rounded-lg shadow-lg`}>
                <div className="text-center font-medium">Dosha Assessment</div>
              </div>
              <ArrowDown className="w-6 h-6 text-gray-400 mt-2" />
            </div>
          </div>

          {/* Level 3: Dashboard Hub */}
          <div className="absolute top-60 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center">
              <div className="bg-purple-500 text-white p-6 rounded-lg shadow-xl border-4 border-purple-300">
                <div className="text-center font-bold text-lg">Dosha Balance Dashboard</div>
                <div className="text-center text-sm mt-1">Central Hub</div>
              </div>
            </div>
          </div>

          {/* Level 4: Main Feature Branches */}
          <div className="absolute top-80 w-full">
            <div className="flex justify-around">
              {/* Tracking Branch */}
              <div className="flex flex-col items-center">
                <div className="bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                  <div className="text-center font-medium">Tracking &<br/>Analytics</div>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="bg-blue-400 text-white p-2 rounded text-sm">Progress Reports</div>
                  <div className="bg-blue-400 text-white p-2 rounded text-sm">Nutrient Heatmaps</div>
                </div>
              </div>

              {/* Personalization Branch */}
              <div className="flex flex-col items-center">
                <div className="bg-green-600 text-white p-4 rounded-lg shadow-lg">
                  <div className="text-center font-medium">Personalized<br/>Recommendations</div>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="bg-green-400 text-white p-2 rounded text-sm">Custom Meal Plans</div>
                  <div className="bg-green-400 text-white p-2 rounded text-sm">Recipe Analyzer</div>
                  <div className="bg-green-400 text-white p-2 rounded text-sm">Regional Foods</div>
                </div>
              </div>

              {/* Community Branch */}
              <div className="flex flex-col items-center">
                <div className="bg-pink-600 text-white p-4 rounded-lg shadow-lg">
                  <div className="text-center font-medium">Community &<br/>Engagement</div>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="bg-pink-400 text-white p-2 rounded text-sm">Community Groups</div>
                  <div className="bg-pink-400 text-white p-2 rounded text-sm">Points & Badges</div>
                </div>
              </div>
            </div>
          </div>

          {/* Level 5: Supporting Features */}
          <div className="absolute top-[520px] w-full">
            <div className="flex justify-around">
              <div className="bg-orange-500 text-white p-3 rounded-lg shadow-lg">
                <div className="text-center font-medium text-sm">Smart Notifications</div>
              </div>
              <div className="bg-red-500 text-white p-3 rounded-lg shadow-lg">
                <div className="text-center font-medium text-sm">QR Scanner</div>
              </div>
              <div className="bg-teal-500 text-white p-3 rounded-lg shadow-lg">
                <div className="text-center font-medium text-sm">Seasonal Suggestions</div>
              </div>
            </div>
          </div>

          {/* Level 6: Insights Convergence */}
          <div className="absolute top-[600px] left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center">
              <ArrowDown className="w-6 h-6 text-gray-400 mb-2" />
              <div className="bg-indigo-500 text-white p-4 rounded-lg shadow-lg">
                <div className="text-center font-medium">Personalized Insights</div>
              </div>
              <ArrowDown className="w-6 h-6 text-gray-400 mt-2" />
            </div>
          </div>

          {/* Level 7: Monetization */}
          <div className="absolute top-[720px] left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center">
              <div className="bg-amber-500 text-white p-4 rounded-lg shadow-lg transform rotate-45">
                <div className="text-center font-medium transform -rotate-45">Upgrade Decision</div>
              </div>
              <div className="flex space-x-8 mt-8">
                <div className="bg-amber-600 text-white p-3 rounded-lg shadow-lg">
                  <div className="text-center font-medium text-sm">Premium Features</div>
                </div>
                <div className="bg-amber-600 text-white p-3 rounded-lg shadow-lg">
                  <div className="text-center font-medium text-sm">Doctor Consultation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#9CA3AF" />
              </marker>
            </defs>
            
            {/* Example connection lines - in a real implementation, these would be calculated dynamically */}
            <line x1="50%" y1="120" x2="50%" y2="150" stroke="#9CA3AF" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <line x1="50%" y1="250" x2="50%" y2="280" stroke="#9CA3AF" strokeWidth="2" markerEnd="url(#arrowhead)" />
            
            {/* Branch connections */}
            <line x1="50%" y1="320" x2="20%" y2="360" stroke="#9CA3AF" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <line x1="50%" y1="320" x2="50%" y2="360" stroke="#9CA3AF" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <line x1="50%" y1="320" x2="80%" y2="360" stroke="#9CA3AF" strokeWidth="2" markerEnd="url(#arrowhead)" />
          </svg>
        </div>
      </div>

      {/* Feature Connectivity Matrix */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
        <h3 className="text-2xl font-semibold mb-4">Feature Connectivity Summary</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h4 className="font-semibold text-lg text-blue-600">Data Flow</h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• User Assessment → Dosha Profile</li>
              <li>• Daily Tracking → Progress Analytics</li>
              <li>• Food Choices → Nutrient Heatmaps</li>
              <li>• Symptoms → Wellness Reports</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-lg text-green-600">Personalization Engine</h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Dosha + Age → Meal Recommendations</li>
              <li>• Location + Season → Local Foods</li>
              <li>• Progress + Goals → Exercise Plans</li>
              <li>• Symptoms + History → Herbal Suggestions</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-lg text-purple-600">Engagement Loop</h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Progress → Achievements → Motivation</li>
              <li>• Community → Challenges → Retention</li>
              <li>• Insights → Value → Subscription</li>
              <li>• Success → Referrals → Growth</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
