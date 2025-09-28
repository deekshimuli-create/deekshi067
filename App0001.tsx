import { BrowserRouter as Router, Routes, Route } from "react-router";
import { AuthProvider } from "@getmocha/users-service/react";
import HomePage from "@/react-app/pages/Home";
import DashboardPage from "@/react-app/pages/Dashboard";
import FeaturesPage from "@/react-app/pages/Features";
import FlowchartPage from "@/react-app/pages/Flowchart";
import RecipesPage from "@/react-app/pages/Recipes";
import DoctorsPage from "@/react-app/pages/Doctors";
import AuthCallbackPage from "@/react-app/pages/AuthCallback";
import FoodItemsPage from "@/react-app/pages/FoodItems";
import FacePacksPage from "@/react-app/pages/FacePacks";
import BAMSStudyPage from "@/react-app/pages/BAMSStudy";
import HerbalSeedsPage from "@/react-app/pages/HerbalSeeds";
import YogaAsanasPage from "@/react-app/pages/YogaAsanas";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/flowchart" element={<FlowchartPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/food-items" element={<FoodItemsPage />} />
          <Route path="/face-packs" element={<FacePacksPage />} />
          <Route path="/bams-study" element={<BAMSStudyPage />} />
          <Route path="/herbal-seeds" element={<HerbalSeedsPage />} />
          <Route path="/yoga-asanas" element={<YogaAsanasPage />} />
          <Route path="/auth/callback" element={<AuthCallbackPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
