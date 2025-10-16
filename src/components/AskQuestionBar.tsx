import { useState } from "react";
import { Search, Send, Plus } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Badge } from "./ui/badge";

interface SearchResult {
  found: boolean;
  summary?: string;
  timestamp?: string;
  date?: string;
  reference?: string;
}

export function AskQuestionBar() {
  const [question, setQuestion] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const availableTags = ["IPO", "Benefits", "Cafeteria", "Remote Work", "Compensation", "Culture"];

  const handleAsk = () => {
    if (!question.trim()) return;
    
    // Simulate AI search
    const mockResults: SearchResult[] = [
      {
        found: true,
        summary: "The CEO mentioned that the IPO timeline is planned for Q2 2026, pending market conditions. The company is currently working with underwriters and preparing necessary documentation.",
        timestamp: "12:42",
        date: "Sept 27, 2024",
        reference: "Q2 2024 All-Hands Meeting"
      },
      {
        found: false
      }
    ];

    // Random result for demo
    const result = question.toLowerCase().includes("ipo") ? mockResults[0] : mockResults[1];
    setSearchResult(result);
    setShowDialog(true);
  };

  const handleAddQuestion = () => {
    // In a real app, this would submit to backend
    console.log("Adding question:", question, "with tags:", selectedTags);
    setShowDialog(false);
    setQuestion("");
    setSelectedTags([]);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <>
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
              placeholder="Ask about anything from recent townhalls..."
              className="pl-12 pr-4 py-6 text-lg text-gray-900"
            />
          </div>
          <Button onClick={handleAsk} size="lg" className="px-8">
            <Send className="w-5 h-5 mr-2" />
            Ask
          </Button>
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {searchResult?.found ? "Answer Found! 🎉" : "Question Not Found"}
            </DialogTitle>
            <DialogDescription>
              {searchResult?.found 
                ? `Addressed in ${searchResult.reference}`
                : "This topic hasn't been covered yet in recent townhalls."
              }
            </DialogDescription>
          </DialogHeader>

          {searchResult?.found ? (
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{searchResult.date}</Badge>
                  <Badge variant="outline">@ {searchResult.timestamp}</Badge>
                </div>
                <p className="text-gray-700">{searchResult.summary}</p>
              </div>
              <Button variant="outline" className="w-full">
                View in Transcript →
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <p className="mb-3">Would you like to add this to the list for the next townhall?</p>
                <p className="text-sm text-gray-600 mb-3">Your question: <span className="italic">"{question}"</span></p>
                
                <div className="space-y-2">
                  <p className="text-sm">Select relevant tags:</p>
                  <div className="flex flex-wrap gap-2">
                    {availableTags.map(tag => (
                      <Badge
                        key={tag}
                        variant={selectedTags.includes(tag) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => toggleTag(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button onClick={handleAddQuestion} className="flex-1">
                  <Plus className="w-4 h-4 mr-2" />
                  Add to List
                </Button>
                <Button variant="outline" onClick={() => setShowDialog(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
