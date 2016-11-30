import test from 'ava';
import sleep from './index';

test('should resolve the sleep promise', async (t) => {

  try {
    await sleep.resolve(200);
    t.pass();
  } catch (e) {
    t.fail(e);
  }
});

test('should reject the sleep promise', async (t) => {

  try {
    await sleep.reject(200);
    t.fail('promise was resolved, should be rejected');
  } catch (e) {
    t.pass();
  }
});

test('should resolve the sleep promise with defined response', async (t) => {

  const mock = {
    message: 'Hello sleep'
  };

  try {
    const response = await sleep.resolve(200, mock);
    t.deepEqual(response, mock, 'Incorrect resolved response');
    t.pass();
  } catch (e) {
    t.fail(e);
  }
});

test('should reject the sleep promise with defined error', async (t) => {

  const error = {
    message: 'Bye sleep'
  };

  try {
    await sleep.reject(200, error);
    t.fail('promise was resolved, should be rejected');
  } catch (e) {
    t.deepEqual(e, error, 'Incorrect resjected response');
    t.pass();
  }
});

test('should resolve the sleep promise with defined response when sleep called directly', async (t) => {

  const mock = {
    message: 'Hello sleep'
  };

  try {
    const response = await sleep(200, mock);
    t.deepEqual(response, mock, 'Incorrect resolved response');
    t.pass();
  } catch (e) {
    t.fail(e);
  }
});
