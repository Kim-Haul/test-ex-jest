import add, { getNumbers, addArrayNumbers } from './calculator';

// ---------------------------------------------- 1번
// terminal 창에서 yarn test 명령어로 테스트 케이스 실행
it('add test1', () => {
  expect(add(1, 2)).toBe(3);
});

test('add test2', () => {
  // expect : 어떤 거를 실행해서, toBe : 이런게 나와야해 .
  expect(add(3, 4)).toBe(7);
});

// ---------------------------------------------- 2번
// 하나의 test suites로 묶어서 진행
describe('add test group', () => {
  it('add test3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('add test4', () => {
    expect(add(3, 4)).toBe(7);
  });
});

// ---------------------------------------------- 3번
// 비동기 통신 응답 여부 확인
test('get response!', () => {
  return getNumbers();
});

// ---------------------------------------------- 4번
// 비동기 통신 응답 데이터 확인
test('get numbers!', async () => {
  let res = await getNumbers();
  let data = await res.json();
  console.log(data);

  expect(data).toStrictEqual([1, 2, 3, 4, 5]);
});

// ---------------------------------------------- 5번
test('add numbers!', async () => {
  let res = await getNumbers();
  let data = await res.json();
  console.log(data);

  expect(addArrayNumbers(data)).toBe(15);
});
