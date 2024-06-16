import { Flex, Row } from 'antd';
import NavigationButton from './NavigationButton/NavigationButton';

interface NavigationListProps {
  list: {
    id: number;
    title: string;
    text: string;
    link?: string;
  }[][];
  onClick?: (value: string) => void;
}

const NavigationList = ({ list, onClick }: NavigationListProps) => {
  return (
    <Flex wrap="wrap" gap={20} style={{ marginBottom: 40 }}>
      {list.map((col) => (
        <Row justify={'start'} style={{ gap: 30, width: '100%' }}>
          {col.map((data) => (
            <NavigationButton data={data} onClick={onClick} />
          ))}
        </Row>
      ))}
    </Flex>
  );
};

export default NavigationList;
