import React from 'react';
import { BarChart as ChartBar, Bar, XAxis, ResponsiveContainer } from 'recharts';




const BarChart = ({asset}) => {
    const data = [
    {
      name: 'Jan',
      uv: 4000,
      amt: 2400,
    },
    {
      name: 'Feb',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      uv: 2000,
      pv: 5800,
      amt: 2290,
    },
    {
      name: 'Apr',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Jun',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Jul',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
        name: 'Aug',
        uv: 3000,
        pv: 1000,
        amt: 2100,
    },
    {
        name: 'Sep',
        uv: 2349,
        pv: 3430,
        amt: 2100,
    },
    {
        name: 'Oct',
        uv: 1490,
        pv: 5300,
        amt: 2100,
    },
    {
        name: 'Nov',
        uv: 900,
        pv: 1200,
        amt: 2100,
    },
    {
        name: 'Dec',
        uv: 4500,
        pv: 3200,
        amt: 2100,
    },
  ];
    return(
        <ResponsiveContainer width="100%" height="80%" asset={asset}>
        <ChartBar
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey= "name" axisLine="false"/>
          <Bar dataKey="pv" fill="#AEAEAE" radius={[50, 50, 0, 0]}/>
          <Bar dataKey="uv" fill="#FF6F61"  radius={[50, 50, 0, 0]} />
        </ChartBar>
      </ResponsiveContainer>
    )
}   
export { BarChart }