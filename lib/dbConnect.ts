export const executeQuery = async (query: string, params: any[] = []) => {
  try {
    // Return empty array for demo mode
    return [];
  } catch (error) {
    console.log('DB demo mode - returning empty data');
    return [];
  }
};

