import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// Import Highcharts modules
import 'highcharts/modules/exporting';
import 'highcharts/modules/export-data';
import 'highcharts/modules/accessibility';
import 'highcharts/modules/series-label';

const PetroleumSalesChart: React.FC = () => {
    const options: Highcharts.Options = {
        chart: {
          type: 'column',
        },
        xAxis: {
          categories: ['Jet fuel', 'Duty-free diesel', 'Petrol', 'Diesel', 'Gas oil'],
        },
        yAxis: {
          title: {
            text: 'Million liters',
          },
        },
        tooltip: {
          valueSuffix: ' million liters',
          shared: false,  // Disable shared tooltip to show only for the hovered point
          useHTML: true, // Optional: To improve tooltip content formatting
        },
        plotOptions: {
          column: {
            pointPadding: 0.1, // Adjust space between bars
            borderWidth: 0,
            states: {
              hover: {
                enabled: true,
                brightness: 0.1, // Slight highlight effect when hovering over bars
              },
            },
          },
          series: {
            // borderRadius: 5,  // Optional: Add rounded corners to bars
          },
        },
        series: [
          {
            type: 'column',
            name: '2020',
            data: [59, 83, 65, 228, 184],
          },
          {
            type: 'column',
            name: '2021',
            data: [24, 79, 72, 240, 167],
          },
          {
            type: 'column',
            name: '2022',
            data: [58, 88, 75, 250, 176],
          },
        ],
      };
      

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-2xl shadow-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
      <p className="text-gray-600 mt-4 text-sm">
        Chart showing how different series types can be combined in a single
        chart.
      </p>
    </div>
  );
};

export default PetroleumSalesChart;





// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// // Data for the visualization
// const petroleumData = [
//   { category: 'Jet fuel', '2020': 59, '2021': 24, '2022': 58 },
//   { category: 'Duty-free diesel', '2020': 83, '2021': 79, '2022': 88 },
//   { category: 'Petrol', '2020': 65, '2021': 72, '2022': 75 },
//   { category: 'Diesel', '2020': 228, '2021': 240, '2022': 250 },
//   { category: 'Gas oil', '2020': 184, '2021': 167, '2022': 176 }
// ];

// // Custom tooltip component
// const CustomTooltip = ({ active, payload, label }: any) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="">
//         <p className="font-bold text-gray-800">{label}</p>
//         {payload.map((entry:any, index:number) => (
//           <p key={`item-${index}`} style={{ color: entry.color }}>
//             {entry.name}: {entry.value} million liters
//           </p>
//         ))}
//       </div>
//     );
//   }
//   return null;
// };

// export default function PetroleumSalesBarChart() {
//   return (
//     <div className="min-w-full max-w-4xl mx-auto my-4 bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-xl font-bold text-center text-gray-800 mb-6">Sales of petroleum products March, Norway</h2>
      
//       <div className="h-96">
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart
//             data={petroleumData}
//             margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
//           >
//             <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//             <XAxis 
//               dataKey="category" 
//               tick={{ fill: '#4b5563' }}
//               tickLine={{ stroke: '#4b5563' }}
//             />
//             <YAxis 
//               label={{ 
//                 value: 'Million liters', 
//                 angle: -90, 
//                 position: 'insideLeft',
//                 style: { fill: '#4b5563' }
//               }} 
//               tick={{ fill: '#4b5563' }}
//               tickLine={{ stroke: '#4b5563' }}
//             />
//             <Tooltip content={<CustomTooltip />} />
//             <Legend wrapperStyle={{ paddingTop: '20px' }} />
//             <Bar 
//               dataKey="2020" 
//               fill="#7cb5ec" 
//               radius={[5, 5, 0, 0]} 
//               barSize={30}
//               name="2020"
//             />
//             <Bar 
//               dataKey="2021" 
//               fill="#434348" 
//               radius={[5, 5, 0, 0]} 
//               barSize={30}
//               name="2021"
//             />
//             <Bar 
//               dataKey="2022" 
//               fill="#90ed7d" 
//               radius={[5, 5, 0, 0]} 
//               barSize={30}
//               name="2022"
//             />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
      
//       <p className="text-sm text-gray-600 mt-6">
//         Chart showing sales of petroleum products in Norway for March across different years.
//         Hover over the bars to see the exact values in million liters.
//       </p>
//     </div>
//   );
// }