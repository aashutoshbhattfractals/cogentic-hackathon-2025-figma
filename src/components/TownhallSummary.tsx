import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, Clock } from "lucide-react";
import { TbReportSearch } from "react-icons/tb";


export function TownhallSummary() {
  return (
    <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 gap-1">
      <div className="flex items-start gap-3 mb-3" style={{margin: 0}}>
        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
          <TbReportSearch className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="mb-1">Latest Townhall Summary</h3>
          <div className="flex gap-2 mb-3" style={{margin: 0}}>
            <Badge variant="secondary" className="text-xs">
              <Calendar className="w-3 h-3 mr-1" />
              Oct 14, 2025
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <Clock className="w-3 h-3 mr-1" />
              47 min
            </Badge>
          </div>
        </div>
      </div>
      <div className="text-gray-700 leading-relaxed">
        <p className="mt-4 gap-2" style={{padding: "10px"}}>
          Overall, the townhall focused on operational updates, employee engagement, and future plans regarding work policies and organizational growth.
        </p>
        <ul className="list-decimal ml-6 space-y-4">
          <li className="bg-white rounded-lg shadow p-4 border border-blue-100">
            <span className="font-semibold text-blue-800">Reimbursement Options:</span> <span className="text-gray-700">A new portal for submitting claims has been launched, which is more streamlined and mobile-friendly. The monthly reimbursement limit remains ₹3,000, applicable for internet, phone bills, and home office utilities. Valid receipts are required for claims, and the portal allows real-time tracking of claim status.</span>
          </li>
          <li className="bg-white rounded-lg shadow p-4 border border-blue-100">
            <span className="font-semibold text-blue-800">Work-from-Home Policies:</span> <span className="text-gray-700">The current 3-day in-office hybrid model will continue. Full-time remote work for a few weeks is possible with manager and HR approval.</span>
          </li>
          <li className="bg-white rounded-lg shadow p-4 border border-blue-100">
            <span className="font-semibold text-blue-800">Leave Policy:</span> <span className="text-gray-700">The company will continue with 30 annual leaves, including casual, sick, and earned leaves. Up to 10 unused leaves can be carried forward to the next year.</span>
          </li>
          <li className="bg-white rounded-lg shadow p-4 border border-blue-100">
            <span className="font-semibold text-blue-800">Diwali Celebration:</span> <span className="text-gray-700">A team lunch and small celebration are planned for November 3rd, featuring games, a dress code, and a diya-decorating contest.</span>
          </li>
          <li className="bg-white rounded-lg shadow p-4 border border-blue-100">
            <span className="font-semibold text-blue-800">AI and Job Opportunities:</span> <span className="text-gray-700">AI is transforming job roles, but there is a growing demand for skills in AI governance, data strategy, and human-AI collaboration. Internal upskilling programs will be rolled out next quarter.</span>
          </li>
          <li className="bg-white rounded-lg shadow p-4 border border-blue-100">
            <span className="font-semibold text-blue-800">Diwali Gifts:</span> <span className="text-gray-700">Employees will have the option to choose between gourmet hampers, eco-friendly kits, or digital gift cards, with an option to donate the gift amount to a cause.</span>
          </li>
          <li className="bg-white rounded-lg shadow p-4 border border-blue-100">
            <span className="font-semibold text-blue-800">New Office Setup:</span> <span className="text-gray-700">The renovation is nearly complete, with a soft launch targeted for mid-November. The office will feature a hybrid model with hot desks, bookable focus rooms, collaboration zones, a wellness room, and a cafe-style breakout area.</span>
          </li>
        </ul>

      </div>
    </Card>
  );
}
