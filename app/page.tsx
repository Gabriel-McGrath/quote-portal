import { submitQuoteForm } from "./actions";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Request a Project Quote
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Tell us about your project and we'll get back to you with an estimate.
          </p>
        </div>

        {/* White Card Container */}
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-200">
          <form action={submitQuoteForm} className="space-y-6">
            {/* Step 3: Form inputs will go right here */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your Name Here"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              /> 
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="your.email@example.com"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-700">
                Project Type
              </label>
              <select
                name="projectType"
                id="projectType"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="landing-page">Business Landing Page</option>
                <option value="web-app">Custom Web Application</option>
                <option value="dashboard">Custom Admin Dashboard / Portal</option>
                <option value="redesign">Website Redesign</option>
              </select>
            </div>
            <div>
              <label htmlFor="details" className="block text-sm font-medium text-gray-700">
                Project Details
              </label>
              <textarea
                name="details"
                id="details"
                rows={4}
                required
                placeholder="Describe your goals, timeline, and any specific requirements for your project."
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit Quote Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
