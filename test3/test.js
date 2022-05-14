var sinon = require('sinon');
var assert = require('assert');

describe('Array', function() {
	describe('#testsinon1', function() {
		it('test1....', function() {
			var spy = sinon.spy();

			//我们可以像调用函数一样调用spy
			spy('Hello', 'World');

			//我们可以得到调用信息
			console.log(spy.firstCall.args); //output: ['Hello', 'World']
		});
	});
	describe('#testsinon2', function() {
		it('test2....', function() {
			var user = {
				setName: function(name) {
					this.name = name;
				}
			}

			//为user.setName创建一个spy
			var setNameSpy = sinon.spy(user, 'setName');

			//现在，每次调用目标函数，spy都会记录相关信息
			user.setName('Darth Vader');
			user.setName('Darth Vader1');
			user.setName('Darth Vader2');

			console.log(setNameSpy.firstCall.args);

			//我们可以使用spy对象查看相关信息
			console.log(setNameSpy.callCount); //output: 3

			//非常重要的步骤--拆除spy
			setNameSpy.restore();
		});
	});
	describe('#testsinon3', function() {
		it('test3....', function() {
			var stub = sinon.stub();

			stub('hello');

			console.log(stub.firstCall.args); //output: ['hello']
		});
	});
});



function myFunction(condition, callback) {
	if (condition) {
		callback();
	}
}
describe('myFunction1', function() {
	it('should call the callback function1', function() {
		var callback = sinon.spy();

		myFunction(true, callback);

		assert(callback.calledOnce);
	});
});

describe('myFunction2', function() {
	it('should call the callback function2', function() {
		var callback = sinon.spy();

		myFunction(true, callback);

		sinon.assert.calledOnce(callback);
	});
});
