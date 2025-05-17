import { useEffect, useState } from 'react';
import { getAllManagingDirectors } from '../../config/strapiController';
import { Star } from 'lucide-react';
import Table1 from '../../components/Table1';
import { STRAPI_API_BASE_URL } from '../../config/httpClient';
import blankImage from '../../../public/blankImage.webp';

function FormerManagingDirectors() {
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
    { header: 'Sl No.', accessor: 'slno'  },
    {
      header: 'Name',
      accessor: 'name',size:300,
      render: (row: any) => {
        const imageUrl = row.image?.url
          ? STRAPI_API_BASE_URL + row.image?.url || row.image?.url
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
    { header: 'Start Date', accessor: 'from' },
    { header: 'End Date', accessor: 'to' },
  ];
  // const dataTable:Official[] = [
  //   { slNo: 1, name: 'Sri Nilamadhab Mohanty, IAS', from: '22.04.1976', to: '23.03.1977' },
  //   { slNo: 2, name: 'Sri Girish Chandra Patra, IAS', from: '24.03.1977', to: '25.05.1978' },
  //   { slNo: 3, name: 'Sri Pradyumna Kumar Mishra', from: '26.05.1978', to: '30.09.1989' },
  //   { slNo: 4, name: 'Sri Narendra Kumar Mishra, OAS', from: '01.10.1989', to: '10.05.1990' },
  //   { slNo: 5, name: 'Sri Pradyumna Kumar Mishra', from: '11.05.1990', to: '14.10.1990' },
  //   { slNo: 6, name: 'Sri Debendra Kumar Mishra, OAS', from: '15.10.1990', to: '28.04.1991' },
  //   { slNo: 7, name: 'Sri Jayant Kumar Dev, IAS', from: '29.04.1991', to: '02.07.1991' },
  //   { slNo: 8, name: 'Sri Barada Chandra Das, OAS', from: '03.07.1991', to: '12.10.1993' },
  //   { slNo: 9, name: 'Sri Pradyumna Kumar Mishra', from: '13.10.1993', to: '20.11.1995' },
  //   { slNo: 10, name: 'Sri Bata Krishna Tripathy, IPS', from: '21.11.1995', to: '03.07.1998' },
  //   { slNo: 11, name: 'Sri Sanjeev Chopra, IAS', from: '04.07.1998', to: '11.08.1998' },
  //   { slNo: 12, name: 'Sri Bata Krishna Tripathy, IPS', from: '12.08.1998', to: '21.10.1998' },
  //   { slNo: 13, name: 'Sri Gopal Chandra Nanda, IPS', from: '22.10.1998', to: '19.03.1999' },
  //   { slNo: 14, name: 'Sri Nikunja Kishore Sundaray, IAS', from: '20.03.1999', to: '28.05.1999' },
  //   { slNo: 15, name: 'Sri M. Nageswar Rao, IPS', from: '29.05.1999', to: '24.01.2000' },
  //   { slNo: 16, name: 'Sri Nikunja Kishore Sundaray, IAS', from: '25.01.2000', to: '17.08.2000' },
  //   { slNo: 17, name: 'Sri Parag Gupta, IAS', from: '18.08.2000', to: '28.02.2002' },
  //   { slNo: 18, name: 'Sri Surendra Nath Tripathy, IAS', from: '21.03.2002', to: '23.07.2003' },
  //   { slNo: 19, name: 'Sri Jagdish Prasad Agarwala, OAS', from: '23.07.2003', to: '13.09.2004' },
  //   { slNo: 20, name: 'Sri Nikunja Bihari Dhal, IAS', from: '21.09.2004', to: '01.12.2005' },
  //   { slNo: 21, name: 'Sri Rabi Narayan Dash, IAS', from: '02.12.2005', to: '30.11.2009' },
  //   { slNo: 22, name: 'Sri Debi Prasad Mohanty, OAS', from: '09.12.2009', to: '30.06.2011' },
  //   { slNo: 23, name: 'Sri Prana Krushna Behera, OAS', from: '26.08.2011', to: '24.01.2012' },
  //   { slNo: 24, name: 'Sri Suresh Chandra Suar, OAS', from: '27.01.2012', to: '31.03.2013' },
  //   { slNo: 25, name: 'Sri Nityananda Palai, IAS', from: '07.05.2013', to: '31.05.2013' },
  //   { slNo: 26, name: 'Sri Pratap Chandra Dash, OAS', from: '31.05.2013', to: '02.12.2013' },
  //   { slNo: 27, name: 'Sri Nityananda Palai, IAS', from: '02.12.2013', to: '03.03.2014' },
  //   { slNo: 28, name: 'Sri Bibhuti Bhusan Behera, OAS', from: '03.03.2014', to: '21.06.2014' },
  //   { slNo: 29, name: 'Sri Pradeep Kumar Dash, OAS', from: '23.06.2014', to: '27.01.2015' },
  //   { slNo: 30, name: 'Sri Bibhuti Bhusan Behera, OAS', from: '28.01.2015', to: '13.10.2017' },
  //   { slNo: 31, name: 'Sri Prasanna Kumar Jena, IAS', from: '13.12.2017', to: '22.11.2018' },
  //   { slNo: 32, name: 'Sri Nitin Bhanudas Jawale, IAS', from: '24.11.2018', to: '30.06.2021' },
  //   { slNo: 33, name: 'Sri Bhupendra Singh Poonia, IAS', from: '05.07.2021', to: '22.08.2024' },
  // ];

  
  useEffect(() => {
    setLoading(true);
    getAllManagingDirectors()
      .then(({ data }) => {
        if (data) {
          console.log(data, 'data');
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
  const card = data[0]?.formerManagingDirectors || [];
  const card1 = data?.formerManagingDirectors || [];
    const filteredData = card.filter((row: any) => {
    const search = searchTerm.toLowerCase();
    return (
      row.name?.toLowerCase().includes(search) 
      ||
      row.designation?.toLowerCase().includes(search) ||
      row.contact?.toLowerCase().includes(search) ||
      row.email?.toLowerCase().includes(search)
    );
  });
// console.log(card, '1data');
  console.log(card1, 'card1data');
  return (
    <>
       <div className=" bg-white pt-2">
        <div className="bg-gradient-to-r from-red-500 to-red-700 px-6 py-4 flex justify-between items-center rounded-2xl ">
          <h2 className="text-xl font-bold text-white flex items-center">
            <Star size={20} className="mr-2" />
            Former Managing Directors
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

export default FormerManagingDirectors;
