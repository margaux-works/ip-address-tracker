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
      <section>
        <div className="absolute w-full -z-10">
          <img src={background} alt="" className="w-full h-80" />
        </div>
        <Header />
        <SearchBar onSearch={handleSearch} />
        <InfoPanel data={data} />
        <MapView coordinates={coordinates} />
      </section>
    </>
  );
}

export default App;
