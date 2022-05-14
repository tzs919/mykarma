class MyClass {
	constructor() {
		console.log('initiate')
	}
	
	add(arg1, arg2) {
		const res = arg1 + arg2
		return res
	}
	
	sayHello(str) {
		console.log(str)
	}
	
	callAnotherFn(arg1, arg2) {
		this.sayHello('hello world')
		return this.add(arg1, arg2)
	}

	callTheCallback(callback) {
		callback()
	}
}


module.exports = MyClass
