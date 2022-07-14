import { sum, sumSpread, minus, multiply, divide, pow, isBigger, isSmaller, getUserInfo } from './index';

describe('sum', () => {
    test('should be 3 with args 1 and 2', () => {
        expect(sum(1,2)).toBe(3);
    });

    test('should be 1 with args -5 and 6', () => {
        expect(sum(-5,6)).toBe(1);
    });

    test('should be close to 3.8 with args 0.1 and 3.7', () => {
        expect(sum(0.1,3.7)).toBeCloseTo(3.8);
    });

    test('should not be 3 with args 1 and 1', () => {
        expect(sum(1, 1)).not.toBe(3);
    })

    test('should be NaN without args', () => {
        expect(sum()).toBeNaN();
    })
})

describe('sumSpread', () => {
    test('should return 0 without args', () => {
        expect(sumSpread()).toBe(0);
    });

    test('should be 10 with args 2, 3, 5', () => {
        expect(sumSpread(2, 3, 5)).toBe(10);
    });

    test('should be -10 with args -2, -3, -5, 5', () => {
        expect(sumSpread(-2, -3, -5, 5)).toBe(-5);
    });
})

describe('minus', () => {
    test('should be 3 with args 4 and 1', () => {
        expect(minus(4,1)).toBe(3);
    });

    test('should be 0 with args -3 and -3', () => {
        expect(minus(-3,-3)).toBe(0);
    });

    test('should be close to 1.8 with args 4.5 and 2.7', () => {
        expect(minus(4.5,2.7)).toBeCloseTo(1.8, 3);
    });

    test('should not be 1 with args 1 and 1', () => {
        expect(minus(1, 1)).not.toBe(1);
    })
})

describe('multiply', () => {
    test('should be 9 with args 3 and 3', () => {
        expect(multiply(3,3)).toBe(9);
    });

    test('should be 0 with args 3 and 0', () => {
        expect(multiply(3,0)).toBe(0);
    });

    test('should not be 5 with args 5 and -1', () => {
        expect(multiply(5, -1)).not.toBe(5);
    })
})

describe('divide', () => {
    test('should be 2 with args 8 and 4', () => {
        expect(divide(8,4)).toBe(2);
    });

    test('should be error with b equal to 0', () => {
        try {
            divide(3,0);
        } catch (error) {
            expect(error.message).toBe('Dividing by zero is not allowed');
        }
    });

    test('should not be 5 with args -10 and -2', () => {
        expect(divide(-10, -2)).toBe(5);
    })
})

describe('pow', () => {
    test('should be 8 with args 2 and 3', () => {
        expect(pow(2,3)).toBe(8);
    });

    test('should be -27 with args -3 and 3', () => {
        expect(pow(-3, 3)).toBe(-27);
    });

    test('should be 3 with args 3 and -2', () => {
        expect(pow(3, -2)).toBe(3);
    })

    test('should be 3 with one arg 3', () => {
        expect(pow(3)).toBe(3);
    })
})

describe('isBigger', () => {
    test('should return false with args 2 and 3', () => {
        expect(isBigger(2,3)).toBe(false);
    });

    test('should return true with args 5 and 3', () => {
        expect(isBigger(5,3)).toBe(true);
    });

    test('should be false with one arg 3', () => {
        expect(isBigger(3)).toBeFalsy();
    })
})

describe('isSmaller', () => {
    test('should return true with args 2 and 3', () => {
        expect(isSmaller(2,3)).toBe(true);
    });

    test('should return false with args 3 and 5', () => {
        expect(isSmaller(5,3)).toBe(false);
    });

    test('should not be true with one arg 3', () => {
        expect(isSmaller(3)).not.toBeTruthy();
    })
})

describe('getUserInfo', () => {
    test('should return a correct user', () => {
        const user = getUserInfo();
        expect(user).toEqual({
            fullName: 'Vick Jone',
            age: 30,
            id: '123',
        });
    });

    test('should check that the object that returns getUserInfo contains Vick in the getUserInfo property', () => {
        const user = getUserInfo();
        expect(user.fullName).toContain('Vick');
    });
})