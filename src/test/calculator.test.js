import add from './calculator';

// terminal 창에서 yarn test 명령어로 테스트 케이스 실행
it('add test1', () => {
  expect(add(1, 2)).toBe(3);
});

test('add test2', () => {
  // expect : 어떤 거를 실행해서, toBe : 이런게 나와야해 .
  expect(add(3, 4)).toBe(8);
});

describe('add test group', () => {
  it('add test3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('add test4', () => {
    expect(add(3, 4)).toBe(7);
  });
});
