import SaveButton from '@src/shared/mob/SaveButton/SaveButton';
import { Avatar, Button, DatePicker, Flex, Form, Input, Select, Space } from 'antd';
import React from 'react';
import { CurrentMenuEnum } from '../ScheduleMenuMOB';

enum workDateForm {
  workDate1 = 'workDate1',
  workDate2 = 'workDate2',
}

const WorkDate = ({
  setCurrentMenu,
}: {
  setCurrentMenu: (value: CurrentMenuEnum | null) => void;
}) => {
  const [form] = Form.useForm();

  return (
    <div style={{ maxWidth: 620 }}>
      <Form form={form} layout="vertical">
        <Form.Item name={workDateForm.workDate1} label={'Выберите дни работы'}>
          <Select
            mode="multiple"
            placeholder={'Выберите дни работы'}
            options={[
              { value: 'Понедельник', label: 'Понедельник' },
              { value: 'Вторник', label: 'Вторник' },
              { value: 'Среда', label: 'Среда' },
              { value: 'Четверг', label: 'Четверг' },
              { value: 'Пятница', label: 'Пятница' },
              { value: 'Суббота', label: 'Суббота' },
              { value: 'Воскресенье', label: 'Воскресенье' },
            ]}
          />
        </Form.Item>

        <Form.Item name={workDateForm.workDate2} label={'Выберите график работы'}>
          <Select
            placeholder={'Выберите график работы'}
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

export default WorkDate;
