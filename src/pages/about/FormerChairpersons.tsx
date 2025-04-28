import { useEffect, useState } from 'react';
import TableComponent from '../../components/Table'
import { getAllFormerChairpersons } from '../../config/strapiController';
import { Loader } from 'lucide-react';
import { Official } from '../../types/global';



function FormerChairpersons() {
  const columns = [
    { label: 'Sl No.', field: 'id' },
    { label: 'Name of Chairperson', field: 'name' },
    { label: 'From', field: 'from' },
    { label: 'To', field: 'to' },
  ];
  const dataTable:Official[] = [
    { slNo: 1, name: 'Smt. Nandini Satpathy', from: '22.04.1976', to: '16.05.1978' },
    { slNo: 2, name: 'Sri Harish Chandra Buxipatra', from: '17.05.1978', to: '13.05.1980' },
    { slNo: 3, name: 'Sri Panchanan Tripathy, IAS', from: '14.05.1980', to: '10.07.1980' },
    { slNo: 4, name: 'Sri Kishore Chandra Patel', from: '11.07.1980', to: '25.07.1985' },
    { slNo: 5, name: 'Sri Sudhansu Bhusan Mishra, IAS', from: '26.07.1985', to: '03.05.1990' },
    { slNo: 6, name: 'Sri Pradyumna Kumar Mishra', from: '04.05.1990', to: '14.10.1990' },
    { slNo: 7, name: 'Smt. Sarita J. Das, IAS', from: '15.10.1990', to: '05.06.1992' },
    { slNo: 8, name: 'Sri I. J. S. Khurana, IAS', from: '06.06.1992', to: '17.12.1992' },
    { slNo: 9, name: 'Sri Dillip Ray', from: '18.12.1992', to: '15.03.1995' },
    { slNo: 10, name: 'Sri Dillip Ray', from: '16.03.1995', to: '02.02.1996' },
    { slNo: 11, name: 'Sri Sudhansu Bhusan Mishra, IAS', from: '03.02.1996', to: '25.08.1998' },
    { slNo: 12, name: 'Sri Jayant Mohanty', from: '26.08.1998', to: '22.10.1999' },
    { slNo: 13, name: 'Sri Kailash Bihari Verma, IAS', from: '23.10.1999', to: '04.01.2000' },
    { slNo: 14, name: 'Sri Bidhan Chandra Mishra, M.A.LLM.', from: '05.01.2000', to: '15.03.2000' },
    { slNo: 15, name: 'Ms. Meena Gupta, IAS', from: '16.03.2000', to: '17.11.2000' },
    { slNo: 16, name: 'Sri Ashok Kumar Mishra, IAS', from: '18.11.2000', to: '07.01.2002' },
    { slNo: 17, name: 'Sri Satya Prakash Nanda, IAS', from: '07.01.2002', to: '29.01.2003' },
    { slNo: 18, name: 'Sri Sura Choudhury', from: '30.01.2003', to: '15.05.2004' },
    { slNo: 19, name: 'Sri Ajit Kumar Tripathy, IAS', from: '15.05.2004', to: '20.09.2004' },
    { slNo: 20, name: 'Sri Gokul Chandra Pati, IAS', from: '21.09.2004', to: '27.06.2006' },
    { slNo: 21, name: 'Sri Injeti Srinivas, IAS', from: '28.06.2006', to: '02.10.2006' },
    { slNo: 22, name: 'Sri Sitakanta Mishra', from: '03.10.2006', to: '05.11.2010' },
    { slNo: 23, name: 'Md. Muzibullah Khan', from: '06.11.2010', to: '16.05.2018' },
    { slNo: 24, name: 'Sri Satyabrat Tripathy', from: '18.05.2018', to: '06.08.2019' },
    { slNo: 25, name: 'Sri Satyabrat Tripathy', from: '22.08.2019', to: '05.06.2022' },
    { slNo: 26, name: 'Sri Satyabrat Tripathy', from: '10.10.2022', to: '10.06.2024' },
  ];
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>([]);
      useEffect(() => {
          setLoading(true);
          getAllFormerChairpersons()
          .then(({ data }) => {
            if (data) {
                console.log(data, "getAllFormerChairpersons");
                setData(data);
            }
          })
            .catch((error) => {
              console.log(error);
            })
            .finally(() => {
              setLoading(false);
            });
      },[]);
      const card = data[0]?.formerChairpersons  || [];
      console.log(card, "1data");
  return (
   <>{loading ? <Loader /> :  <div className=' bg-white'>
    <TableComponent columns={columns} data={card}  Heading='Former Chairpersons' />
    {/* card?.length==0 ? dataTable :  */}
  </div>}</>
  )
}

export default FormerChairpersons
