import { useEffect, useState } from 'react';
import { getAllFormerChairpersons } from '../../config/strapiController';
import { Star } from 'lucide-react';
import Table1 from '../../components/Table1';
import { STRAPI_API_BASE_URL } from '../../config/httpClient';
import blankImage from '../../../public/blankImage.webp';
import { formatDateTime } from '../../variables/utils';

function FormerChairpersons() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);
  const [magnifiedImage, setMagnifiedImage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const columns: {
    header: string;
    accessor: string;
    render?: (row: any) => any;
    size?: number;
  }[] = [
    { header: 'Sl No.', accessor: 'slno' },
    {
      header: 'Name',
      accessor: 'name',
      size: 300,
      render: (row: any) => {
        const imageUrl = row.imgUrl?.url
          ? STRAPI_API_BASE_URL + row.imgUrl?.url || row.imgUrl?.url
          : blankImage;
        return (
          <div className="flex items-center relative space-x-4 text-left">
            {imageUrl && (
              <img
                src={imageUrl}
                alt={row.name || 'Profile image'}
                className="w-12 h-12 rounded-full object-cover border border-gray-300"
                onClick={() => setMagnifiedImage(imageUrl)}
              />
            )}
            <div className="flex flex-col">
              <span className="font-normal text-[16px]">{row.name}</span>
              {row.designation && (
                <span className="text-sm text-gray-500">{row.designation}</span>
              )}
            </div>
            {magnifiedImage.length !== 0 && (
              <div
                className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
                onClick={() => setMagnifiedImage('')}
              >
                <img
                  src={magnifiedImage}
                  alt={row.name || 'Profile image'}
                  className="max-w-full max-h-full"
                />
              </div>
            )}
          </div>
        );
      },
    },
    {
      header: 'From',
      accessor: 'from',
      render: (row: any) => {
        return (
          <div>
            {formatDateTime(row.from)}
          </div>
        );
      },
    },
    { header: 'To', accessor: 'to' },
  ];
  useEffect(() => {
    setLoading(true);
    getAllFormerChairpersons()
      .then(({ data }) => {
        if (data) {
          console.log(data, 'getAllFormerChairpersons');
          setData(data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const card = data[0]?.formerChairpersons || [];
  console.log(card, '1data');
  const filteredData = card.filter((row: any) => {
    const search = searchTerm.toLowerCase();
    return (
      row.name?.toLowerCase().includes(search) ||
      row.designation?.toLowerCase().includes(search) ||
      row.contact?.toLowerCase().includes(search) ||
      row.email?.toLowerCase().includes(search)
    );
  });
  return (
    <>
      <div className=" bg-white pt-2">
        <div className="bg-gradient-to-r from-red-500 to-red-700 px-6 py-4 flex justify-between items-center rounded-2xl ">
          <h2 className="text-xl font-bold text-white flex items-center">
            <Star size={20} className="mr-2" />
            Former Chairpersons
          </h2>
          <div className="flex justify-end">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-90 bg-white placeholder:text-black text-black border-none outline-none px-4 py-2 border rounded-lg"
            />
          </div>
        </div>
        <Table1 columns={columns} isLoading={loading} data={filteredData} />
      </div>
    </>
  );
}

export default FormerChairpersons;
