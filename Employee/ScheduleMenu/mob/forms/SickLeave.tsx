import { dateFormat } from '@src/const';
import SaveButton from '@src/shared/mob/SaveButton/SaveButton';
import { Button, DatePicker, Flex, Form, message } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { CurrentMenuEnum } from '../ScheduleMenuMOB';

const SickLeave = ({
  setCurrentMenu,
}: {
  setCurrentMenu: (value: CurrentMenuEnum | null) => void;
}) => {
  const [form] = Form.useForm();
  const startData = Form.useWatch('dayOffDate1', form);
  const endData = Form.useWatch('dayOffDate2', form);

  useEffect(() => {
    if (endData && dayjs(startData).isAfter(endData)) {
      form.setFieldValue('dayOffDate2', undefined);
      message.info('Дата начала должна быть раньше даты окончания');
    }
  }, [startData]);

  return (
    <div style={{ maxWidth: 520 }}>
      <Form form={form} layout="vertical" colon={false}>
        <Form.Item name={'dayOffDate1'} label={'Дата начала больничного'}>
          <DatePicker
            placeholder="Выберите дату начала"
            format={dateFormat}
            style={{ width: '100%' }}
          />
        </Form.Item>

        <Form.Item
          dependencies={[['dayOffDate1']]}
          name={'dayOffDate2'}
          label={'Дата окончания больничного'}>
          <DatePicker
            placeholder="Выберите дату окончания"
            disabled={!startData}
            format={dateFormat}
            minDate={startData}
            style={{ width: '100%' }}
          />
        </Form.Item>

        <Form.Item>
          <Flex justify="end" gap={10}>
            <SaveButton />
          </Flex>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SickLeave;
