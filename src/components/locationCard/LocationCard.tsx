import { Heart, MapPin, Phone, Star } from 'lucide-react';
import { STRAPI_API_BASE_URL } from '../../config/httpClient';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../routes/Path';

function LocationCard({ cardData }: any) {
  const navigate=useNavigate()
  return (
    <>
    {cardData.map((card: any, index: number) => (
        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow" onClick={() => {navigate(paths.locationDetails)}} key={index}>
          {' '}
          <div className="relative" key={index}>
            {/* Main images */}
            <img
              src={STRAPI_API_BASE_URL + card?.images[0]?.url}
              alt={card?.title}
              className="w-full h-48 object-cover"
            />

            {/* Overlay Elements */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
              {/* Status Badge */}
              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium">
                {card?.isOpen ? 'OPEN' : 'CLOSED'}
              </span>

              {/* Favorite Button */}
              <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-600 hover:text-red-500 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Featured Badge */}
            {card?.featured && (
              <div className="absolute bottom-4 right-4">
                <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-medium uppercase">
                  Featured
                </span>
              </div>
            )}

            {/* Avatar */}
            {card?.avatarUrl && (
              <div className="absolute -bottom-4 left-4">
                <img
                  src={STRAPI_API_BASE_URL + card?.profileImage?.url}
                  alt="Profile"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              </div>
            )}
          </div>
          <div className="p-4">
            {/* Title & Subtitle */}
            <div className="mb-3">
              <h3 className="text-xl font-semibold text-gray-900">{card?.title}</h3>
              <p className="text-gray-500">{card?.subtitle}</p>
            </div>

            {/* Location & Contact */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{card?.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{card?.phone}</span>
              </div>
            </div>

            {/* Category & Rating */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-600 rounded-full">
                <span className="text-sm font-medium">{card?.category}</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < card?.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
    </div>
      ))}
      </>
  );
}

export default LocationCard;
