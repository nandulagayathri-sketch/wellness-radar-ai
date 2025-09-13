import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Calendar, Target, Award } from "lucide-react";

const stats = [
  {
    title: "Check-in Streak",
    value: "7 days",
    progress: 70,
    icon: Calendar,
    color: "text-green-500",
  },
  {
    title: "Weekly Goal",
    value: "5/7 days",
    progress: 71,
    icon: Target,
    color: "text-blue-500",
  },
  {
    title: "Mood Improvement",
    value: "+15%",
    progress: 85,
    icon: TrendingUp,
    color: "text-purple-500",
  },
  {
    title: "Wellness Score",
    value: "8.2/10",
    progress: 82,
    icon: Award,
    color: "text-orange-500",
  },
];

export default function WellnessDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index} className="transition-all duration-300 hover:shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">{stat.value}</div>
            <Progress value={stat.progress} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              {stat.progress}% of target
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}