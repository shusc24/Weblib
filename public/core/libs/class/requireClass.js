/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype

define([""], function() {

	//initializing是为了解决我们之前说的继承导致原型有多余参数的问题。当我们直接将父类的实例赋值给子类原型时。是会调用一次父类的构造函数的。所以这边会把真正的构造流程放到init函数里面，通过initializing来表示当前是不是处于构造原型阶段，为true的话就不会调用init。
	//fnTest用来匹配代码里面有没有使用super关键字。对于一些浏览器`function(){xyz;}`会生成个字符串，并且会把里面的代码弄出来，有的浏览器就不会。`/xyz/.test(function(){xyz;})`为true代表浏览器支持看到函数的内部代码，所以用`/\b_super\b/`来匹配。如果不行，就不管三七二十一。所有的函数都算有super关键字，于是就是个必定匹配的正则。
	var initializing = false,
		fnTest = /xyz/.test(function() {
			xyz;
		}) ? /\b_super\b/ : /.*/;

	// The base Class implementation (does nothing)
	// 超级父类
	this.Class = function() {};

	// Create a new Class that inherits from this class
	// 生成一个类，这个类会具有extend方法用于继续继承下去
	Class.extend = function(prop) {
		//保留当前类，一般是父类的原型
		//this指向父类。初次时指向Class超级父类
		var _super = this.prototype;

		// Instantiate a base class (but only create the instance,
		// don't run the init constructor)
		//开关 用来使原型赋值时不调用真正的构成流程
		initializing = true;
		var prototype = new this();
		initializing = false;

		// Copy the properties over onto the new prototype
		for(var name in prop) {
			// Check if we're overwriting an existing function
			//这边其实就是很简单的将prop的属性混入到子类的原型上。如果是函数我们就要做一些特殊处理
			prototype[name] = typeof prop[name] == "function" &&
				typeof _super[name] == "function" && fnTest.test(prop[name]) ?
				(function(name, fn) {
					//通过闭包，返回一个新的操作函数.在外面包一层，这样我们可以做些额外的处理
					return function() {
						var tmp = this._super;

						// Add a new ._super() method that is the same method
						// but on the super-class
						// 调用一个函数时，会给this注入一个_super方法用来调用父类的同名方法
						this._super = _super[name];

						// The method only need to be bound temporarily, so we
						// remove it when we're done executing
						//因为上面的赋值，是的这边的fn里面可以通过_super调用到父类同名方法
						var ret = fn.apply(this, arguments);
						//离开时 保存现场环境，恢复值。
						this._super = tmp;

						return ret;
					};
				})(name, prop[name]) :
				prop[name];
		}

		// 这边是返回的类，其实就是我们返回的子类
		function Class() {
			// All construction is actually done in the init method
			if(!initializing && this.init)
				this.init.apply(this, arguments);
		}

		// 赋值原型链，完成继承
		Class.prototype = prototype;

		// 改变constructor引用
		Class.prototype.constructor = Class;

		// 为子类也添加extend方法
		Class.extend = arguments.callee;

		return Class;

	}
	
	return Class

})