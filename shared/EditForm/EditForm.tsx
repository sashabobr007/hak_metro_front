import { useMask } from '@react-input/mask';
import { dateFormat, timeFormat } from '@src/const';
import { ResultType } from '@src/pages/Passanger/CreateRequest/mob/CreateRequestMOB';
import {
  Button,
  Checkbox,
  DatePicker,
  Flex,
  Form,
  Input,
  Select,
  TimePicker,
} from 'antd';
import React, { useEffect, useState } from 'react';
import s from './EditForm.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(s);

interface EditFormProps {
  dataDefault: any;
  setEditMode: (value: boolean) => void;
}

enum EditReuqestEnum {
  fio = 'fio',
  tel = 'tel',
  dateTrip = 'dateTrip',
  timeTrip = 'timeTrip',
  startStation = 'startStation',
  endStation = 'endStation',
  place = 'place',
  meetingPointText = 'meetingPointText',
  category = 'category',
  withBaggage = 'withBaggage',
  baggageWeight = 'baggageWeight',
  baggageType = 'baggageType',
  comment = 'comment',
}

const EditForm = ({ dataDefault, setEditMode }: EditFormProps) => {
  const [form] = Form.useForm();
  const inputRef = useMask({ mask: '+7 (___) ___-__-__', replacement: { _: /\d/ } });

  const [stations, setStations] = useState<ResultType[] | null>(null);
  const withBaggage = Form.useWatch(EditReuqestEnum.withBaggage, form);

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
    <Form
      labelWrap
      labelCol={{ flex: '220px' }}
      labelAlign="left"
      colon={false}
      style={{ maxWidth: 620 }}
      form={form}
      onFinish={console.log}
      initialValues={dataDefault}>
      <Form.Item name={EditReuqestEnum.fio} label="ФИО">
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

      <Form.Item name={EditReuqestEnum.tel} label="Телефон">
        <input
          className={cn('input')}
          inputMode="tel"
          ref={inputRef}
          placeholder="+7 (XXX) XXX XX-XX"
        />
      </Form.Item>

      <Form.Item name={EditReuqestEnum.dateTrip} label="Дата поездки">
        <DatePicker format={dateFormat} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item name={EditReuqestEnum.timeTrip} label="Время поездки">
        <TimePicker format={timeFormat} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item name={EditReuqestEnum.startStation} label="Станция отправления">
        <Select
          placeholder="Станция отправления"
          showSearch
          options={stations?.map((el) => ({
            label: el.Cells.Station,
            value: el.Cells.ID,
          }))}
        />
      </Form.Item>

      <Form.Item name={EditReuqestEnum.endStation} label="Станция прибытия">
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
        className={cn('custom-form-item')}
        style={{ marginBottom: 60 }}
        name={EditReuqestEnum.place}
        label={
          'Выберите место встречи с инспектором службы на станции отправления:'
        }>
        <Input />
      </Form.Item>

      <Form.Item
        name={EditReuqestEnum.meetingPointText}
        label={'Описание места встречи'}>
        <Input placeholder="Описание места встречи" style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        name={EditReuqestEnum.withBaggage}
        label={'Наличие багажа'}
        valuePropName="checked">
        <Checkbox>есть</Checkbox>
      </Form.Item>

      <Form.Item
        hidden={!withBaggage}
        name={EditReuqestEnum.baggageWeight}
        label={'Вес багажа (кг)'}>
        <Input type="number" placeholder="Введите вес багажа (от 1 до 30)" />
      </Form.Item>

      <Form.Item
        hidden={!withBaggage}
        name={EditReuqestEnum.baggageType}
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

      <Form.Item name={EditReuqestEnum.comment} label={'Комментарий'}>
        <Input placeholder="Комментарий" style={{ width: '100%' }} />
      </Form.Item>

      <Flex justify="flex-end" gap={10} style={{ marginTop: 50 }}>
        <Form.Item>
          <Button onClick={() => setEditMode(false)}>отмена</Button>
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
    </Form>
  );
};

export default EditForm;
