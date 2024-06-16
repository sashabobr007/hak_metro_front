import { Tag } from 'antd';
import classNames from 'classnames/bind';
import s from './RequestList.module.scss';
import RequestItem from '@src/shared/RequestList/RequestItem/RequestItem';
const cn = classNames.bind(s);

interface RequestListType {
  id: string;
  tag: string;
  title: string;
  text: string;
}

interface RequestListProps {
  list: any[];
}

const RequestList = ({ list }: RequestListProps) => {
  return (
    <div className={cn('request-list')}>
      {list.map((el) => (
        <RequestItem item={el} />
      ))}
    </div>
  );
};

export default RequestList;
