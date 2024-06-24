import SaveButton from '@src/shared/mob/SaveButton/SaveButton';
import { Button, DatePicker, Flex, Form, Select, TimePicker } from 'antd';
import React from 'react';
import { CurrentMenuEnum } from '../ScheduleMenuMOB';

const AddTurn = ({
  setCurrentMenu,
}: {
  setCurrentMenu: (value: CurrentMenuEnum | null) => void;
}) => {
  const [form] = Form.useForm();

  return (
    <div style={{ maxWidth: 520 }}>
      <Form form={form} layout="vertical" colon={false}>
        <Form.Item name={'timeTurn'} label={'Дата дополнительной смены'}>
          <DatePicker placeholder="Выберите дату" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item name={'dateTurn'} label={'Выберете рабочий график'}>
          <Select
            placeholder={'Выберете рабочий график'}
            options={[
              { value: '1', label: '1' },
              { value: '2', label: '2' },
              { value: '1(Н)', label: '1(Н)' },
              { value: '2(Н)', label: '2(Н)' },
              { value: '5', label: '5' },
            ]}
          />
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

export default AddTurn;
