import { Star } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import Table1 from '../../components/Table1';
import { STRAPI_API_BASE_URL } from '../../config/httpClient';
import {  tenders } from '../../config/strapiController';

const Tenders :React.FC = () => {
   const [data, setData] = useState<any>([]);
   const [loading, setLoading] = useState(false);
   const [searchTerm, setSearchTerm] = useState('');
   useEffect(() => {
     setLoading(true);
     tenders()
       .then((res:any) => {
         if (res) {
           const resData = res?.data[0].publication || [];;
           setData(resData);
           console.log(resData, 'res?.data?.data1111111');
         }
       })
       .catch((error) => {
         console.log(error);
       })
       .finally(() => {
         setLoading(false);
       });
   }, []);
   const filteredData = data &&data.filter((row: any) => {
     const search = searchTerm.toLowerCase();
     return (
       row.name?.toLowerCase().includes(search)
     );
   });
   console.log(data, 'filteredData');
   const columns: {
     header: string;
     accessor: string;
     render?: (row: any) => any;
     size?: number;
   }[] = [
     { header: 'Sl No.', accessor: 'slno' },
     {
       header: 'Year',
       accessor: 'name',
       size: 300,
     },
     {
       header: 'Download',
       accessor: 'document',
       render: (row: any) => {
         return (
           <a
             href={STRAPI_API_BASE_URL + row.document?.url} // URL to the file
             // download // tells the browser “download, don’t just navigate”
             target="_blank" // open in a new tab (optional, since download often auto-saves)
             rel="noopener noreferrer"
             download
           >
             <div
               className={`underline px-2 py-1   rounded-full w-max inline-block bg-red-100 text-red-800`}
             >
               Download
             </div>
           </a>
         );
       },
     },
   ];
   return (
     <>
       <div className=" bg-white pt-2">
         <div className="bg-gradient-to-r from-red-500 to-red-700 px-6 py-4 flex justify-between items-center rounded-2xl ">
           <h2 className="text-xl font-bold text-white flex items-center">
             <Star size={20} className="mr-2" />
             Tenders
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
 };

export default Tenders
