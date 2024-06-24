import { Col, Flex, Row } from 'antd';
import React from 'react';
import s from './GeneralBlock.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(s);

const InfoBlock = () => {
  return (
    <Flex className={cn('container')} vertical gap={20} justify="space-between">
      <span className={cn('text')}>Среднее время в пути</span>
      <div>
        <span className={cn('value')}>
          22 <span className={cn('symbol')}>мин</span>
        </span>
        <span className={cn('add-info')}>
          <span className={cn('add-info__value')}>3 ч</span> в день
        </span>
      </div>
    </Flex>
  );
};

const GeneralBlock = () => {
  return (
    <div className={cn('wrapper')}>
      <Row gutter={[12, 12]} style={{ marginBottom: 12 }}>
        <Col span={12}>
          <InfoBlock />
        </Col>
        <Col span={12}>
          <InfoBlock />
        </Col>
      </Row>
      <Row gutter={[12, 12]}>
        <Col span={12}>
          <InfoBlock />
        </Col>
      </Row>
    </div>
  );
};

export default GeneralBlock;
