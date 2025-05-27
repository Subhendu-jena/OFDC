import React, { useEffect, useState } from 'react';
import LocationCard from '../../components/locationCard/LocationCard';
import { locationDirectory } from '../../config/strapiController';
import LocationDetails from '../../components/locationCard/LocationDetails';
import { Loader } from 'lucide-react';
import { useFontSize } from '../../components/home/FontSizeContext';

const LocationCategory: React.FC = () => {
  // const featuredLocations = [
  //     {
  //       title: "Konark",
  //       subtitle: "Sun Temple Heritage Site",
  //       location: "Odisha",
  //       phone: "+91-666-888-99",
  //       image: "https://ofdc.octamy.com/wp-content/uploads/2020/10/KONARK-1-600x400.jpg",
  //       rating: 4.5,
  //       category: "Traveling",
  //       featured: true,
  //       isOpen: true,
  //       avatarUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=150"
  //     },
  //     {
  //       title: "Puri Beach",
  //       subtitle: "Coastal Paradise",
  //       location: "Odisha",
  //       phone: "+91-666-888-98",
  //       image: "https://ofdc.octamy.com/wp-content/uploads/2024/12/800px-Udaygiri__Khandagiri_Caves_Bhubaneswar_6_-_Oct_2010_20180903001254-600x400.jpg",
  //       rating: 4,
  //       category: "Traveling",
  //       featured: false,
  //       isOpen: true
  //     }
  //   ];

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { fontSize } = useFontSize();
  useEffect(() => {
    setLoading(true);
    locationDirectory()
      .then(({ data }) => {
        if (data) {
          setData(data);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const card = data[0]?.locationsCard || [];

  return (
    <>
      {loading ? (
        <Loader className="w-10 h-10" />
      ) : selectedProduct ? (
        <LocationDetails locationData={selectedProduct} setSelectedProduct={()=>setSelectedProduct(null)}/>
      ) : (
        <>
         <div className='bg-white'> <h3 className="px-4 pt-2 text-2xl font-semibold text-gray-900 mb-6 bg-white" style={{ fontSize: `${fontSize + 8}px` }}>
            Featured Locations
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-4 px-6 gap-6 bg-white mt-10">
            <LocationCard
              cardData={card}
              setSelectedProduct={setSelectedProduct}
            />
          </div></div>
        </>
      )}
    </>
  );
};

export default LocationCategory;
