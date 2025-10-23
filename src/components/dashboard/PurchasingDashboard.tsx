'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnalyticsService, SupplierService, PurchaseOrderService, InventoryService } from '@/lib/purchasing';
import type { PurchasingMetrics, Supplier, PurchaseOrder, InventoryItem } from '@/types/purchasing';
import { 
  ShoppingCartIcon, 
  CurrencyDollarIcon, 
  ClockIcon, 
  ExclamationTriangleIcon,
  TruckIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import { format } from 'date-fns';

export default function PurchasingDashboard() {
  const [metrics, setMetrics] = useState<PurchasingMetrics | null>(null);
  const [recentOrders, setRecentOrders] = useState<PurchaseOrder[]>([]);
  const [lowStockItems, setLowStockItems] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock hospital ID - in real app, get from user context
  const hospitalId = 'mock-hospital-id';

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      
      // Load all data in parallel
      const [metricsData, ordersData, lowStockData] = await Promise.allSettled([
        AnalyticsService.getPurchasingMetrics(hospitalId),
        PurchaseOrderService.getAll(hospitalId),
        InventoryService.getLowStock(hospitalId)
      ]);

      if (metricsData.status === 'fulfilled') {
        setMetrics(metricsData.value);
      }

      if (ordersData.status === 'fulfilled') {
        // Get the 5 most recent orders
        setRecentOrders(ordersData.value.slice(0, 5));
      }

      if (lowStockData.status === 'fulfilled') {
        setLowStockItems(lowStockData.value.slice(0, 10));
      }
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const statusColors = {
    draft: 'bg-gray-100 text-gray-800',
    sent: 'bg-blue-100 text-blue-800',
    confirmed: 'bg-yellow-100 text-yellow-800',
    partially_received: 'bg-orange-100 text-orange-800',
    completed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800'
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Purchasing Dashboard</h1>
        <p className="text-gray-600">Overview of your veterinary procurement activities</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ShoppingCartIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Orders</dt>
                  <dd className="text-lg font-medium text-gray-900">{metrics?.total_orders || 0}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CurrencyDollarIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Spent</dt>
                  <dd className="text-lg font-medium text-gray-900">
                    ${(metrics?.total_spent || 0).toLocaleString()}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ClockIcon className="h-6 w-6 text-yellow-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Pending Orders</dt>
                  <dd className="text-lg font-medium text-gray-900">{metrics?.pending_orders || 0}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ExclamationTriangleIcon className="h-6 w-6 text-red-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Low Stock Items</dt>
                  <dd className="text-lg font-medium text-gray-900">{lowStockItems.length}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Orders</h3>
              <Link
                href="/purchase-orders"
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                View all
              </Link>
            </div>
            
            {recentOrders.length === 0 ? (
              <div className="text-center py-6">
                <ShoppingCartIcon className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No orders yet</h3>
                <p className="mt-1 text-sm text-gray-500">Get started by creating your first purchase order.</p>
                <div className="mt-6">
                  <Link
                    href="/purchase-orders/new"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Create Order
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-md hover:bg-gray-50">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-medium text-blue-600">{order.po_number}</p>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
                          {order.status.replace('_', ' ').toUpperCase()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">{order.supplier?.name || 'Unknown Supplier'}</p>
                      <p className="text-sm font-medium text-gray-900">${order.total_amount.toLocaleString()}</p>
                    </div>
                    <Link
                      href={`/purchase-orders/${order.id}`}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <EyeIcon className="h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Low Stock Alerts */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Low Stock Alerts</h3>
              <Link
                href="/inventory"
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                View inventory
              </Link>
            </div>
            
            {lowStockItems.length === 0 ? (
              <div className="text-center py-6">
                <ExclamationTriangleIcon className="mx-auto h-12 w-12 text-green-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">All items well stocked</h3>
                <p className="mt-1 text-sm text-gray-500">No items are below minimum stock levels.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {lowStockItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 border border-red-200 rounded-md bg-red-50">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.category}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-sm text-red-600">
                          Current: {item.current_stock} {item.unit_of_measure}
                        </span>
                        <span className="text-sm text-gray-500">
                          Min: {item.minimum_stock} {item.unit_of_measure}
                        </span>
                      </div>
                    </div>
                    <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/purchase-orders/new"
              className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
            >
              <div className="flex-shrink-0">
                <ShoppingCartIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">New Purchase Order</p>
                <p className="text-sm text-gray-500 truncate">Create a new order</p>
              </div>
            </Link>

            <Link
              href="/suppliers"
              className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
            >
              <div className="flex-shrink-0">
                <BuildingOfficeIcon className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">Manage Suppliers</p>
                <p className="text-sm text-gray-500 truncate">Add or edit suppliers</p>
              </div>
            </Link>

            <Link
              href="/inventory"
              className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
            >
              <div className="flex-shrink-0">
                <ChartBarIcon className="h-6 w-6 text-purple-600" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">View Inventory</p>
                <p className="text-sm text-gray-500 truncate">Check stock levels</p>
              </div>
            </Link>

            <Link
              href="/reports"
              className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
            >
              <div className="flex-shrink-0">
                <ChartBarIcon className="h-6 w-6 text-orange-600" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">Reports</p>
                <p className="text-sm text-gray-500 truncate">View analytics</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Top Suppliers */}
      {metrics?.top_suppliers && metrics.top_suppliers.length > 0 && (
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Top Suppliers</h3>
            <div className="space-y-4">
              {metrics.top_suppliers.map((supplier, index) => (
                <div key={supplier.supplier_id} className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-blue-600">{index + 1}</span>
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="text-sm font-medium text-gray-900">{supplier.supplier_name}</p>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm text-gray-500">{supplier.order_count} orders</p>
                      <p className="text-sm font-medium text-green-600">${supplier.total_spent.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}