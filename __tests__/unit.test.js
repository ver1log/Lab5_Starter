// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber tests
test('isPhoneNumber: (123) 456-7890 is a valid phone number', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber: 123-456-7890 is a valid phone number', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber: 12345 is not a valid phone number', () => {
    expect(isPhoneNumber('12345')).toBe(false);
});

test('isPhoneNumber: abc-def-ghij is not a valid phone number', () => {
    expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// isEmail tests
test('isEmail: user@example.com is a valid email', () => {
    expect(isEmail('user@example.com')).toBe(true);
});

test('isEmail: hello@mail.org is a valid email', () => {
    expect(isEmail('hello@mail.org')).toBe(true);
});

test('isEmail: userexample.com is not a valid email', () => {
    expect(isEmail('userexample.com')).toBe(false);
});

test('isEmail: user@.com is not a valid email', () => {
    expect(isEmail('user@.com')).toBe(false);
});

// isStrongPassword tests
test('isStrongPassword: Hello123 is a strong password', () => {
    expect(isStrongPassword('Hello123')).toBe(true);
});

test('isStrongPassword: abcd_ is a strong password', () => {
    expect(isStrongPassword('abcd_')).toBe(true);
});

test('isStrongPassword: 1abc is not a strong password', () => {
    expect(isStrongPassword('1abc')).toBe(false);
});

test('isStrongPassword: hi is not a strong password', () => {
    expect(isStrongPassword('hi')).toBe(false);
});

// isDate tests
test('isDate: 12/25/2023 is a valid date', () => {
    expect(isDate('12/25/2023')).toBe(true);
});

test('isDate: 1/1/2000 is a valid date', () => {
    expect(isDate('1/1/2000')).toBe(true);
});

test('isDate: 2023-12-25 is not a valid date', () => {
    expect(isDate('2023-12-25')).toBe(false);
});

test('isDate: 12/25/ 23 is not a valid date', () => {
    expect(isDate('12/25/ 23')).toBe(false);
});

// isHexColor tests
test('isHexColor: #FFF is a valid hex color', () => {
    expect(isHexColor('#FFF')).toBe(true);
});

test('isHexColor: #1a2b3c is a valid hex color', () => {
    expect(isHexColor('#1a2b3c')).toBe(true);
});

test('isHexColor: #GGGGGG is not a valid hex color', () => {
    expect(isHexColor('#GGGGGG')).toBe(false);
});

test('isHexColor: #12345678 is not a valid hex color ', () => {
    expect(isHexColor('#12345678')).toBe(false);
});