import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { QuestionCard } from "./QuestionCard";
import { Card } from "./ui/card";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";

const answeredQuestions = [
  {
    question: "Any preferences for Diwali gifts this year?",
    topic: "Gifts",
    upvotes: 156,
    status: "Answered" as const,
    timestamp: "12:42",
    date: "Sept 27",
    transcriptRef: "Q2-2024-transcript#12:42",
    answer: "Employees will have the option to choose between gourmet hampers, eco-friendly kits, or digital gift cards, with an option to donate the gift amount to a cause.",
  },
  {
    question: "Will the new benefits package include dental coverage for dependents?",
    topic: "Benefits",
    upvotes: 124,
    status: "Answered" as const,
    timestamp: "18:15",
    date: "Sept 27",
    transcriptRef: "Q2-2024-transcript#18:15",
    answer: "Yes, the updated benefits package effective January 2026 will include comprehensive dental coverage for all dependents.",
  },
  {
    question: "Are there plans to expand the cafeteria menu options?",
    topic: "Cafeteria",
    upvotes: 89,
    status: "Answered" as const,
    timestamp: "25:33",
    date: "Aug 15",
    transcriptRef: "Q3-2024-transcript#25:33",
    answer: "We're partnering with two new vendors starting next month to offer more diverse cuisine options including vegetarian and gluten-free meals.",
  },
];

const unansweredQuestions = [
  {
    question: "Will remote employees get a home office stipend increase?",
    topic: "Remote Work",
    upvotes: 203,
    status: "Reviewed" as const,
  },
  {
    question: "What are the criteria for promotion to senior level?",
    topic: "Career Growth",
    upvotes: 178,
    status: "Reviewed" as const,
  },
  {
    question: "Can we get standing desks in all office spaces?",
    topic: "Office",
    upvotes: 95,
    status: "Pending" as const,
  },
];

const newQuestions = [
  {
    question: "What is the company's stance on AI tool usage in our daily work?",
    topic: "Technology",
    upvotes: 67,
    status: "Pending" as const,
  },
  {
    question: "Will there be team building events in Q4?",
    topic: "Culture",
    upvotes: 54,
    status: "Pending" as const,
  },
  {
    question: "Are we planning to open a new office location?",
    topic: "Expansion",
    upvotes: 43,
    status: "Pending" as const,
  },
];

export function QuestionRepository() {
  const [userQuestions, setUserQuestions] = useState<Array<{ question: string; tags: string[] }>>([]);
  const [question, setQuestion] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleOpenModal = () => {
    setShowDialog(true);
    setQuestion("");
    setSelectedTags([]);
  };

  const handleSaveQuestion = () => {
    if (!question.trim()) return;
    setUserQuestions(prev => [...prev, { question, tags: selectedTags }]);
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
    <Card className="p-6">
      <div className="w-full max-w-4xl mx-auto mb-6" style={{margin: 0}}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6" style={{margin: 0, 'alignItems': 'center'}}>
          <h2 className="mb-6" style={{margin: 0}}>📚 Question Repository</h2>
          <div style={{display: "flex", alignItems: "center", justifyContent: "end"}}>
            <Button onClick={handleOpenModal} size="sm" className="px-8 bg-blue-600">
              <Plus className="w-5 h-5 mr-2" />
              Add a Question
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Add a New Question</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question..."
              className="w-full py-6 px-4 text-lg text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical min-h-[100px]"
              rows={4}
            />
            <div className="flex gap-2">
              <Button onClick={handleSaveQuestion} className="flex-1 bg-blue-600" disabled={!question.trim()}>
                <Plus className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Tabs defaultValue="answered" className="w-full mt-6">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="answered">
            🔍 Answered ({answeredQuestions.length})
          </TabsTrigger>
          <TabsTrigger value="unanswered">
            ❓ Unanswered ({unansweredQuestions.length})
          </TabsTrigger>
          <TabsTrigger value="new">
            🆕 New Questions ({newQuestions.length + userQuestions.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="answered" className="space-y-4">
          {answeredQuestions.map((q, index) => (
            <QuestionCard key={index} {...q} />
          ))}
        </TabsContent>

        <TabsContent value="unanswered" className="space-y-4">
          {unansweredQuestions.map((q, index) => (
            <QuestionCard key={index} {...q} />
          ))}
        </TabsContent>

        <TabsContent value="new" className="space-y-4">
          {newQuestions.map((q, index) => (
            <QuestionCard key={"new-" + index} {...q} />
          ))}
          {userQuestions.map((q, index) => (
            <QuestionCard
              key={"user-" + index}
              question={q.question}
              topic={q.tags[0] || "General"}
              upvotes={0}
              status="Pending"
            />
          ))}
        </TabsContent>
      </Tabs>
    </Card>
  );
}
