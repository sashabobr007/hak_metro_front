import { CalendarOutlined, FormOutlined, UserOutlined } from '@ant-design/icons';
import {
  Button,
  Checkbox,
  DatePicker,
  Divider,
  Drawer,
  Flex,
  Form,
  Input,
  Radio,
  Select,
  Space,
  Typography,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { ReactComponent as MetroIcon } from '@icons/metroIcon.svg';
import { ReactComponent as CategoryIcon } from '@icons/categoryIcon.svg';
import { ResultType } from '@src/pages/Passanger/CreateRequest/mob/CreateRequestMOB';
import s from './FilterDrawer.module.scss';
import classNames from 'classnames/bind';
import { dateFormat } from '@src/const';
const cn = classNames.bind(s);

interface FilterDrawerProps {
  open: boolean;
  onClose: () => void;
}

enum FormEnum {
  employee = 'employee',
  startStation = 'startStation',
  requestNumber = 'requestNumber',
  category = 'category',
  requestDays = 'requestDays',
}

const FilterDrawer = ({ open, onClose }: FilterDrawerProps) => {
  const [form] = Form.useForm();
  const [stations, setStations] = useState<ResultType[] | null>(null);

  useEffect(() => {
    async function getData() {
      const data = await fetch(
        'https://apidata.mos.ru/v1/datasets/1488/rows?api_key=434f558e-a296-46e1-8d11-999ef79fb736',
      );
      const result = await data.json();
      setStations(result);
    }

    getData();
  }, []);
  return (
    <Drawer
      style={{ position: 'relative' }}
      title="Фильтры"
      onClose={onClose}
      open={open}>
      <Form
        className={cn('container')}
        layout="vertical"
        form={form}
        onFinish={console.log}>
        <Form.Item
          name={FormEnum.employee}
          label={
            <Flex align="center" gap={15}>
              <UserOutlined style={{ fontSize: 22 }} />
              <span style={{ fontSize: 18, fontWeight: 400 }}>Сотрудник</span>
            </Flex>
          }>
          <Checkbox.Group>
            <Space direction="vertical">
              <Checkbox value={1}>Иванов</Checkbox>
              <Checkbox value={2}>Иванов</Checkbox>
              <Checkbox value={3}>Иванов</Checkbox>
            </Space>
          </Checkbox.Group>
        </Form.Item>
        <Divider />
        <Form.Item
          name={FormEnum.startStation}
          label={
            <Flex align="center" gap={15}>
              <MetroIcon />
              <span style={{ fontSize: 18, fontWeight: 400 }}>
                Станция отправления
              </span>
            </Flex>
          }>
          <Select
            placeholder="Станция отправления"
            showSearch
            options={stations?.map((el) => ({
              label: el.Cells.Station,
              value: el.Cells.ID,
            }))}
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name={FormEnum.requestNumber}
          label={
            <Flex align="center" gap={15}>
              <FormOutlined style={{ fontSize: 22 }} />
              <span style={{ fontSize: 18, fontWeight: 400 }}>По номеру заявки</span>
            </Flex>
          }>
          <Input placeholder="Номер заявки" />
        </Form.Item>
        <Divider />
        <Form.Item
          name={FormEnum.category}
          label={
            <Flex align="center" gap={15}>
              <CategoryIcon />
              <span style={{ fontSize: 18, fontWeight: 400 }}>По категориям</span>
            </Flex>
          }>
          <Checkbox.Group>
            <Space direction="vertical">
              <Checkbox value={1}>Первое</Checkbox>
              <Checkbox value={2}>Второе</Checkbox>
              <Checkbox value={3}>Третье</Checkbox>
            </Space>
          </Checkbox.Group>
        </Form.Item>
        <Divider />
        <Form.Item
          name={FormEnum.requestDays}
          label={
            <Flex align="center" gap={15}>
              <CalendarOutlined style={{ fontSize: 22 }} />
              <span style={{ fontSize: 18, fontWeight: 400 }}>Дни заявок</span>
            </Flex>
          }>
          <DatePicker.RangePicker format={dateFormat} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            padding: '0 24px',
          }}>
          <Divider />
          <Flex gap={10}>
            <Button style={{ flex: 1 }} type="default" htmlType="reset">
              Сбросить все
            </Button>
            <Button style={{ flex: 1 }} type="primary" htmlType="submit">
              Применить
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default FilterDrawer;
