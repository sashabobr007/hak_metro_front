import { Button, DatePicker, Flex, Form, TimePicker } from 'antd';
import React from 'react';

const AddTurn = () => {
  const [form] = Form.useForm();

  return (
    <div style={{ maxWidth: 520 }}>
      <Form
        form={form}
        labelCol={{ flex: '200px' }}
        labelWrap
        labelAlign="left"
        colon={false}>
        <Form.Item name={'timeTurn'} label={'Выберете даты отдыха'}>
          <TimePicker.RangePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item name={'dateTurn'} label={'Выберете даты отдыха'}>
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item>
          <Flex justify="end" gap={10}>
            <Button htmlType="reset">отмена</Button>
            <Button
              type="primary"
              htmlType="reset"
              style={{ background: 'black', paddingInline: 30 }}>
              сохранить
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddTurn;
