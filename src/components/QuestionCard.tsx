import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowUp, ExternalLink, Clock } from "lucide-react";
import { useState } from "react";

interface QuestionCardProps {
  question: string;
  topic: string;
  upvotes: number;
  status: "Pending" | "Reviewed" | "Answered";
  timestamp?: string;
  date?: string;
  transcriptRef?: string;
  answer?: string;
}

export function QuestionCard({
  question,
  topic,
  upvotes: initialUpvotes,
  status,
  timestamp,
  date,
  transcriptRef,
  answer,
}: QuestionCardProps) {
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [hasUpvoted, setHasUpvoted] = useState(false);

  const handleUpvote = () => {
    if (!hasUpvoted) {
      setUpvotes(upvotes + 1);
      setHasUpvoted(true);
    } else {
      setUpvotes(upvotes - 1);
      setHasUpvoted(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Answered":
        return "bg-green-100 text-green-800";
      case "Reviewed":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="p-5 hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        <div className="flex flex-col items-center gap-1">
          <Button
            variant={hasUpvoted ? "default" : "outline"}
            size="sm"
            className="w-10 h-10 p-0"
            onClick={handleUpvote}
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
          <span className="text-sm">{upvotes}</span>
        </div>

        <div className="flex-1">
          <div className="flex items-start gap-2 mb-2">
            <Badge variant="outline">{topic}</Badge>
            <Badge className={getStatusColor(status)}>{status}</Badge>
          </div>

          <p className="mb-3">{question}</p>

          {answer && (
            <div className="bg-blue-50 p-3 rounded-lg mb-3">
              <p className="text-sm text-gray-700">{answer}</p>
            </div>
          )}

          <div className="flex items-center gap-3 text-sm text-gray-600">
            {date && timestamp && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{date} at {timestamp}</span>
              </div>
            )}
            {transcriptRef && (
              <Button variant="link" className="h-auto p-0 text-sm cursor-pointer">
                View recording
                <ExternalLink className="w-3 h-3 ml-1" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
