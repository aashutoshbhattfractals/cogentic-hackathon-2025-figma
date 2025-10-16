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

interface CreateNewQuestionProps {
  onSave: (q: { question: string; tags: string[] }) => void;
}

export function CreateNewQuestion({ onSave }: CreateNewQuestionProps) {
  const [question, setQuestion] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const availableTags = ["IPO", "Benefits", "Cafeteria", "Remote Work", "Compensation", "Culture"];

  const handleOpenModal = () => {
    setShowDialog(true);
    setQuestion("");
    setSelectedTags([]);
  };

  const handleSaveQuestion = () => {
    if (!question.trim()) return;
    onSave({ question, tags: selectedTags });
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
      <div className="w-full max-w-4xl mx-auto custom-add-question-container" style={{margin: 0}}>
        <Button onClick={handleOpenModal} size="sm" className="px-8 bg-blue-600">
          <Plus className="w-5 h-5 mr-2" />
          Add a Question
        </Button>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Add a New Question</DialogTitle>
            {/* <DialogDescription>
              Enter your question and select relevant tags. Click "Save" to add it to the list for the next townhall.
            </DialogDescription> */}
          </DialogHeader>
          <div className="space-y-4">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question..."
              className="w-full py-6 px-4 text-lg text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical min-h-[100px]"
              rows={4}
            />
            <div>
              <p className="text-sm mb-2">Select relevant tags:</p>
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
            <div className="flex gap-2">
              <Button onClick={handleSaveQuestion} className="flex-1" disabled={!question.trim()}>
                <Plus className="w-4 h-4 mr-2" />
                Save
              </Button>
              {/* <Button variant="outline" onClick={() => setShowDialog(false)}>
                Cancel
              </Button> */}
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {/* Optionally display saved questions below */}
      {/* <div className="max-w-4xl mx-auto mt-6">
        <h3 className="mb-4 text-lg font-medium">Saved Questions</h3>
        <ul>
          {savedQuestions.map((q, idx) => (
            <li key={idx} className="mb-2">
              <span className="font-semibold">{q.question}</span>
              <span className="ml-2 text-xs text-gray-500">[{q.tags.join(", ")}]</span>
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
}
