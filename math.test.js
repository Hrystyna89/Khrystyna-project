const { add, isAdult } = require('./math');

// UNIT TESTS
test('додає числа', () => {
  expect(add(2, 3)).toBe(5);
});

test('додає від’ємні числа', () => {
  expect(add(-2, -3)).toBe(-5);
});

test('додає 0', () => {
  expect(add(0, 5)).toBe(5);
});

test('перевірка дорослого (18)', () => {
  expect(isAdult(18)).toBe(true);
});

test('перевірка дитини (17)', () => {
  expect(isAdult(17)).toBe(false);
});

// MOCK TEST
test('mock API', () => {
  const api = {
    getUser: jest.fn().mockReturnValue({ name: "Ann" })
  };

  expect(api.getUser().name).toBe("Ann");
});