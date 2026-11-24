"use client";
import { useState } from "react";

export type QuoteItem = {
  id: string;
  name: string;
  email: string;
  projectType: string;
  details: string;
  createdAt: string;
};

export function QuoteCard({ quote }: { quote: QuoteItem }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm sm:text-base">
                    <span><strong>Name:</strong> {quote.name}</span>
                    <span><strong>Date:</strong> {quote.createdAt ? new Date(quote.createdAt).toLocaleString() : "N/A"}</span>
                    <span><strong>Type:</strong> {quote.projectType}</span>
                </div>
                <button
                    type="button"
                    // Toggle the expanded state when the button is clicked
                    onClick={() => setIsExpanded((prev) => !prev)}
                    className="text-blue-500 hover:underline"
                >
                    {/* Show "Expand" when collapsed and "Collapse" when expanded */}
                    {isExpanded ? "Collapse" : "Expand"} 
                </button>
            </div>
            {isExpanded && (
                <div className="mt-2">
                    <p><strong>Email:</strong> {quote.email}</p>
                    <p><strong>Details:</strong> {quote.details}</p>
                </div>
            )}
        </div>
    );
}