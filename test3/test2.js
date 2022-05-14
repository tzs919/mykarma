// 来自官网：https://sinonjs.org/

function once(fn) {
	var returnValue,
		called = false;
	return function() {
		if (!called) {
			called = true;
			returnValue = fn.apply(this, arguments);
		}
		return returnValue;
	};
}

const sinon = require("sinon");
const referee = require("@sinonjs/referee");
const assert = referee.assert;

describe('test2', function() {
	it("calls the original function", function() {
		var callback = sinon.fake();
		var proxy = once(callback);

		proxy();
		proxy();

		assert(callback.called);

		assert(callback.calledOnce);
		// ...or:
		// assert.equals(callback.callCount, 1);
	});

	it("calls original function with right this and args", function() {
		var callback = sinon.fake();
		var proxy = once(callback);
		var obj = {};

		proxy.call(obj, 1, 2, 3);

		assert(callback.calledOn(obj));
		assert(callback.calledWith(1, 2, 3));
	});

	it("returns the return value from the original function", function() {
		var callback = sinon.fake.returns(42);
		var proxy = once(callback);

		assert.equals(proxy(), 42);
	});
});
