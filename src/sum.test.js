// find a SUM
import sum from './sum';
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// test() - ф-ція, яку jest розпізнає як тест, вона містить опис тесту та іншу функцію,
// що власне виконеє тест
// 
// expect() - теж ф-ція, яка очікує певне значення і повертає об'єкт, для якого можна виконати
// функції-матчери