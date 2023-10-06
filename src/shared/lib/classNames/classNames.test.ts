import { cn } from './classNames';

describe('classNames', () => {
  test('first param checking', () => {
    expect(cn('someClass')).toBe('someClass');
  });

  test('additional classes in array checking', () => {
    const expected = 'someClass add1 add2';

    expect(cn('someClass', {}, ['add1', 'add2'])).toBe(expected);
  });

  test('true classes in modes object checking', () => {
    const expected = 'someClass add1 add2 mode1';

    expect(
      cn(
        'someClass',
        { mode1: true },
        ['add1', 'add2'],
      ),
    )
      .toBe(expected);
  });

  test('false classes in modes object checking', () => {
    const expected = 'someClass add1 add2 mode1';

    expect(
      cn(
        'someClass',
        { mode1: true, mode2: false },
        ['add1', 'add2'],
      ),
    )
      .toBe(expected);
  });

  test('undefined in modes object checking', () => {
    const expected = 'someClass add1 add2 mode1';

    expect(
      cn(
        'someClass',
        { mode1: true, mode2: false, mode3: undefined },
        ['add1', 'add2'],
      ),
    )
      .toBe(expected);
  });
});
