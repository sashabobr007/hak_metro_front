import { Flex } from 'antd';
import MainStat from './MainStat/MainStat';

interface MainStatListProps {
  list: {
    id: number;
    title: string;
    text: string;
    additional?: string;
  }[];
}

const MainStatList = ({ list }: MainStatListProps) => {
  return (
    <Flex wrap="wrap" gap={20} style={{ marginBottom: 30 }}>
      {list.map((el) => (
        <MainStat block={el} />
      ))}
    </Flex>
  );
};

export default MainStatList;
