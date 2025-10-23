// Mock data for development without Supabase
import type { 
  Supplier, 
  PurchaseOrder, 
  PurchaseOrderItem, 
  InventoryItem,
  PurchasingMetrics,
  CreateSupplierForm,
  CreatePurchaseOrderForm 
} from '@/types/purchasing';

// Mock data
const mockSuppliers: Supplier[] = [
  {
    id: '1',
    name: 'VetMed Supplies Inc.',
    email: 'orders@vetmedsupplies.com',
    phone: '(555) 123-4567',
    address: {
      street: '123 Medical Drive',
      city: 'Veterinary City',
      state: 'CA',
      zip: '90210',
      country: 'US'
    },
    contact_person: 'John Smith',
    tax_id: '12-3456789',
    payment_terms: 'net_30',
    supplier_type: 'medication',
    status: 'active',
    notes: 'Primary medication supplier with 24/7 emergency services',
    hospital_id: 'mock-hospital-id',
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: 'Pet Equipment Co.',
    email: 'sales@petequipment.com',
    phone: '(555) 987-6543',
    address: {
      street: '456 Equipment Blvd',
      city: 'Tech Town',
      state: 'TX',
      zip: '75001',
      country: 'US'
    },
    contact_person: 'Sarah Johnson',
    payment_terms: 'net_15',
    supplier_type: 'equipment',
    status: 'active',
    hospital_id: 'mock-hospital-id',
    created_at: '2024-02-01T10:00:00Z',
    updated_at: '2024-02-01T10:00:00Z'
  },
  {
    id: '3',
    name: 'Animal Foods Direct',
    email: 'info@animalfoodsdirect.com',
    phone: '(555) 456-7890',
    address: {
      street: '789 Nutrition Way',
      city: 'Food Valley',
      state: 'OR',
      zip: '97001',
      country: 'US'
    },
    contact_person: 'Mike Wilson',
    payment_terms: 'net_30',
    supplier_type: 'food',
    status: 'active',
    hospital_id: 'mock-hospital-id',
    created_at: '2024-01-20T10:00:00Z',
    updated_at: '2024-01-20T10:00:00Z'
  }
];

const mockPurchaseOrders: PurchaseOrder[] = [
  {
    id: '1',
    po_number: 'PO-202410001',
    supplier_id: '1',
    supplier: mockSuppliers[0],
    hospital_id: 'mock-hospital-id',
    status: 'confirmed',
    priority: 'high',
    order_date: '2024-10-20T10:00:00Z',
    expected_delivery_date: '2024-10-25T10:00:00Z',
    subtotal: 1250.00,
    tax_amount: 100.00,
    shipping_cost: 50.00,
    total_amount: 1400.00,
    currency: 'USD',
    shipping_address: {
      street: '123 Veterinary St',
      city: 'Anytown',
      state: 'ST',
      zip: '12345',
      country: 'US'
    },
    billing_address: {
      street: '123 Veterinary St',
      city: 'Anytown',
      state: 'ST',
      zip: '12345',
      country: 'US'
    },
    notes: 'Urgent order for surgical supplies',
    created_by: 'mock-user-id',
    created_at: '2024-10-20T10:00:00Z',
    updated_at: '2024-10-20T10:00:00Z'
  },
  {
    id: '2',
    po_number: 'PO-202410002',
    supplier_id: '2',
    supplier: mockSuppliers[1],
    hospital_id: 'mock-hospital-id',
    status: 'draft',
    priority: 'medium',
    order_date: '2024-10-22T10:00:00Z',
    expected_delivery_date: '2024-10-30T10:00:00Z',
    subtotal: 850.00,
    tax_amount: 68.00,
    shipping_cost: 25.00,
    total_amount: 943.00,
    currency: 'USD',
    shipping_address: {
      street: '123 Veterinary St',
      city: 'Anytown',
      state: 'ST',
      zip: '12345',
      country: 'US'
    },
    billing_address: {
      street: '123 Veterinary St',
      city: 'Anytown',
      state: 'ST',
      zip: '12345',
      country: 'US'
    },
    created_by: 'mock-user-id',
    created_at: '2024-10-22T10:00:00Z',
    updated_at: '2024-10-22T10:00:00Z'
  }
];

const mockInventoryItems: InventoryItem[] = [
  {
    id: '1',
    name: 'Antibiotics - Amoxicillin',
    description: '500mg tablets',
    item_code: 'AMX-500',
    category: 'medication',
    current_stock: 15,
    minimum_stock: 50,
    maximum_stock: 200,
    unit_of_measure: 'bottles',
    unit_cost: 25.50,
    location: 'Pharmacy',
    expiration_date: '2025-06-15',
    lot_number: 'LOT12345',
    supplier_id: '1',
    hospital_id: 'mock-hospital-id',
    status: 'active',
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-10-23T10:00:00Z'
  },
  {
    id: '2',
    name: 'Surgical Gloves',
    description: 'Latex-free, size M',
    item_code: 'GLV-M',
    category: 'medical_supplies',
    current_stock: 5,
    minimum_stock: 20,
    maximum_stock: 100,
    unit_of_measure: 'boxes',
    unit_cost: 12.00,
    location: 'Supply Room',
    hospital_id: 'mock-hospital-id',
    status: 'active',
    created_at: '2024-02-01T10:00:00Z',
    updated_at: '2024-10-23T10:00:00Z'
  },
  {
    id: '3',
    name: 'X-Ray Film',
    description: '14x17 inch',
    item_code: 'XRF-1417',
    category: 'medical_supplies',
    current_stock: 8,
    minimum_stock: 25,
    maximum_stock: 75,
    unit_of_measure: 'boxes',
    unit_cost: 45.00,
    location: 'Radiology',
    hospital_id: 'mock-hospital-id',
    status: 'active',
    created_at: '2024-01-20T10:00:00Z',
    updated_at: '2024-10-23T10:00:00Z'
  }
];

// Mock Services (replace Supabase services)
export class MockSupplierService {
  private static suppliers = [...mockSuppliers];

  static async getAll(hospitalId: string): Promise<Supplier[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return this.suppliers.filter(s => s.hospital_id === hospitalId);
  }

  static async getById(id: string, hospitalId: string): Promise<Supplier | null> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.suppliers.find(s => s.id === id && s.hospital_id === hospitalId) || null;
  }

  static async create(supplierData: CreateSupplierForm, hospitalId: string): Promise<Supplier> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newSupplier: Supplier = {
      id: Date.now().toString(),
      ...supplierData,
      hospital_id: hospitalId,
      status: 'active',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    
    this.suppliers.push(newSupplier);
    return newSupplier;
  }

  static async update(id: string, supplierData: Partial<CreateSupplierForm>, hospitalId: string): Promise<Supplier> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const index = this.suppliers.findIndex(s => s.id === id && s.hospital_id === hospitalId);
    if (index === -1) {
      throw new Error('Supplier not found');
    }
    
    this.suppliers[index] = {
      ...this.suppliers[index],
      ...supplierData,
      updated_at: new Date().toISOString()
    };
    
    return this.suppliers[index];
  }

  static async delete(id: string, hospitalId: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const index = this.suppliers.findIndex(s => s.id === id && s.hospital_id === hospitalId);
    if (index !== -1) {
      this.suppliers.splice(index, 1);
    }
  }

  static async getByType(type: string, hospitalId: string): Promise<Supplier[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.suppliers.filter(s => s.supplier_type === type && s.hospital_id === hospitalId && s.status === 'active');
  }
}

export class MockPurchaseOrderService {
  private static orders = [...mockPurchaseOrders];
  private static poCounter = 3;

  static async getAll(hospitalId: string): Promise<PurchaseOrder[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return this.orders.filter(o => o.hospital_id === hospitalId);
  }

  static async getById(id: string, hospitalId: string): Promise<PurchaseOrder | null> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.orders.find(o => o.id === id && o.hospital_id === hospitalId) || null;
  }

  static async create(orderData: CreatePurchaseOrderForm, hospitalId: string, userId: string): Promise<PurchaseOrder> {
    await new Promise(resolve => setTimeout(resolve, 800));
    
    this.poCounter++;
    const poNumber = `PO-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}${String(this.poCounter).padStart(3, '0')}`;
    
    const subtotal = orderData.items.reduce((sum, item) => sum + (item.quantity * item.unit_price), 0);
    const taxAmount = subtotal * 0.08;
    const totalAmount = subtotal + taxAmount + orderData.shipping_cost;

    const supplier = mockSuppliers.find(s => s.id === orderData.supplier_id);

    const newOrder: PurchaseOrder = {
      id: Date.now().toString(),
      po_number: poNumber,
      supplier_id: orderData.supplier_id,
      supplier,
      hospital_id: hospitalId,
      status: 'draft',
      priority: orderData.priority,
      order_date: new Date().toISOString(),
      expected_delivery_date: orderData.expected_delivery_date,
      subtotal,
      tax_amount: taxAmount,
      shipping_cost: orderData.shipping_cost,
      total_amount: totalAmount,
      currency: 'USD',
      shipping_address: {
        street: '123 Veterinary St',
        city: 'Anytown',
        state: 'ST',
        zip: '12345',
        country: 'US'
      },
      billing_address: {
        street: '123 Veterinary St',
        city: 'Anytown',
        state: 'ST',
        zip: '12345',
        country: 'US'
      },
      notes: orderData.notes,
      created_by: userId,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    this.orders.push(newOrder);
    return newOrder;
  }

  static async updateStatus(id: string, status: PurchaseOrder['status'], hospitalId: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const order = this.orders.find(o => o.id === id && o.hospital_id === hospitalId);
    if (order) {
      order.status = status;
      order.updated_at = new Date().toISOString();
    }
  }
}

export class MockInventoryService {
  private static items = [...mockInventoryItems];

  static async getAll(hospitalId: string): Promise<InventoryItem[]> {
    await new Promise(resolve => setTimeout(resolve, 400));
    return this.items.filter(i => i.hospital_id === hospitalId);
  }

  static async getLowStock(hospitalId: string): Promise<InventoryItem[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.items.filter(i => 
      i.hospital_id === hospitalId && 
      i.current_stock <= i.minimum_stock && 
      i.status === 'active'
    );
  }

  static async updateStock(id: string, newStock: number, hospitalId: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const item = this.items.find(i => i.id === id && i.hospital_id === hospitalId);
    if (item) {
      item.current_stock = newStock;
      item.updated_at = new Date().toISOString();
    }
  }
}

export class MockAnalyticsService {
  static async getPurchasingMetrics(hospitalId: string): Promise<PurchasingMetrics> {
    await new Promise(resolve => setTimeout(resolve, 600));
    
    const orders = mockPurchaseOrders.filter(o => o.hospital_id === hospitalId);
    const totalOrders = orders.length;
    const totalSpent = orders.reduce((sum, order) => sum + order.total_amount, 0);
    const pendingOrders = orders.filter(order => ['draft', 'sent', 'confirmed'].includes(order.status)).length;
    
    return {
      total_orders: totalOrders,
      total_spent: totalSpent,
      pending_orders: pendingOrders,
      overdue_orders: 0,
      top_suppliers: [
        {
          supplier_id: '1',
          supplier_name: 'VetMed Supplies Inc.',
          total_spent: 1400.00,
          order_count: 1
        },
        {
          supplier_id: '2',
          supplier_name: 'Pet Equipment Co.',
          total_spent: 943.00,
          order_count: 1
        }
      ],
      spending_by_category: [
        {
          category: 'medication',
          amount: 1400.00,
          percentage: 59.7
        },
        {
          category: 'equipment',
          amount: 943.00,
          percentage: 40.3
        }
      ],
      recent_activity: [
        {
          type: 'order_created',
          description: 'Purchase Order PO-202410002 created',
          timestamp: '2024-10-22T10:00:00Z'
        },
        {
          type: 'order_created',
          description: 'Purchase Order PO-202410001 created',
          timestamp: '2024-10-20T10:00:00Z'
        }
      ]
    };
  }
}

// Export the services with the same names as the original Supabase services
export const SupplierService = MockSupplierService;
export const PurchaseOrderService = MockPurchaseOrderService;
export const InventoryService = MockInventoryService;
export const AnalyticsService = MockAnalyticsService;