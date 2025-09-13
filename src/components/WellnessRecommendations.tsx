import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Brain, Sunrise, Moon } from "lucide-react";

const recommendations = [
  {
    id: 1,
    title: "Morning Meditation",
    description: "Start your day with a 10-minute mindfulness session",
    category: "mindfulness",
    icon: Sunrise,
    duration: "10 min",
    color: "bg-gradient-to-br from-orange-400 to-pink-400",
  },
  {
    id: 2,
    title: "Gratitude Journaling",
    description: "Write down three things you're grateful for today",
    category: "reflection",
    icon: Heart,
    duration: "5 min",
    color: "bg-gradient-to-br from-green-400 to-blue-400",
  },
  {
    id: 3,
    title: "Breathing Exercise",
    description: "Practice the 4-7-8 breathing technique for relaxation",
    category: "breathing",
    icon: Brain,
    duration: "8 min",
    color: "bg-gradient-to-br from-purple-400 to-indigo-400",
  },
  {
    id: 4,
    title: "Evening Reflection",
    description: "Reflect on your day and set intentions for tomorrow",
    category: "reflection",
    icon: Moon,
    duration: "15 min",
    color: "bg-gradient-to-br from-indigo-400 to-purple-400",
  },
];

export default function WellnessRecommendations() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Personalized Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {recommendations.map((rec) => (
            <div key={rec.id} className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-wellness cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${rec.color} text-white`}>
                      <rec.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-sm truncate">{rec.title}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {rec.duration}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                        {rec.description}
                      </p>
                      <Button 
                        size="sm" 
                        className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
                      >
                        Start Activity
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}