import React, { useEffect, useState } from 'react';
import TableComponent from '../../components/Table';
// import { Official } from '../../types/global';
import { whoIsWhoKalingaStudio } from '../../config/strapiController';
import { Loader } from 'lucide-react';

const WhoIsWho: React.FC = () => {
  const columns = [
    { label: 'Sl No.', field: 'id' },
    { label: 'Name of Chairperson', field: 'name' },
    { label: 'contact', field: 'to' },
  ];
  // const dataTable : Official[] = [
  //   {
  //     slNo: 1,
  //     name: "Vacant",
  //     designation: "Chairman",
  //     contact: "0671-2305169, 2306532",
  //     email: "",
  //     isVacant: true,
  //     department: "Administration",
  //     imageUrl: "/api/placeholder/200/200"
  //   },
  //   {
  //     slNo: 2,
  //     name: "Sri Samarth Verma, IAS",
  //     designation: "Managing Director",
  //     contact: "0671-2305169, 2306532",
  //     email: "mdodfilm@gmail.com",
  //     isVacant: false,
  //     department: "Administration",
  //     imageUrl: "https://odishanewstune.com/wp-content/uploads/2019/02/Verma-.jpg"
  //   },
  //   {
  //     slNo: 3,
  //     name: "Sri B.M.B Pattnaik",
  //     designation: "Officer on Special Duty",
  //     contact: "9437208372",
  //     email: "",
  //     isVacant: false,
  //     department: "Operations",
  //     imageUrl: ""
  //   },
  //   {
  //     slNo: 4,
  //     name: "Sri Prabhas Chandra Mohapatra",
  //     designation: "Officer on Special Duty",
  //     contact: "9937005537",
  //     email: "",
  //     isVacant: false,
  //     department: "Operations",
  //     imageUrl: ""
  //   }
  // ];
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    setLoading(true);
    whoIsWhoKalingaStudio()
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
  }, []);
  const card = data[0]?.whoIsWho || [];
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className=" bg-white">
          <TableComponent columns={columns} data={card} Heading="Who Is Who" />
        </div>
      )}
    </>
  );
};

export default WhoIsWho;
