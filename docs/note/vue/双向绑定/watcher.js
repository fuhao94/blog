/**
 * Created by zhangfuhao on 2020/4/6.
 */

class Watcher {
	/**
	 *
	 * @param vm 一个Vue的实例对象；
	 * @param exp 是node节点的v-model或v-on：click等指令的属性值。如v-model="name"，exp就是name;
	 * @param cb 是Watcher绑定的更新函数;
	 */
	constructor(vm, exp, cb) {
		this.vm = vm;
		this.exp = exp;
		this.cb = cb;
		this.value = this.get();  // 将自己添加到订阅器的操作
	}

	get() {
		Dep.target = this;  // 缓存自己
		let value = this.vm.data[this.exp]  // 强制执行监听器里的get函数
		Dep.target = null;  // 释放自己
		return value;
	}

	update() {
		let value = this.vm.data[this.exp];
		let oldVal = this.value;
		if (value !== oldVal) {
			this.value = value;
			this.cb.call(this.vm, value, oldVal);
		}
	}
}