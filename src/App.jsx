import { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MapView from './components/MapView';
import InfoPanel from './components/InfoPanel';
import background from './assets/pattern-bg-desktop.png';

import { fetchIPData } from './api/ipify';

function App() {
  const [data, setData] = useState(null);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  // Fetch the user's IP on initial page load
  useEffect(() => {
    const fetchDefaultIP = async () => {
      try {
        const defaultData = await fetchIPData();
        setData(defaultData);
        setCoordinates({
          lat: defaultData.location.lat,
          lng: defaultData.location.lng,
        });
      } catch (error) {
        console.error('Error fetching default IP:', error);
      }
    };
    fetchDefaultIP();
  }, []);

  // Handle search
  const handleSearch = async (query) => {
    try {
      const searchData = await fetchIPData(query);
      setData(searchData);
      setCoordinates({
        lat: searchData.location.lat,
        lng: searchData.location.lng,
      });
    } catch (error) {
      console.error('Error fetching searched IP:', error);
    }
  };

  return (
    <>
      <section className="relative">
        {/* Background Image */}
        <div className="absolute top-0 w-full h-80 -z-10">
          <img src={background} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Header and Search Bar */}
        <Header />
        <SearchBar onSearch={handleSearch} />

        {/* Info Panel */}
        <div className="absolute w-full top-60 left-1/2 transform -translate-x-1/2 z-20 px-14">
          <InfoPanel data={data} />
        </div>

        {/* Map */}
        <div className="absolute top-80 w-full h-[calc(100vh-20rem)] z-10">
          <MapView coordinates={coordinates} />
        </div>
      </section>
    </>
  );
}

export default App;
