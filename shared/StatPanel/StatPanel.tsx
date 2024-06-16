import { Flex } from 'antd';
import s from './StatPanel.module.scss';
import classNames from 'classnames/bind';
import { CSSProperties } from 'react';
const cn = classNames.bind(s);

interface StatPanelProps {
  style?: CSSProperties;
  data: {
    id: number;
    value: string;
    title?: string;
    text: string;
  }[];
}

const StatPanel = ({ data, style }: StatPanelProps) => {
  return (
    <Flex style={style} gap={50} className={cn('activity-state')}>
      {data.map((item) => (
        <Flex key={item.id} vertical className={cn('activity-state__item')} gap={15}>
          {item.title && <p style={{ fontSize: 15 }}>{item.title}</p>}
          <p>
            {item.value} <span>{item.text}</span>
          </p>
        </Flex>
      ))}
    </Flex>
  );
};

export default StatPanel;
