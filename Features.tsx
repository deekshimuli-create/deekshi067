import FeatureBreakdown from '@/react-app/components/FeatureBreakdown';
import Navigation from '@/react-app/components/Navigation';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative" style={{backgroundImage: 'url(https://mocha-cdn.com/01997178-dfe4-7eb2-bf8a-1469c258d0ad/ayurvedic-background-pattern.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}}>
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      <div className="relative z-10">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <FeatureBreakdown />
      </div>
    </div>
    </div>
  );
}
