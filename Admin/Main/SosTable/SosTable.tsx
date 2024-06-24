import { api } from '@src/api/myApi/api';
import { EmergencyCaseType, endpointEnum } from '@src/api/myApi/api.types';
import { Avatar, Flex, Table, TableProps } from 'antd';
import React, { useEffect, useState } from 'react';

interface DataType {
  key: string;
  employee: {
    image: string;
    name: string;
    position: string;
    id_worker: string;
  };
  text: string;
  date: string;
}

const SosTable = () => {
  const [data, setData] = useState<EmergencyCaseType[] | null>(null);

  useEffect(() => {
    api.get<EmergencyCaseType[]>(endpointEnum.emergency_case_get).then((data) => {
      setData(data);
    });
  }, []);

  const columns: TableProps<DataType>['columns'] = [
    {
      width: 300,
      title: 'Сотрудник',
      key: 'employee',
      dataIndex: 'employee',
      render: (value: DataType['employee']) => (
        <Flex gap={15} align="center">
          <Avatar size={48} src={value.image} />
          <Flex vertical>
            <span style={{ fontSize: 16 }}>{value.id_worker}</span>
            <span style={{ color: '#939393', fontSize: 14 }}>{value.position}</span>
          </Flex>
        </Flex>
      ),
    },
    {
      title: 'Текст',
      key: 'text',
      dataIndex: 'text',
    },
    {
      title: 'Дата',
      key: 'date',
      dataIndex: 'date',
    },
  ];

  const tableData: DataType[] | undefined = data?.map((item) => ({
    key: item.id_emergency.toString(),
    text: item.text_emergency,
    date: item.date_emergency,
    employee: {
      id_worker: item.id_worker,
      image: `/persons/${Math.floor(Math.random() * 10) + 1}.jpg`,
      name: item.fio_worker,
      position: '',
    },
  }));

  return <Table bordered columns={columns} dataSource={tableData ?? []} />;
};

export default SosTable;
