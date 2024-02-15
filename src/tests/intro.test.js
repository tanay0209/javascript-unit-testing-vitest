import { describe, test, it, expect } from 'vitest';
import { calculateAverage, fizzBuzz, max, factorial } from '../intro';

describe('max', () => {
    it('should return the first argument if its greater', () => {
        //  AAA pattern is followed to organize tests
        // Arrange -> Set up the enviornment for tests ie variable and other things
        const a = 10;
        const b = 5;
        // Act -> write the actions to be performed
        const result = max(a, b);
        // Assert -> check the content wheter it matches the expectations
        expect(result).toBe(10);
    });

    it('should return second argument if its greater', () => {
        // concised way to write the small tests
        expect(max(1, 2)).toBe(2);
    });

    it('should return first argument if both arguments are equal', () => {
        expect(max(4, 4)).toBe(4);
    });
});

describe('fizzbuzz', () => {
    it('should return Fizzbuzz if argument is divisible by both 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });

    it('should return Fizz if argument is only divisble by 3', () => {
        expect(fizzBuzz(9)).toBe('Fizz');
    });

    it('should return Buzz if argument is only divisble by 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    });

    it('should return same argument in string format if neither divisble by 5 nor 3', () => {
        expect(fizzBuzz(8)).toBe('8');
    });
});

describe('calculateAverage', () => {
    it('should return Nan if given an empty array', () => {
        expect(calculateAverage([])).toBe(NaN);
    });
    it('should calculate the average of an array with a single element', () => {
        expect(calculateAverage([1])).toBe(1);
    });
    it('should calculate the average of an array with two elements', () => {
        expect(calculateAverage([1, 3])).toBe(2);
    });
    it('should calculate the average of an array with three elements', () => {
        expect(calculateAverage([1, 3, 5])).toBe(3);
    });
});

describe('factorial', () => {
    it('should return 1 if argument is 0', () => {
        expect(factorial(0)).toBe(1);
    });
    it('should return 1 if argument is 1', () => {
        expect(factorial(1)).toBe(1);
    });

    it('should return 2 if argument is 2', () => {
        expect(factorial(2)).toBe(2);
    });

    it('should return 6 if argument is 3', () => {
        expect(factorial(3)).toBe(6);
    });
    it('should return 24 if argument is 4', () => {
        expect(factorial(4)).toBe(24);
    });

    it('should return undefined if argument is a negative number', () => {
        expect(factorial(-1)).toBeUndefined();
    });
});
