import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Calendar, ExternalLink } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

interface TownhallRecord {
  date: string;
  title: string;
  summary: string;
  duration: string;
}

const townhallRecords: TownhallRecord[] = [
  {
    date: "Oct 10, 2025",
    title: "General Townhall Discussion",
    summary: "Leadership shared updates and addressed employee questions. Various topics relevant to the organization were discussed.",
    duration: "45 min",
  },
  {
    date: "Sept 27, 2024",
    title: "Employee Wellbeing & Announcements",
    summary: "The session focused on wellbeing initiatives and general company announcements. Employees were encouraged to share feedback.",
    duration: "38 min",
  },
  {
    date: "Aug 15, 2024",
    title: "Workplace Policies Review",
    summary: "A review of workplace policies and practices was conducted. Suggestions for improvements were welcomed from all attendees.",
    duration: "42 min",
  },
  {
    date: "Jul 22, 2024",
    title: "Company Updates & Open Forum",
    summary: "General updates were provided and an open forum allowed employees to raise questions and concerns.",
    duration: "51 min",
  },
  {
    date: "Jun 12, 2024",
    title: "Culture & Collaboration",
    summary: "The meeting highlighted the importance of company culture and collaboration. Teamwork and communication were emphasized.",
    duration: "33 min",
  },
];

export function TownhallArchive() {
  return (
    <Card className="p-6">
      <h3 className="mb-4">Townhall Archive</h3>
      <ScrollArea className="h-[320px] pr-4">
        <div className="space-y-3">
          {townhallRecords.map((record, index) => (
            <Card key={index} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">{record.date}</span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {record.duration}
                </Badge>
              </div>
              <p className="mb-2">{record.title}</p>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {record.summary}
              </p>
              <Button variant="outline" size="sm" className="w-full cursor-pointer">
                <ExternalLink className="w-3 h-3 ml-1" />
                View recording
              </Button>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}
