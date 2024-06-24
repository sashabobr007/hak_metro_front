import {
  Button,
  Checkbox,
  DatePicker,
  Flex,
  Form,
  Input,
  Radio,
  Select,
  Space,
  TimePicker,
  Typography,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useMask } from '@react-input/mask';
import classNames from 'classnames/bind';
import s from './CreateRequestMOB.module.scss';
import SaveButton from '@src/shared/mob/SaveButton/SaveButton';
import { dateFormat, timeFormat } from '@src/const';
const cn = classNames.bind(s);

interface ResultType {
  global_id: number;
  Number: number;
  Cells: {
    ID: number;
    Station: string;
    Line: string;
    AdmArea: string;
    District: string;
    MCDStation: string[];
    AeroexpressStation: string[];
    RailwayStation: string[];
    RailwayTerminal: string[];
    ObjectStatus: string;
    global_id: number;
  };
}

enum CreateReuqestEnum {
  fio = 'fio',
  tel = 'tel',
  dateTrip = 'dateTrip',
  timeTrip = 'timeTrip',
  startStation = 'startStation',
  endStation = 'endStation',
  womenCount = 'womenCount',
  menCount = 'menCount',
  meetingPoint = 'meetingPoint',
  meetingPointText = 'meetingPointText',
  category = 'category',
  withBaggage = 'withBaggage',
  telegram = 'telegram',
  comment = 'comment',
  baggageWeight = 'baggageWeight',
  baggageType = 'baggageType',
}

const CreateRequestMOB = () => {
  const [form] = Form.useForm();
  const inputRef = useMask({ mask: '+7 (___) ___-__-__', replacement: { _: /\d/ } });

  const [stations, setStations] = useState<ResultType[] | null>(null);
  const withBaggage = Form.useWatch(CreateReuqestEnum.withBaggage, form);

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
    <div>
      <Typography.Title level={4} style={{ marginBottom: 20 }}>
        Новая заявка
      </Typography.Title>
      <Form
        layout="vertical"
        labelWrap
        colon={false}
        style={{ maxWidth: 620 }}
        form={form}
        onFinish={console.log}>
        <Form.Item name={CreateReuqestEnum.fio} label="ФИО">
          <Select
            placeholder="ФИО"
            showSearch
            options={[
              { label: 'Иванов Иван Иванович', value: 'Иванов Иван Иванович' },
              { label: 'Федеров Иван Иванович', value: 'Федеров Иван Иванович' },
              { label: 'Семенов Иван Иванович', value: 'Семенов Иван Иванович' },
            ]}
          />
        </Form.Item>

        <Form.Item name={CreateReuqestEnum.tel} label="Телефон">
          <input
            className={cn('input')}
            inputMode="tel"
            ref={inputRef}
            placeholder="+7 (XXX) XXX XX-XX"
          />
        </Form.Item>

        <Form.Item name={CreateReuqestEnum.dateTrip} label="Дата поездки">
          <DatePicker format={dateFormat} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item name={CreateReuqestEnum.timeTrip} label="Время поездки">
          <TimePicker format={timeFormat} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item name={CreateReuqestEnum.startStation} label="Станция отправления">
          <Select
            placeholder="Станция отправления"
            showSearch
            options={stations?.map((el) => ({
              label: el.Cells.Station,
              value: el.Cells.ID,
            }))}
          />
        </Form.Item>

        <Form.Item name={CreateReuqestEnum.endStation} label="Станция прибытия">
          <Select
            placeholder="Станция прибытия"
            showSearch
            options={stations?.map((el) => ({
              label: el.Cells.Station,
              value: el.Cells.ID,
            }))}
          />
        </Form.Item>

        <Form.Item
          name={CreateReuqestEnum.menCount}
          label="Кол-во необходимых сотрудников мужчин">
          <Select
            placeholder="Выберите количество"
            options={[
              { label: 0, value: 0 },
              { label: 1, value: 1 },
              { label: 2, value: 2 },
              { label: 3, value: 3 },
              { label: 4, value: 4 },
            ]}
          />
        </Form.Item>

        <Form.Item
          name={CreateReuqestEnum.womenCount}
          label="Кол-во необходимых сотрудников женщин">
          <Select
            placeholder="Выберите количество"
            options={[
              { label: 0, value: 0 },
              { label: 1, value: 1 },
              { label: 2, value: 2 },
              { label: 3, value: 3 },
              { label: 4, value: 4 },
            ]}
          />
        </Form.Item>

        <Form.Item
          className={cn('custom-form-item')}
          name={CreateReuqestEnum.meetingPoint}
          label={
            'Выберите место встречи с инспектором службы на станции отправления:'
          }>
          <Radio.Group defaultValue={1}>
            <Space direction="vertical">
              <Radio value={1}>У входных дверей</Radio>
              <Radio value={2}>У турникетов</Radio>
              <Radio value={3}>В вестибюле</Radio>
              <Radio value={4}>На платформе, в центре зала</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name={CreateReuqestEnum.meetingPointText}
          label={'Описание места встречи'}>
          <Input placeholder="Описание места встречи" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item name={CreateReuqestEnum.category} label={'Категория заявки'}>
          <Input placeholder="Категория заявки" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name={CreateReuqestEnum.withBaggage}
          label={'Наличие багажа'}
          valuePropName="checked">
          <Checkbox>есть</Checkbox>
        </Form.Item>

        <Form.Item
          hidden={!withBaggage}
          name={CreateReuqestEnum.baggageWeight}
          label={'Вес багажа (кг)'}>
          <Input type="number" placeholder="Введите вес багажа (от 1 до 30)" />
        </Form.Item>

        <Form.Item
          hidden={!withBaggage}
          name={CreateReuqestEnum.baggageType}
          label={'Тип багажа'}>
          <Select
            placeholder={'Выберите тип багажа'}
            options={[
              {
                label: 'крупногабаритный багаж (коляска, велосипед и т.д.)',
                value: 1,
              },
              {
                label: 'сумка',
                value: 2,
              },
              {
                label: 'чемодан',
                value: 3,
              },
            ]}
          />
        </Form.Item>

        <Form.Item name={CreateReuqestEnum.comment} label={'Комментарий'}>
          <Input placeholder="Комментарий" style={{ width: '100%' }} />
        </Form.Item>

        <Flex justify="flex-end" gap={10} style={{ marginTop: 50 }}>
          <Form.Item style={{ width: '100%' }}>
            <SaveButton />
          </Form.Item>
        </Flex>
      </Form>
    </div>
  );
};

export default CreateRequestMOB;
