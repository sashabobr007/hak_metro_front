import { Avatar, Button, DatePicker, Flex, Form, Input, Space } from 'antd';
import React from 'react';

const WorkDate = () => {
  const [form] = Form.useForm();

  return (
    <div style={{ maxWidth: 620 }}>
      <Form form={form}>
        <Form.Item name={'workDate'} label={'Дата выхода на работу'}>
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

export default WorkDate;
