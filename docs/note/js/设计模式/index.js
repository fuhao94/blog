class CreateUser {
	constructor(name) {
		this.name = name;
		this.getName();
	}

	getName() {
		return this.name;
	}
}

// 代理实现单例模式
var ProxyMode = (function () {
	var instance = null;
	return function (name) {
		if (!instance) {
			instance = new CreateUser(name);
		}
		return instance;
	}
})();

/*策略类*/
var levelOBJ = {
	"A": function (money) {
		return money * 4;
	},
	"B": function (money) {
		return money * 3;
	},
	"C": function (money) {
		return money * 2;
	}
};
/*环境类*/
var calculateBouns = function (level, money) {
	return levelOBJ[level](money);
};
console.log(calculateBouns('A', 10000)); // 40000


var imgFunc = (function () {
	var imgNode = document.createElement('img');
	document.body.appendChild(imgNode);
	return {
		setSrc: function (src) {
			imgNode.src = src;
		}
	}
})();
var proxyImage = (function () {
	var img = new Image();
	img.onload = function () {
		imgFunc.setSrc(this.src);
	};
	return {
		setSrc: function (src) {
			imgFunc.setSrc('./loading,gif');
			img.src = src;
		}
	}
})();
proxyImage.setSrc('./pic.png');


var goods = {
	'red|32G': 3,
	'red|64G': 1,
	'blue|32G': 7,
	'blue|32G': 6
};
//中介者
var mediator = (function () {
	var colorSelect = document.getElementById('colorSelect');
	var memorySelect = document.getElementById('memorySelect');
	var numSelect = document.getElementById('numSelect');
	return {
		changed: function (obj) {
			switch (obj) {
				case colorSelect:
					break;
				case memorySelect:
					break;
				case numSelect:
					break;
			}
		}
	}
})();
colorSelect.onchange = function () {
	mediator.changed(this);
};
memorySelect.onchange = function () {
	mediator.changed(this);
};
numSelect.onchange = function () {
	mediator.changed(this);
};

