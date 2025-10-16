import { Card } from "./ui/card";

// const sentimentData = [
//   { topic: "IPO Timeline", sentiment: 0.8 },
//   { topic: "Benefits Package", sentiment: 0.6 },
//   { topic: "Remote Policy", sentiment: 0.4 },
//   { topic: "Compensation", sentiment: 0.7 },
//   { topic: "Team Culture", sentiment: 0.9 },
//   { topic: "Cafeteria Food", sentiment: 0.5 },
//   { topic: "Career Growth", sentiment: 0.65 },
//   { topic: "Work-Life Balance", sentiment: 0.55 },
// ];

const sentimentData = [
  {
    "topic": "AI",
    "sentiment": 0.8
  },
  {
    "topic": "upskilling",
    "sentiment": 0.7
  },
  {
    "topic": "Diwali",
    "sentiment": 0.9
  },
  {
    "topic": "gift",
    "sentiment": 0.4
  },
  {
    "topic": "office",
    "sentiment": 0.7
  },
  {
    "topic": "reimbursement",
    "sentiment": 0.5
  },
  {
    "topic": "work-from-home",
    "sentiment": 0.8
  },
  {
    "topic": "leaves",
    "sentiment": 0.8
  },
  {
    "topic": "celebration",
    "sentiment": 0.9
  },
  {
    "topic": "collaboration",
    "sentiment": 0.8
  },
  {
    "topic": "portal",
    "sentiment": 0.2
  },
  // {
  //   "topic": "hybrid",
  //   "sentiment": 0.8
  // },
  // {
  //   "topic": "remote",
  //   "sentiment": 0.8
  // },
  // {
  //   "topic": "wellness",
  //   "sentiment": 0.9
  // },
  // {
  //   "topic": "strategy",
  //   "sentiment": 0.7
  // }
]



function getSentimentColor(sentiment: number) {
  if (sentiment >= 0.7) return "bg-green-500";
  if (sentiment >= 0.5) return "bg-yellow-500";
  return "bg-red-500";
}

function getSentimentLabel(sentiment: number) {
  if (sentiment >= 0.7) return "Positive";
  if (sentiment >= 0.5) return "Neutral";
  return "Negative";
}

export function SentimentHeatmap() {
  return (
    <Card className="p-6">
      <h3 className="mb-4">Sentiment Overview</h3>
      <div className="space-y-3">
        {sentimentData.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-sm truncate">{item.topic}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${getSentimentColor(item.sentiment)}`}
                  style={{ width: `${item.sentiment * 100}%` }}
                />
              </div>
              <span className="text-xs w-16 text-right text-gray-600">
                {getSentimentLabel(item.sentiment)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
