import React, { createContext, useContext, useEffect, useState } from 'react';
import cmsData from '../data/cms-data.json';

type SiteData = any;

const DataContext = createContext<{ data: SiteData | null; loading: boolean; error: string | null }>({
  data: cmsData,
  loading: false,
  error: null,
});

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<SiteData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a brief load for initial smooth transition effects
    setTimeout(() => {
      setData(cmsData);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error: null }}>
      {children}
    </DataContext.Provider>
  );
}

export function useSiteData() {
  return useContext(DataContext);
}
