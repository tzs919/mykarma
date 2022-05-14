const MyClass = require('./myClass')
const myObj = new MyClass()
const chai = require('chai')
const expect = chai.expect

describe('Test suit1', () => {
	it('Test the add method', () => {
		expect(myObj.add(1, 2)).to.be.equal(3)
	})
})

const sinon = require('sinon')

describe('Test suit2', () => {
	it('spy the add method', () => {
		const spy = sinon.spy(myObj, 'add') // 追踪add函数是否被调用
		myObj.callAnotherFn(1, 2)
		// 断言add函数在里面是否被执行一次
		sinon.assert.calledOnce(spy)
		expect(spy.calledTwice).to.be.false
		expect(spy.calledWith(1, 2)).to.be.true
	})

	it('spy the callback method', () => {
		const spy = sinon.spy() // 设置一个追踪器
		myObj.callTheCallback(spy)
		expect(spy.calledOnce).to.be.true
	})

	it('mock the sayHello method', () => {
		const mock = sinon.mock(myObj)
		const expetcation = mock.expects('sayHello')
		expetcation.exactly(1)
		expetcation.withArgs('hello world')
		myObj.callAnotherFn(3, 4)
		mock.verify() // 验证对模拟的所有期望
	})
})
