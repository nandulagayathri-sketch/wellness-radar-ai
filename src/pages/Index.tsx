import WellnessDashboard from "@/components/WellnessDashboard";
import MoodTracker from "@/components/MoodTracker";
import MoodChart from "@/components/MoodChart";
import WellnessRecommendations from "@/components/WellnessRecommendations";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Heart, TrendingUp } from "lucide-react";
import heroImage from "@/assets/wellness-hero.jpg";

const Index = () => {
  const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-calm">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative bg-gradient-wellness/90">
          <div className="container mx-auto px-4 py-16 text-center text-white">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Sparkles className="w-3 h-3 mr-1" />
              Mental Wellness Tracker
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Journey to <span className="text-yellow-300">Wellness</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Track your mood, discover insights, and build healthy habits with personalized recommendations tailored just for you.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-300" />
                <span>Mood Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-300" />
                <span>Progress Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-300" />
                <span>AI Insights</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Date Header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">Welcome back!</h2>
          <p className="text-muted-foreground">{getCurrentDate()}</p>
        </div>

        {/* Dashboard Stats */}
        <WellnessDashboard />

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-8">
            <MoodTracker />
            <MoodChart />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <WellnessRecommendations />
            
            {/* Quick Actions */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Button 
                variant="outline" 
                className="h-16 flex-col space-y-2 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:from-blue-100 hover:to-indigo-100"
              >
                <Heart className="w-5 h-5 text-blue-500" />
                <span className="text-sm">View Journal</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-16 flex-col space-y-2 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:from-green-100 hover:to-emerald-100"
              >
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span className="text-sm">Progress Report</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Note about data storage */}
        <div className="text-center p-6 bg-muted/50 rounded-lg border-2 border-dashed border-border">
          <p className="text-sm text-muted-foreground mb-2">
            <strong>Ready to save your progress?</strong>
          </p>
          <p className="text-xs text-muted-foreground">
            Connect to Supabase to store your mood data, track long-term trends, and get personalized AI-powered insights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;