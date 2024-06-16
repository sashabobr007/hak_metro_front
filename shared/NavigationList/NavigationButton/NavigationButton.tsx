import { Col, Flex } from 'antd';
import React from 'react';
import { ReactComponent as LunchIcon } from '@icons/lunch.svg';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import s from './NavigationButton.module.scss';

const cn = classNames.bind(s);

interface NavigationButtonProps {
  data: {
    id: number;
    title: string;
    text: string;
    link?: string;
  };
  onClick?: (value: string) => void;
}

const NavigationButton = ({ data, onClick }: NavigationButtonProps) => {
  const navigate = useNavigate();
  const { id, title, text, link } = data;

  return (
    <Col
      key={id}
      onClick={() => {
        if (link) {
          if (onClick) {
            onClick(link);
          } else {
            navigate(link);
          }
        }
      }}
      className={cn('container')}>
      {title === 'Время обеда' ? (
        <Flex justify="space-between">
          <div>
            <p className={cn('title')}>{title}</p>
            <p className={cn('text')}>{text}</p>
          </div>

          <LunchIcon />
        </Flex>
      ) : (
        <>
          <p className={cn('title')}>{title}</p>
          <p className={cn('text')}>{text}</p>
        </>
      )}
    </Col>
  );
};

export default NavigationButton;
