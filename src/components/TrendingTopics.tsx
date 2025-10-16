import { Card } from "./ui/card";

const topics = [
  { word: "AI", size: 40, color:"#3B82F6"},
  { word: "upskilling", size: 30, color: "#8B5CF6"  },
  { word: "Diwali", size: 22, color: "#EC4899" },
  { word: "gift", size: 26, color: "#F59E0B" },
  { word: "office", size: 32, color: "#10B981" },
  { word: "reimbursement", size: 18, color: "#06B6D4" },
  { word: "work-from-home", size: 22, color: "#6366F1" },
  { word: "leaves", size: 20, color: "#8B5CF6" },
  { word: "celebration", size: 19, color: "#EC4899" },
  { word: "collaboration", size: 21, color: "#F59E0B" },
  { word: "portal", size: 17, color: "#10B981" },
  { word: "hybrid", size: 22, color: "#655853" },
  { word: "remote", size: 10, color: "#3B82F6" },
  { word: "wellness", size: 9, color: "#131C1F" },
  { word: "strategy", size: 30, color: "#54BD3E" }
];

export function TrendingTopics() {
  return (
    <Card className="p-6">
      <h3 className="mb-4">Trending Topics</h3>
      <div className="flex flex-wrap gap-3 items-center justify-center min-h-[200px] p-4">
        {topics.map((topic, index) => (
          <span
            key={index}
            style={{
              fontSize: `${topic.size}px`,
              color: topic.color,
              fontWeight: topic.size > 24 ? '600' : '500',
            }}
            className="cursor-pointer hover:opacity-70 transition-opacity"
          >
            {topic.word}
          </span>
        ))}
      </div>
    </Card>
  );
}
