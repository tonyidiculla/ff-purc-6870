'use client';

import { PencilIcon, TrashIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import type { Supplier } from '@/types/purchasing';

interface SupplierCardProps {
  supplier: Supplier;
  onEdit: (supplier: Supplier) => void;
  onDelete: (supplierId: string) => void;
}

const supplierTypeColors = {
  medication: 'bg-red-100 text-red-800',
  equipment: 'bg-blue-100 text-blue-800',
  supplies: 'bg-green-100 text-green-800',
  food: 'bg-yellow-100 text-yellow-800',
  laboratory: 'bg-purple-100 text-purple-800',
  other: 'bg-gray-100 text-gray-800'
};

const statusColors = {
  active: 'bg-green-100 text-green-800',
  inactive: 'bg-gray-100 text-gray-800',
  pending: 'bg-yellow-100 text-yellow-800'
};

export default function SupplierCard({ supplier, onEdit, onDelete }: SupplierCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{supplier.name}</h3>
            <div className="flex flex-wrap gap-2">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${supplierTypeColors[supplier.supplier_type]}`}>
                {supplier.supplier_type.charAt(0).toUpperCase() + supplier.supplier_type.slice(1)}
              </span>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[supplier.status]}`}>
                {supplier.status.charAt(0).toUpperCase() + supplier.status.slice(1)}
              </span>
            </div>
          </div>
          
          <div className="flex space-x-2 ml-4">
            <button
              onClick={() => onEdit(supplier)}
              className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              title="Edit supplier"
            >
              <PencilIcon className="h-4 w-4" />
            </button>
            <button
              onClick={() => onDelete(supplier.id)}
              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
              title="Delete supplier"
            >
              <TrashIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <EnvelopeIcon className="h-4 w-4 mr-2 text-gray-400" />
            <a href={`mailto:${supplier.email}`} className="hover:text-blue-600 transition-colors">
              {supplier.email}
            </a>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <PhoneIcon className="h-4 w-4 mr-2 text-gray-400" />
            <a href={`tel:${supplier.phone}`} className="hover:text-blue-600 transition-colors">
              {supplier.phone}
            </a>
          </div>
          
          <div className="text-sm text-gray-600">
            <p className="font-medium">Contact: {supplier.contact_person}</p>
          </div>
        </div>

        {/* Address */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            {supplier.address.street}<br />
            {supplier.address.city}, {supplier.address.state} {supplier.address.zip}<br />
            {supplier.address.country}
          </p>
        </div>

        {/* Payment Terms */}
        <div className="mb-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            Payment: {supplier.payment_terms.replace('_', ' ').toUpperCase()}
          </span>
        </div>

        {/* Notes */}
        {supplier.notes && (
          <div className="border-t pt-3">
            <p className="text-sm text-gray-600 italic">
              {supplier.notes.length > 100 
                ? `${supplier.notes.substring(0, 100)}...` 
                : supplier.notes
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
}