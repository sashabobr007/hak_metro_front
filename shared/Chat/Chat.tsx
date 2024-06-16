import { Button, Form, Input, Typography } from 'antd';
import { observer } from 'mobx-react-lite';
import s from './Chat.module.scss';
import classNames from 'classnames/bind';
import { SendOutlined } from '@ant-design/icons';
import { chatStore } from './ChatStore';
import Message from './Message/Message';
import { useEffect } from 'react';
const cn = classNames.bind(s);

type valueType = {
  text: string;
};

interface ChatProps {
  isChat: boolean;
  setIsChat: (value: boolean) => void;
}

const Chat = observer(({ setIsChat, isChat }: ChatProps) => {
  const chatMessages = chatStore.chatMessages;
  const [form] = Form.useForm();

  useEffect(() => console.log(isChat), [isChat]);

  const onFinish = (value: valueType) => {
    if (value.text) {
      chatStore.addMessage({
        value: value.text,
        from: 'user',
        date: Date.now(),
      });

      chatStore.addMessage({
        value: 'hello',
        from: 'bot',
        date: Date.now(),
      });

      form.resetFields();
    }
  };

  return (
    <div
      onClick={() => setIsChat(false)}
      className={cn(`overlay${isChat ? '' : '__hidden'}`)}>
      {isChat && (
        <div onClick={(e) => e.stopPropagation()} className={cn(`container`)}>
          <div className={cn('chat')}>
            <div className={cn('messages')}>
              {chatMessages.map((messageData) => (
                <Message messageData={messageData} />
              ))}
            </div>

            <div>
              <Form className={cn('form')} form={form} onFinish={onFinish}>
                <Form.Item className={cn('form__input')} name={'text'}>
                  <Input
                    autoComplete="off"
                    autoFocus
                    placeholder="Введите сообщение..."
                  />
                </Form.Item>

                <Form.Item className={cn('form__button')}>
                  <Button
                    htmlType="submit"
                    icon={
                      <SendOutlined
                        style={{ fontSize: '18px' }}
                        className={cn('form__button-icon')}
                      />
                    }
                  />
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default Chat;
