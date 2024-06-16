import { Typography } from 'antd';
import React, { useState } from 'react';
import { Cell, Legend, Pie, PieChart as PieChartRecharts } from 'recharts';

interface PieChartProps {
  data: {
    title?: string;
    subTitle?: string;
    chartData: {
      name: string;
      [key: string]: string | number;
    }[];
    nameKey: string;
    dataKey: string;
  };
  size?: number;
  colorList?: string[];
  label?: boolean;
  legend?: boolean;
  innerRadius?: number;
  outerRadius?: number;
}

const defaultColors = [
  '#68b1ff', // Красный
  '#9f9ae7', // Зелёный
  '#ffb940', // Синий
  '#FFA75E', // Жёлтый
  '#72CDE1', // Бирюзовый
  '#FF33FF', // Фиолетовый
];

const PieChart = ({
  data,
  outerRadius = 0.55,
  innerRadius = 0.35,
  colorList = defaultColors,
  size = 150,
  label = false,
  legend = false,
}: PieChartProps) => {
  const { title, subTitle, chartData, dataKey, nameKey } = data;

  return (
    <>
      {title && <Typography.Title level={4}>{title}</Typography.Title>}
      {subTitle && (
        <Typography.Paragraph style={{ color: '#a9a9a9', marginBottom: 20 }}>
          {subTitle}
        </Typography.Paragraph>
      )}
      <PieChartRecharts width={size + 50} height={size + 50}>
        {legend && <Legend />}
        <Pie
          data={chartData}
          dataKey={dataKey}
          nameKey={nameKey}
          cx="50%"
          cy="50%"
          outerRadius={size * outerRadius}
          innerRadius={size * innerRadius}
          label={label}>
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colorList[index % colorList.length]} />
          ))}
        </Pie>
      </PieChartRecharts>
    </>
  );
};

export default PieChart;
