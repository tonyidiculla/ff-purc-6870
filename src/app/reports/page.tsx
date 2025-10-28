'use client';

import { ChartBarIcon } from '@heroicons/react/24/outline';

export default function ReportsPage() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-12">
          <ChartBarIcon className="mx-auto h-16 w-16 text-gray-400 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Purchasing Reports</h1>
          <p className="text-lg text-gray-600 mb-6">Coming Soon</p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left">
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Planned Features:</h2>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Spending Analysis - Track expenditures by category and time period</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Supplier Reports - Analyze supplier performance and reliability</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Order History - Complete purchase order tracking and analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Inventory Reports - Stock turnover and inventory analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Cost Trends - Historical price tracking and forecasting</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Budget Tracking - Monitor spending against budgets</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
