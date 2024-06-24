import { useMask } from '@react-input/mask';
import {
  Button,
  Checkbox,
  Flex,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Space,
  Typography,
} from 'antd';
import classNames from 'classnames/bind';
import s from './AddEmployee.module.scss';
import { getInitials } from '@src/utils/getInitials';
import { useEffect } from 'react';
import SaveButton from '@src/shared/mob/SaveButton/SaveButton';
const cn = classNames.bind(s);

enum AddEmployeeEnum {
  fio = 'fio',
  initials = 'initials',
  gender = 'gender',
  turn = 'turn',
  position = 'position',
  workTime = 'workTime',
  workPhone = 'workPhone',
  personalPhone = 'personalPhone',
  tableNumber = 'tableNumber',
  hasProblem = 'hasProblem',
}

const AddEmployee = () => {
  const [form] = Form.useForm();
  const fio = Form.useWatch(AddEmployeeEnum.fio, form);
  const personalPhoneRef = useMask({
    mask: '+7 (___) ___-__-__',
    replacement: { _: /\d/ },
  });
  const workPhoneRef = useMask({
    mask: '+7 (___) ___-__-__',
    replacement: { _: /\d/ },
  });

  useEffect(() => {
    form.setFieldValue(AddEmployeeEnum.initials, getInitials(fio));
  }, [fio]);

  return (
    <div>
      <h2 className={cn('page__title')}>Добавить сотрудника</h2>
      <Form
        labelWrap
        labelCol={{ flex: '220px' }}
        labelAlign="left"
        colon={false}
        style={{ maxWidth: 620 }}
        form={form}
        onFinish={console.log}>
        <Form.Item name={AddEmployeeEnum.fio} label="ФИО">
          <Input placeholder="ФИО" />
        </Form.Item>

        <Form.Item
          dependencies={[[AddEmployeeEnum.fio]]}
          name={AddEmployeeEnum.initials}
          label="Фамилия и инициалы">
          <Input
            disabled
            placeholder="Фамилия и инициалы"
            style={{ width: '100%' }}
          />
        </Form.Item>

        <Form.Item
          className={cn('custom-form-item')}
          name={AddEmployeeEnum.gender}
          label={'Пол сотрудника'}>
          <Radio.Group>
            <Space direction="vertical">
              <Radio value={1}>Мужской</Radio>
              <Radio value={2}>Женский</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item name={AddEmployeeEnum.turn} label={'Смена'}>
          <Select
            placeholder="Смена"
            style={{ width: '100%' }}
            options={[
              { label: '1', value: 1 },
              { label: '2', value: 2 },
              { label: '1(Н)', value: 3 },
              { label: '2(Н)', value: 4 },
              { label: '5', value: 5 },
            ]}
          />
        </Form.Item>

        <Form.Item name={AddEmployeeEnum.position} label={'Должность'}>
          <Select
            placeholder="Должность"
            style={{ width: '100%' }}
            options={[
              { label: 'ЦСИ', value: 1 },
              { label: 'ЦИ', value: 2 },
            ]}
          />
        </Form.Item>

        <Form.Item name={AddEmployeeEnum.workTime} label={'Рабочее время'}>
          <Radio.Group>
            <Space direction="vertical">
              <Radio value={1}>07:00-19:00</Radio>
              <Radio value={2}>08:00-20:00</Radio>
              <Radio value={3}>20:00-08:00</Radio>
              <Radio value={4}>08:00-17:00</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item name={AddEmployeeEnum.workPhone} label={'Рабочий телефон'}>
          <input
            className={cn('input')}
            inputMode="tel"
            ref={workPhoneRef}
            placeholder="+7 (XXX) XXX XX-XX"
          />
        </Form.Item>

        <Form.Item name={AddEmployeeEnum.personalPhone} label={'Личный телефон'}>
          <input
            className={cn('input')}
            inputMode="tel"
            ref={personalPhoneRef}
            placeholder="+7 (XXX) XXX XX-XX"
          />
        </Form.Item>

        <Form.Item name={AddEmployeeEnum.tableNumber} label={'Табельный номер'}>
          <InputNumber
            maxLength={8}
            placeholder="Табельный номер"
            style={{ width: '100%' }}
          />
        </Form.Item>

        <Form.Item
          name={AddEmployeeEnum.hasProblem}
          label={'Наличие ограничений по здоровью'}>
          <Checkbox>есть</Checkbox>
        </Form.Item>

        <Flex
          className={cn('pc-btn')}
          justify="flex-end"
          gap={10}
          style={{ marginTop: 50 }}>
          <Form.Item>
            <Button onClick={() => form.resetFields()}>отмена</Button>
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              type="primary"
              style={{ background: '#000', paddingInline: 35 }}>
              сохранить
            </Button>
          </Form.Item>
        </Flex>

        <Form.Item>
          <SaveButton className={cn('mob-btn')} />
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddEmployee;
