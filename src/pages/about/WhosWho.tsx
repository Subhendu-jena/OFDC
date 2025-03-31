import TableComponent, { Official } from '../../components/Table'


function WhosWho() {
  const columns = [
    { field: "slNo", label: "Sl No." },
    { field: "name", label: "Name" },
    { field: "contactNo", label: "Contact No." },

  ];
  
  const data:Official[] = [
    { slNo: 1, name: "-Vacant-", designation: "Chairman", contactNo: "0671-2305169, 2306532", email: "" },
    { slNo: 2, name: "Sri Samarth Verma, IAS", designation: "Managing Director", contactNo: "0671-2305169, 2306532", email: "mdodfilm@gmail.com" },
    { slNo: 3, name: "Sri B.M.B Pattnaik", designation: "Officer on Special Duty", contactNo: "9437208372", email: "" },
    { slNo: 4, name: "Sri Prabhas Chandra Mohapatra", designation: "Officer on Special Duty", contactNo: "9937005537", email: "" },
    { slNo: 5, name: "Smt. Kabita Mallick", designation: "Senior Assistant", contactNo: "", email: "" },
    { slNo: 6, name: "Sri Niranjan Biswal", designation: "Office Assistant", contactNo: "", email: "" },
    { slNo: 7, name: "Sri Biswanath Baut", designation: "Jr. Steno-cum-Typist", contactNo: "", email: "" },
    { slNo: 8, name: "Sri Shakti Saurav Patra", designation: "IT Assistant", contactNo: "", email: "" },
    { slNo: 9, name: "Sri Ashok Kumar Sahoo", designation: "Accounts Assistant", contactNo: "", email: "" },
    { slNo: 10, name: "Sri Gobinda Behera", designation: "Data Entry Operator", contactNo: "", email: "" },
    { slNo: 11, name: "Smt. Bijayalaxmi Parida", designation: "Data Entry Operator", contactNo: "", email: "" },
    { slNo: 12, name: "Sri Dasarathi Sahu", designation: "Messenger", contactNo: "", email: "" },
    { slNo: 13, name: "Smt. Srimati Barik", designation: "Messenger", contactNo: "", email: "" },
    { slNo: 14, name: "Sri Muralidhar Biswal", designation: "Messenger", contactNo: "", email: "" },
    { slNo: 15, name: "Sri D. Kama Kumar Reddy", designation: "Watchman-cum-Mali", contactNo: "", email: "" },
    { slNo: 16, name: "Sri N. Santosh", designation: "Sweeper", contactNo: "", email: "" },
  ];
  
  return (
    <div className=' bg-white'>
      <TableComponent columns={columns} data={data} Heading='WHO IS WHO'/>
    </div>
  )
}

export default WhosWho
