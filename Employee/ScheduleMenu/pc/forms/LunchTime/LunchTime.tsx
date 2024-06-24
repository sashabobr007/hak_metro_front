import { Avatar, Button, Checkbox, DatePicker, Flex, Form } from 'antd';
import React from 'react';
import s from './LunchTime.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(s);

const LunchTime = () => {
  const [form] = Form.useForm();

  return (
    <div style={{ maxWidth: 520 }}>
      <Form
        form={form}
        labelCol={{ flex: '200px' }}
        labelWrap
        labelAlign="left"
        colon={false}>
        <Form.Item name={'lunchTime'} label={'Выберете время обеда'}>
          <DatePicker.TimePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          className={cn('custom-form-item')}
          name={'lunchDay'}
          label={'Выберите даты для применения расписания'}>
          <DatePicker.RangePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          className={cn('custom-form-item')}
          name={'applyWorkDay'}
          label={'Применить ко всем рабочим дням'}>
          <Checkbox>да</Checkbox>
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

export default LunchTime;
