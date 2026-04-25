import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';

const useLocalStorageForm = (defaultValues = {}) => {
  const pathname = usePathname();
  
  // Initialize formData state with values from localStorage or defaultValues
  const [formData, setFormData] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedData = localStorage.getItem(pathname);
      return storedData ? JSON.parse(storedData) : defaultValues;
    }
    return defaultValues;
  });

  // Sync formData to localStorage whenever pathname or formData changes
  useEffect(() => {
    localStorage.setItem(pathname, JSON.stringify(formData));
  }, [pathname, formData]);

  // Update formData by merging newData with previous state
  const updateFormData = useCallback((newData: any) => {
    setFormData((prevData: any) => {
      const updatedData = { 
        ...prevData, // Merge previous state with new data
        ...newData   // Spread newData to update formData with the latest changes
      };
      localStorage.setItem(pathname, JSON.stringify(updatedData));
      return updatedData; // Return the updated formData
    });
  }, [pathname]);

  // Clear formData from localStorage and reset to defaultValues
  const clearFormData = useCallback(() => {
    localStorage.removeItem(pathname);
    setFormData(defaultValues);
  }, [pathname, defaultValues]);

  return [formData, updateFormData, clearFormData];
};

export default useLocalStorageForm;
