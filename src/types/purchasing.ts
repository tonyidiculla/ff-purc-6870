// Purchasing & Procurement Types for FF-PURC-6870

export interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  contact_person: string;
  tax_id?: string;
  payment_terms: 'net_15' | 'net_30' | 'net_45' | 'net_60' | 'due_on_receipt';
  supplier_type: 'medication' | 'equipment' | 'supplies' | 'food' | 'laboratory' | 'other';
  status: 'active' | 'inactive' | 'pending';
  notes?: string;
  hospital_id: string;
  created_at: string;
  updated_at: string;
}

export interface PurchaseOrder {
  id: string;
  po_number: string;
  supplier_id: string;
  supplier?: Supplier;
  hospital_id: string;
  status: 'draft' | 'sent' | 'confirmed' | 'partially_received' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  order_date: string;
  expected_delivery_date?: string;
  actual_delivery_date?: string;
  subtotal: number;
  tax_amount: number;
  shipping_cost: number;
  total_amount: number;
  currency: string;
  shipping_address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  billing_address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  notes?: string;
  created_by: string;
  approved_by?: string;
  approved_at?: string;
  created_at: string;
  updated_at: string;
}

export interface PurchaseOrderItem {
  id: string;
  purchase_order_id: string;
  item_name: string;
  item_description?: string;
  item_code?: string;
  category: 'medication' | 'medical_supplies' | 'equipment' | 'food' | 'cleaning' | 'office' | 'other';
  quantity_ordered: number;
  quantity_received: number;
  unit_of_measure: string;
  unit_price: number;
  total_price: number;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  description?: string;
  item_code?: string;
  category: 'medication' | 'medical_supplies' | 'equipment' | 'food' | 'cleaning' | 'office' | 'other';
  current_stock: number;
  minimum_stock: number;
  maximum_stock: number;
  unit_of_measure: string;
  unit_cost: number;
  location: string;
  expiration_date?: string;
  lot_number?: string;
  supplier_id?: string;
  hospital_id: string;
  status: 'active' | 'discontinued' | 'out_of_stock';
  created_at: string;
  updated_at: string;
}

export interface RequestForQuote {
  id: string;
  rfq_number: string;
  title: string;
  description: string;
  hospital_id: string;
  status: 'draft' | 'sent' | 'received' | 'evaluated' | 'accepted' | 'rejected';
  due_date: string;
  supplier_ids: string[];
  items: RFQItem[];
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface RFQItem {
  id: string;
  rfq_id: string;
  item_name: string;
  description: string;
  quantity: number;
  unit_of_measure: string;
  specifications?: string;
}

export interface Quote {
  id: string;
  rfq_id: string;
  supplier_id: string;
  quote_number: string;
  total_amount: number;
  currency: string;
  validity_date: string;
  payment_terms: string;
  delivery_terms: string;
  notes?: string;
  status: 'draft' | 'submitted' | 'accepted' | 'rejected';
  items: QuoteItem[];
  created_at: string;
  updated_at: string;
}

export interface QuoteItem {
  id: string;
  quote_id: string;
  rfq_item_id: string;
  unit_price: number;
  total_price: number;
  delivery_time: string;
  notes?: string;
}

export interface VendorPerformance {
  id: string;
  supplier_id: string;
  hospital_id: string;
  evaluation_period_start: string;
  evaluation_period_end: string;
  delivery_score: number; // 1-10
  quality_score: number; // 1-10
  pricing_score: number; // 1-10
  communication_score: number; // 1-10
  overall_score: number; // 1-10
  total_orders: number;
  on_time_deliveries: number;
  quality_issues: number;
  notes?: string;
  evaluated_by: string;
  created_at: string;
}

// Dashboard and Analytics Types
export interface PurchasingMetrics {
  total_orders: number;
  total_spent: number;
  pending_orders: number;
  overdue_orders: number;
  top_suppliers: Array<{
    supplier_id: string;
    supplier_name: string;
    total_spent: number;
    order_count: number;
  }>;
  spending_by_category: Array<{
    category: string;
    amount: number;
    percentage: number;
  }>;
  recent_activity: Array<{
    type: 'order_created' | 'order_received' | 'supplier_added';
    description: string;
    timestamp: string;
  }>;
}

// Form Types
export interface CreateSupplierForm {
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  contact_person: string;
  tax_id?: string;
  payment_terms: 'net_15' | 'net_30' | 'net_45' | 'net_60' | 'due_on_receipt';
  supplier_type: 'medication' | 'equipment' | 'supplies' | 'food' | 'laboratory' | 'other';
  notes?: string;
}

export interface CreatePurchaseOrderForm {
  supplier_id: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  expected_delivery_date?: string;
  shipping_cost: number;
  notes?: string;
  items: Array<{
    item_name: string;
    item_description?: string;
    category: 'medication' | 'medical_supplies' | 'equipment' | 'food' | 'cleaning' | 'office' | 'other';
    quantity: number;
    unit_of_measure: string;
    unit_price: number;
  }>;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}