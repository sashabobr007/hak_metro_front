import { autorun, makeAutoObservable } from 'mobx';

export interface MessageType {
  id?: number;
  value: string;
  from: 'user' | 'bot';
  date: number;
}

class ChatStore {
  chatMessages: MessageType[] = [
    { from: 'bot', value: 'Здравствуйте', date: Date.now() },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addMessage(value: MessageType) {
    this.chatMessages.unshift({ ...value, id: this.chatMessages.length });
  }
}

export const chatStore = new ChatStore();

autorun(() => {
  console.log(chatStore.chatMessages);
});
