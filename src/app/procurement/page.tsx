'use client';

import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function ProcurementPage() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-12">
          <DocumentMagnifyingGlassIcon className="mx-auto h-16 w-16 text-gray-400 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Procurement Management</h1>
          <p className="text-lg text-gray-600 mb-6">Coming Soon</p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left">
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Planned Features:</h2>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Request for Quotes (RFQ) - Create and send RFQs to suppliers</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Quote Management - Track and compare supplier quotes</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Quote Comparison - Side-by-side price and term analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Vendor Performance - Track supplier reliability and quality</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
