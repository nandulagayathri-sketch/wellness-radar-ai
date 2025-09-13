import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const moodOptions = [
  { value: 5, label: "Excellent", emoji: "😄", color: "mood-excellent" },
  { value: 4, label: "Good", emoji: "😊", color: "mood-good" },
  { value: 3, label: "Neutral", emoji: "😐", color: "mood-neutral" },
  { value: 2, label: "Low", emoji: "😔", color: "mood-low" },
  { value: 1, label: "Poor", emoji: "😢", color: "mood-poor" },
];

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [note, setNote] = useState("");
  const { toast } = useToast();

  const handleMoodSubmit = () => {
    if (selectedMood === null) return;
    
    // In a real app, this would save to the database
    toast({
      title: "Mood logged successfully!",
      description: `Thank you for sharing how you're feeling today.`,
    });
    
    // Reset form
    setSelectedMood(null);
    setNote("");
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-center">How are you feeling today?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-5 gap-3">
          {moodOptions.map((mood) => (
            <Button
              key={mood.value}
              variant="outline"
              className={`
                h-16 flex-col space-y-1 transition-all duration-300
                ${selectedMood === mood.value 
                  ? `bg-${mood.color} border-${mood.color} text-white shadow-md scale-105` 
                  : 'hover:scale-105'
                }
              `}
              onClick={() => setSelectedMood(mood.value)}
            >
              <span className="text-2xl">{mood.emoji}</span>
              <span className="text-xs">{mood.label}</span>
            </Button>
          ))}
        </div>
        
        <div className="space-y-3">
          <label className="text-sm font-medium text-muted-foreground">
            What's on your mind? (Optional)
          </label>
          <Textarea
            placeholder="Share your thoughts, feelings, or what happened today..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="min-h-[100px] resize-none"
          />
        </div>

        <Button 
          onClick={handleMoodSubmit}
          disabled={selectedMood === null}
          className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
        >
          Log Today's Mood
        </Button>
      </CardContent>
    </Card>
  );
}