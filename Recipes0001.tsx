import RecipeGallery from '@/react-app/components/RecipeGallery';
import Navigation from '@/react-app/components/Navigation';

export default function RecipesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-teal-50 relative" style={{backgroundImage: 'url(https://mocha-cdn.com/01997178-dfe4-7eb2-bf8a-1469c258d0ad/ayurvedic-background-pattern.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}}>
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      <div className="relative z-10">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <RecipeGallery />
      </div>
    </div>
    </div>
  );
}
