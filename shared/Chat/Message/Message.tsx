import classNames from 'classnames/bind';
import s from './Message.module.scss';
import { timestampToTime } from '../../../utils/timestampToTime';
import { MessageType } from '../ChatStore';

const cn = classNames.bind(s);

interface MessageProps {
  messageData: MessageType;
}

const Message = ({ messageData }: MessageProps) => {
  const { id, value, date, from } = messageData;
  return (
    <div
      className={cn(`message`)}
      style={{ alignSelf: from === 'bot' ? 'flex-start' : 'flex-end' }}
      key={id}>
      {from === 'bot' && (
        <img
          src="https://cdn-icons-png.freepik.com/512/3558/3558860.png?ga=GA1.1.1417200681.1717224983"
          style={{ width: 30, height: 30, marginRight: 10 }}
        />
      )}
      <div className={cn(`message__${from}`)}>
        <div className={cn(`message__${from}-date`)}>{timestampToTime(date)}</div>
        <div className={cn(`message__${from}-text`)}>{value}</div>
      </div>
    </div>
  );
};

export default Message;
