export default class X {

  *[Symbol.iterator]() {
    yield 1;
  }

};

const A = Array.from(new X());
export {A};
