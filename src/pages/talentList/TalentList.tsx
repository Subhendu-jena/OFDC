import React, { useEffect, useState } from 'react'
import TableComponent from '../../components/Table'
import { talentDirectory } from '../../config/strapiController';
import { Loader } from 'lucide-react';

const TalentList:React.FC = () => {
    const columns = [
        { label: 'Sl No.', field: 'id' },
        { label: 'Name of the Talent', field: 'name' },
        { label: 'Talent Type', field: 'talentType' },
        { label: 'Email id', field: 'emailId' },
        { label: 'Phone No', field: 'phoneNo' },
      ];
    
       const [loading, setLoading] = useState(false);
          const [data, setData] = useState<any>([]);
            useEffect(() => {
                setLoading(true);
                talentDirectory()
                .then(({ data }) => {
                  if (data) {
                      // console.log(data, "data");
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
            const card = data[0]?.talentDirectory  || [];
  return (
    <>{loading ? <Loader /> :  <div className=' bg-white'>
        <TableComponent columns={columns} data={card}  Heading='Talent List' />
      </div>}</>
  )
}

export default TalentList
