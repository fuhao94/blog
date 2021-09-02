class Emitter {
  constructor() {
    // 消息状态存储
    this.list = {};
  }

  /**
   * 订阅
   * @param event 事件名
   * @param fn    方法
   */
  on(event, fn) {
    if(this.list[event]) {
      this.list[event].push(fn);
      return;
    }
    this.list[event] = [fn];
  }

  /**
   * 发布
   */
  emit() {
    const event = [].shift.call(arguments);
    const fns = [...this.list[event]];

    if(!fns || fns.length === 0) {
      return;
    }

    fns.forEach(fn => fn.apply(this, arguments));
  }
}

const user1 = (content) => console.log('用户1订阅了:', content);
const user2 = (content) => console.log('用户2订阅了:', content);

const emit = new Emitter();

emit.on('article', user1);
emit.on('article', user2);

/**
 * 用户1订阅了: 黄焖 Jimmy 饭
 * 用户2订阅了: 黄焖 Jimmy 饭
 */
emit.emit('article', '黄焖 Jimmy 饭');
