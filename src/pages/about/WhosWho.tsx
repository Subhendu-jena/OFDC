import { useEffect, useState } from 'react';
import TableComponent from '../../components/Table';
import { whoIsWhoAboutUS } from '../../config/strapiController';
import { Loader } from 'lucide-react';
// import { Official } from '../../types/global';

function WhosWho() {
  const columns = [
    { field: 'slNo', label: 'Sl No.' },
    { field: 'name', label: 'Name' },
    { label: 'Phone No', field: 'phoneNo' },
    { label: 'Email Id', field: 'emailId' },
  ];

  // const data:Official[] = [
  //   { slNo: 1, name: "-Vacant-", designation: "Chairman", contact: "0671-2305169, 2306532", email: "" },
  //   { slNo: 2, name: "Sri Samarth Verma, IAS", designation: "Managing Director", contact: "0671-2305169, 2306532", email: "mdodfilm@gmail.com" },
  //   { slNo: 3, name: "Sri B.M.B Pattnaik", designation: "Officer on Special Duty", contact: "9437208372", email: "" },
  //   { slNo: 4, name: "Sri Prabhas Chandra Mohapatra", designation: "Officer on Special Duty", contact: "9937005537", email: "" },
  //   { slNo: 5, name: "Smt. Kabita Mallick", designation: "Senior Assistant", contact: "", email: "" },
  //   { slNo: 6, name: "Sri Niranjan Biswal", designation: "Office Assistant", contact: "", email: "" },
  //   { slNo: 7, name: "Sri Biswanath Baut", designation: "Jr. Steno-cum-Typist", contact: "", email: "" },
  //   { slNo: 8, name: "Sri Shakti Saurav Patra", designation: "IT Assistant", contact: "", email: "" },
  //   { slNo: 9, name: "Sri Ashok Kumar Sahoo", designation: "Accounts Assistant", contact: "", email: "" },
  //   { slNo: 10, name: "Sri Gobinda Behera", designation: "Data Entry Operator", contact: "", email: "" },
  //   { slNo: 11, name: "Smt. Bijayalaxmi Parida", designation: "Data Entry Operator", contact: "", email: "" },
  //   { slNo: 12, name: "Sri Dasarathi Sahu", designation: "Messenger", contact: "", email: "" },
  //   { slNo: 13, name: "Smt. Srimati Barik", designation: "Messenger", contact: "", email: "" },
  //   { slNo: 14, name: "Sri Muralidhar Biswal", designation: "Messenger", contact: "", email: "" },
  //   { slNo: 15, name: "Sri D. Kama Kumar Reddy", designation: "Watchman-cum-Mali", contact: "", email: "" },
  //   { slNo: 16, name: "Sri N. Santosh", designation: "Sweeper", contact: "", email: "" },
  // ];

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    setLoading(true);
    whoIsWhoAboutUS()
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
}

export default WhosWho;
