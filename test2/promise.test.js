import fetch from 'node-fetch';
import { expect } from 'chai';

describe('远程获取一本书 - 异步测试', function () {
  it('异步请求应该返回一个对象', function () {
    return fetch('http://localhost:8080/book/1')
      .then(function (res) {
        return res.json();
      }).then(function (json) {
        // console.log(json);
        expect(json).to.be.an('object');
        expect(json).to.be.deep.equal({
          author: 'Nigel Rees',
          category: 'reference',
          price: 8.95,
          title: 'Sayings of the Century'
        });
      });
  });
});

//也可以

// describe('远程获取一本书 - 异步测试', function () {
//   it('异步请求应该返回一个对象', async function () {
//     const res = await fetch('http://localhost:8080/book/1');
//     const json = await res.json();
//     // console.log(json);
//     expect(json).to.be.an('object');
//     expect(json).to.be.deep.equal({
//       author: 'Nigel Rees',
//       category: 'reference',
//       price: 8.95,
//       title: 'Sayings of the Century'
//     });
//   });
// });