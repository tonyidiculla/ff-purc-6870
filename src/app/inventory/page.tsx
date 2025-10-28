'use client';

import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

export default function InventoryPage() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-12">
          <WrenchScrewdriverIcon className="mx-auto h-16 w-16 text-gray-400 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Inventory Management</h1>
          <p className="text-lg text-gray-600 mb-6">Coming Soon</p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left">
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Planned Features:</h2>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Stock Levels Overview - Real-time inventory tracking</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Low Stock Alerts - Automatic reorder notifications</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Stock Movements - Track all inventory transactions</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Expiring Items - Monitor expiration dates</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Stock Adjustments - Manual inventory corrections</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
