import { StatsCard } from "./components/StatsCard";
import { ChatBot } from "./components/ChatBot";
import { TrendingTopics } from "./components/TrendingTopics";
import { SentimentHeatmap } from "./components/SentimentHeatmap";
import { TownhallSummary } from "./components/TownhallSummary";
import { TownhallArchive } from "./components/TownhallArchive";

import { useState } from "react";
import { QuestionRepository } from "./components/QuestionRepository";
import { MessageSquare, CheckCircle, AlertCircle, Calendar, Info } from "lucide-react";
import { StickyChatbotModal } from "./components/StickyChatBotModal";
import { CreateNewQuestion } from "./components/CreateNewQuestion";
import { AttendanceAndRatingTrendChart } from "./components/AttendanceAndRatingTrendChart";
import { MdOutlineGeneratingTokens } from "react-icons/md";

export default function App() {
  const [userQuestions, setUserQuestions] = useState<Array<{ question: string; tags: string[] }>>([]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <MdOutlineGeneratingTokens className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 style={{fontSize: '20px'}}>Townhall Intel</h1>
                <p className="text-sm text-gray-600" style={{fontSize: '12px'}}>Ask, Search, Know - Your Townhall, On Demand</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Top Section - Dashboard Overview */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total Questions"
              value="342"
              icon={MessageSquare}
            />
            <StatsCard
              title="Answered"
              value="267"
              icon={CheckCircle}
            />
            <StatsCard
              title="Unanswered"
              value="75"
              icon={AlertCircle}
            />
            <StatsCard
              title="Last Meeting"
              value="Oct 14, 2025"
              icon={Calendar}
            />
          </div>

          {/* Townhall Summary & Archive */}
          <h2 className="mb-6" style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <span className="text-gray-600">📊 AI Insights</span>
            <div style={{display: "flex", justifyContent: "center"}}>
              <input
                type="date"
                id="header-date"
                className="border border-gray-300 rounded px-2 py-1 text-sm bg-white focus:outline-none"
                defaultValue="2025-10-14"
              />
              <div className="relative group ml-2 flex items-center" style={{display: "inline-flex", margin: "10px"}} title="Select a date to filter dashboard data.">
                <Info className="w-4 h-4 text-gray-500" />
              </div>
            </div>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <TownhallSummary />
            </div>
            <div className="grid grid-cols-1 gap-6">
              <TrendingTopics />
              <SentimentHeatmap />
            </div>
              {/* <TownhallArchive /> */}
          </div>
        </section>

        {/* Middle Section - AI Insights */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-6">
            <AttendanceAndRatingTrendChart />
          </div>
        </section>

        {/* Bottom Section - Question Repository */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <QuestionRepository />
            </div>
            <div className="grid grid-cols-1 gap-6" style={{height: "350px"}}>
              <TownhallArchive />
            </div>
          </div>

        </section>
      </main>
      <StickyChatbotModal />
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-600">
          <p>Powered by AI • Last updated: Oct 14, 2025</p>
        </div>
      </footer>
    </div>
  );
}
