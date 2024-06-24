import { timeFormat } from '@src/const';
import SaveButton from '@src/shared/mob/SaveButton/SaveButton';
import { Avatar, Button, Checkbox, DatePicker, Flex, Form } from 'antd';
import dayjs from 'dayjs';
import { CurrentMenuEnum } from '../ScheduleMenuMOB';

const LunchTime = ({
  setCurrentMenu,
}: {
  setCurrentMenu: (value: CurrentMenuEnum | null) => void;
}) => {
  const [form] = Form.useForm();
  const lunchTime = Form.useWatch('lunchTime', form);
  const getTime = () => {
    const hours = dayjs(lunchTime).hour().toString().padStart(2, '0');
    const nextHour = (dayjs(lunchTime).hour() + 1).toString().padStart(2, '0');
    const minutes = dayjs(lunchTime).minute().toString().padStart(2, '0');

    return `${hours}:${minutes} - ${nextHour}:${minutes}`;
  };

  return (
    <div style={{ maxWidth: 520 }}>
      <Form form={form} layout="vertical" colon={false}>
        <Form.Item name={'lunchTime'} label={'Выберете время обеда'}>
          <DatePicker.TimePicker format={timeFormat} style={{ width: '100%' }} />
        </Form.Item>
        <Flex gap={10} style={{ marginBottom: 10 }}>
          <span>Время обеда: </span>
          {lunchTime && <div style={{ textAlign: 'right' }}>{getTime()}</div>}
        </Flex>

        <Form.Item>
          <Flex justify="end" gap={10}>
            <SaveButton onClick={() => setCurrentMenu(null)} />
          </Flex>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LunchTime;
