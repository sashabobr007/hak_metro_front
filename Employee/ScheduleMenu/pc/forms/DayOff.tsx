import { Button, DatePicker, Flex, Form } from 'antd';
import React from 'react';

const DayOff = () => {
  const [form] = Form.useForm();

  return (
    <div style={{ maxWidth: 520 }}>
      <Form
        form={form}
        labelCol={{ flex: '200px' }}
        labelWrap
        labelAlign="left"
        colon={false}>
        <Form.Item name={'dayOffDate'} label={'Выберете даты отдыха'}>
          <DatePicker.RangePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item>
          <Flex justify="end" gap={10}>
            <Button htmlType="reset">отмена</Button>
            <Button
              htmlType="reset"
              type="primary"
              style={{ background: 'black', paddingInline: 30 }}>
              сохранить
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DayOff;
