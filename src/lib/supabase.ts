import { supabaseClientManager } from './supabase-manager';

// Get the Procurement and inventory client with proper isolation
export const supabase = supabaseClientManager.getClient({
  serviceName: 'ff-purc-6870',
  storageKey: 'supabase.auth.procurement',
  options: {
  },
});

// Helper functions for ff-purc-6870
export async function getUserHospitalId(userId: string): Promise<string | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('entity_platform_id')
    .eq('id', userId)
    .single();
    
  if (error) {
    console.error('[ff-purc-6870] Error fetching user hospital ID:', error);
    return null;
  }
  
  return data?.entity_platform_id || null;
}






// Inventory-specific helpers
export async function getInventoryByLocation(locationId: string) {
  const { data, error } = await supabase
    .from('inventory')
    .select('*')
    .eq('location_id', locationId)
    .order('item_name');
    
  if (error) {
    console.error('[ff-purc-6870] Error fetching inventory:', error);
    return null;
  }
  
  return data;
}

// Export manager for cross-service coordination
export { supabaseClientManager };

// Performance monitoring in development
if (process.env.NODE_ENV === 'development') {
  console.log(`[ff-purc-6870] Client manager active with ${supabaseClientManager.getClientCount()} total clients`);
}