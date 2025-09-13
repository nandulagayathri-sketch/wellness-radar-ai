import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Mock data - in a real app, this would come from the database
const moodData = [
  { date: "Mon", mood: 4, label: "Good" },
  { date: "Tue", mood: 3, label: "Neutral" },
  { date: "Wed", mood: 5, label: "Excellent" },
  { date: "Thu", mood: 3, label: "Neutral" },
  { date: "Fri", mood: 4, label: "Good" },
  { date: "Sat", mood: 5, label: "Excellent" },
  { date: "Sun", mood: 4, label: "Good" },
];

const getMoodColor = (mood: number) => {
  switch (mood) {
    case 5: return "#4ade80"; // mood-excellent
    case 4: return "#84cc16"; // mood-good
    case 3: return "#eab308"; // mood-neutral
    case 2: return "#f97316"; // mood-low
    case 1: return "#ef4444"; // mood-poor
    default: return "#6b7280";
  }
};

export default function MoodChart() {
  const averageMood = moodData.reduce((sum, day) => sum + day.mood, 0) / moodData.length;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Mood Trends</span>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">{averageMood.toFixed(1)}</div>
            <div className="text-xs text-muted-foreground">7-day average</div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={moodData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="date" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              domain={[1, 5]} 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Tooltip 
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                      <p className="font-medium">{label}</p>
                      <p className="text-sm" style={{ color: getMoodColor(data.mood) }}>
                        Mood: {data.label} ({data.mood}/5)
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Line 
              type="monotone" 
              dataKey="mood" 
              stroke="hsl(var(--primary))"
              strokeWidth={3}
              dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: "hsl(var(--primary))", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}