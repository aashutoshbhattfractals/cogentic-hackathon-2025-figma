import { useState, useRef, useEffect } from "react";
import { Send, Bot, User } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp?: string;
  date?: string;
  reference?: string;
  tags?: string[];
}

export function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hi! I'm your Townhall AI assistant. Ask me anything about recent townhalls, or submit a new question for upcoming meetings. Try asking about our IPO timeline, benefits, or remote work policy!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI processing
    setTimeout(() => {
      const aiResponse = generateResponse(input);
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const generateResponse = (query: string): Message => {
    const lowerQuery = query.toLowerCase();

    // Check for IPO-related queries
    if (lowerQuery.includes("ipo")) {
      return {
        id: Date.now().toString(),
        role: "assistant",
        content:
          "I found information about the IPO in our transcript archive!\n\nThe CEO mentioned that the IPO timeline is planned for Q2 2026, pending market conditions. The company is currently working with underwriters and preparing necessary documentation.",
        timestamp: "12:42",
        date: "Sept 27, 2024",
        reference: "Q2 2024 All-Hands Meeting",
      };
    }

    // Check for benefits-related queries
    if (lowerQuery.includes("benefit")) {
      return {
        id: Date.now().toString(),
        role: "assistant",
        content:
          "Great question! Here's what was discussed about benefits:\n\nThe new benefits package effective January 2026 will include comprehensive dental coverage for all dependents, expanded mental health coverage, and additional PTO days.",
        timestamp: "18:15",
        date: "Sept 27, 2024",
        reference: "Q2 2024 All-Hands Meeting",
      };
    }

    // Check for remote work queries
    if (lowerQuery.includes("remote") || lowerQuery.includes("hybrid")) {
      return {
        id: Date.now().toString(),
        role: "assistant",
        content:
          "I found this in our recent townhall:\n\nThe hybrid work policy will be evaluated quarterly based on team feedback and productivity metrics. The current policy allows 3 days remote per week and remains in effect.",
        timestamp: "25:33",
        date: "Aug 15, 2024",
        reference: "Q3 2024 Townhall",
      };
    }

    // Default response for questions not in transcript
    return {
      id: Date.now().toString(),
      role: "assistant",
      content:
        "I couldn't find this specific topic in our recent townhall transcripts. Would you like me to add this question to the list for the next townhall? I can tag it appropriately so leadership sees it.",
      tags: ["New Question"],
    };
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-white">Townhall AI Assistant</h3>
            <p className="text-sm text-blue-100">Ask me anything or submit questions</p>
          </div>
        </div>
      </div>

      <ScrollArea className="h-[400px] p-6" ref={scrollRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {message.role === "assistant" && (
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-blue-600" />
                </div>
              )}
              
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                <p className="whitespace-pre-line">{message.content}</p>
                
                {message.reference && (
                  <div className="mt-3 pt-3 border-t border-gray-300 space-y-2">
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {message.date}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        @ {message.timestamp}
                      </Badge>
                    </div>
                    <Button
                      variant="link"
                      className="h-auto p-0 text-sm text-blue-600"
                    >
                      View in {message.reference} →
                    </Button>
                  </div>
                )}

                {message.tags && (
                  <div className="mt-3 flex gap-2">
                    {message.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {message.role === "user" && (
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-gray-600" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5 text-blue-600" />
              </div>
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="border-t p-4 bg-gray-50">
        <div className="flex gap-3">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask about townhalls or submit a question..."
            className="flex-1 text-gray-900"
          />
          <Button onClick={handleSend} size="lg" disabled={!input.trim()}>
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
