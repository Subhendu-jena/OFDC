import React, { useState } from 'react';
import {
  Calendar,
  User,
  ArrowLeft,
  Film,
  Building2,
  Music,
  FileText,
  MessageSquare,
} from 'lucide-react';
import { Dot } from 'lucide-react';
import { STRAPI_API_BASE_URL } from '../../config/httpClient';
import Slider from 'react-slick';

interface FilmDetailProps {
  item: any;
  onClose: () => void;
}
const settings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  arrows: true,
};
const FilmDetail: React.FC<FilmDetailProps> = ({ item, onClose }) => {
  const [preview, setPreview] = useState(false);
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onClose}
          className="text-red-500 hover:text-red-400 flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Archives
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="rounded-2xl ">
              <img
                src={STRAPI_API_BASE_URL + item?.posterImage?.url}
                alt="{item.title}"
                className="w-full h-full rounded-2xl object-cover"
              />
              <div className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white rounded-full">
                {item.Category}
              </div>
              <div>
                <button
                  className="border border-red-500 p-2 bg-red-500 text-white rounded-2xl mt-4  cursor-pointer"
                  onClick={() => setPreview(true)}
                >
                  {' '}
                  View more Images
                </button>
              </div>
              {preview && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
                  <div className="relative w-full max-w-4xl mx-auto p-4">
                    {/* Close Button */}
                    <button
                      onClick={() => setPreview(false)}
                      className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 z-50"
                    >
                      ✕
                    </button>

                    {/* Image Slider */}
                    <Slider {...settings}>
                      {item?.images && item.images.length > 0 ? (
                        item.images.map((image: any, index: number) => (
                          <div key={index} className="w-full">
                            <img
                              src={STRAPI_API_BASE_URL + image?.url}
                              alt={`Gallery image ${index + 1}`}
                              className="w-full h-[80vh] object-contain rounded-lg"
                            />
                          </div>
                        ))
                      ) : (
                        <div className="text-center text-gray-500 py-8">
                          No images available to show.
                        </div>
                      )}
                    </Slider>
                  </div>
                </div>
              )}
            </div>

            {item.cast && item.cast[0]?.children && (
              <div className="mt-4">
                <h2 className="text-xl font-semibold mb-4">Cast</h2>
                <div className="grid grid-cols-2 gap-2">
                  {item.cast[0].children.map((listItem: any, index: number) => {
                    const contentNode = listItem.children.find(
                      (child: any) => child.type === 'link'
                    );

                    const text = listItem.children
                      .map((child: any) =>
                        child.type === 'link'
                          ? child.children?.[0]?.text || ''
                          : child.text || ''
                      )
                      .join(' ')
                      .trim();

                    return (
                      <div
                        key={index}
                        className="text-gray-300 flex items-center gap-2"
                      >
                        <Dot size={16} />
                        {contentNode ? (
                          <a
                            href={contentNode.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline "
                          >
                            {text}
                          </a>
                        ) : (
                          <span>{text}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {item.description && (
              <div className="mt-4">
                <h2 className="text-xl font-semibold mb-4">Kind of Movie</h2>
                {item.description.map((para: any, index: number) => (
                  <p key={index} className="text-gray-300 mb-2">
                    {para.children.map((child: any) => child.text).join('')}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Details */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-500/20 rounded-lg">
                <Film className="w-6 h-6 text-red-500" />
              </div>
              <h1 className="text-3xl font-bold">{item.filmName || 'N/A'}</h1>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-gray-800 rounded-xl">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Release Date</span>
                </div>
                <p className="text-lg font-medium">
                  {item.releaseDate || 'N/A'}
                </p>
              </div>
              <div className="p-4 bg-gray-800 rounded-xl">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <Building2 className="w-4 h-4" />
                  <span className="text-sm">Production</span>
                </div>
                <p className="text-lg font-medium">
                  {item.productionCompany || 'N/A'}
                </p>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Production Details
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-300">
                    <User className="w-4 h-4" />
                    <span className="font-medium">Director:</span>{' '}
                    {item.director || 'N/A'}
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <FileText className="w-4 h-4" />
                    <span className="font-medium">Writer:</span>{' '}
                    {item.writer || 'N/A'}
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <MessageSquare className="w-4 h-4" />
                    <span className="font-medium">Dialogues:</span>{' '}
                    {item.dialogues || 'N/A'}
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Music className="w-4 h-4" />
                    <span className="font-medium">Music:</span>{' '}
                    {item.music || 'N/A'}
                  </div>
                </div>
              </div>

              {item.songs && item.songs[0]?.children && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Featured Songs</h2>
                  <div className="space-y-2">
                    {item.songs[0].children.map(
                      (listItem: any, index: number) => {
                        const contentNode = listItem.children.find(
                          (child: any) => child.type === 'link'
                        );

                        const text = listItem.children
                          .map((child: any) =>
                            child.type === 'link'
                              ? child.children?.[0]?.text || ''
                              : child.text || ''
                          )
                          .join(' ')
                          .trim();

                        return (
                          <div
                            key={index}
                            className="p-3 bg-gray-800 rounded-lg text-gray-300 flex items-center gap-2"
                          >
                            <Music className="w-4 h-4 text-red-400" />
                            {contentNode ? (
                              <a
                                href={contentNode.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline "
                              >
                                {text}
                              </a>
                            ) : (
                              <span>{text}</span>
                            )}
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmDetail;
