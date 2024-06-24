import { dateFormat } from '@src/const';
import SaveButton from '@src/shared/mob/SaveButton/SaveButton';
import { Button, Checkbox, DatePicker, Flex, Form, TimePicker } from 'antd';
import React from 'react';
import { CurrentMenuEnum } from '../ScheduleMenuMOB';

const Schedule = ({
  setCurrentMenu,
}: {
  setCurrentMenu: (value: CurrentMenuEnum | null) => void;
}) => {
  const [form] = Form.useForm();

  return (
    <div style={{ maxWidth: 520 }}>
      <Form form={form} layout="vertical" colon={false}>
        <Form.Item name={'workTime'} label={'Выберете рабочее время'}>
          <DatePicker format={dateFormat} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item>
          <Flex justify="end" gap={10}>
            <SaveButton onClick={() => setCurrentMenu(null)} />
          </Flex>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Schedule;
