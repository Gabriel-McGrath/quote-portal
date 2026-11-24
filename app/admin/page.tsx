import { Suspense } from "react";
import { QuoteCard } from "./QuoteCard";
import { connection } from "next/server";
import { db } from "@/lib/db";

async function GetQuotes() {
    await connection();

    const quotes = await db.orm.public.Quote.all();

    if (quotes.length === 0) {
        return (
            <div className="text-center text-gray-500">
                No quotes to display.
            </div>
        );
    }

    return quotes.map((quote) => {
        const item = {
            id: String(quote.id ?? ""),
            name: String(quote.name ?? ""),
            email: String(quote.email ?? ""),
            projectType: String(quote.projectType ?? ""),
            details: String(quote.details ?? ""),
            createdAt: quote.createdAt
                ? new Date(String(quote.createdAt)).toISOString()
                : "",
        };

        return <QuoteCard key={item.id} quote={item} />;
    });
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Page Header */}
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-8">
        Quote Requests:
        </h1>
          <Suspense fallback={<div className="text-center text-gray-500">Loading quotes...</div>}>
            {GetQuotes()}
          </Suspense>
      </div>
    </main>
  );
}
