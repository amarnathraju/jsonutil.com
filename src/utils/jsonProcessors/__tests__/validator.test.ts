
import { validator } from '../validator';

describe('JSONValidator', () => {
  describe('Valid JSON', () => {
    test('validates simple object', () => {
      const result = validator.validate('{"test": true}');
      expect(result.valid).toBe(true);
      expect(result.parsed).toEqual({ test: true });
    });

    test('validates array', () => {
      const result = validator.validate('[1, 2, 3]');
      expect(result.valid).toBe(true);
      expect(result.parsed).toEqual([1, 2, 3]);
    });

    test('validates nested structure', () => {
      const json = '{"user": {"name": "John", "settings": {"theme": "dark"}}}';
      const result = validator.validate(json);
      expect(result.valid).toBe(true);
    });
  });

  describe('Invalid JSON', () => {
    test('detects missing quotes', () => {
      const result = validator.validate('{name: "John"}');
      expect(result.valid).toBe(false);
      expect(result.error).toContain('Unexpected token');
      expect(result.suggestions).toContain('Wrap property names in double quotes');
    });

    test('detects trailing comma', () => {
      const result = validator.validate('{"name": "John",}');
      expect(result.valid).toBe(false);
      expect(result.suggestions).toContain('Remove trailing commas');
    });

    test('handles empty input', () => {
      const result = validator.validate('');
      expect(result.valid).toBe(false);
      expect(result.error).toBe('Empty input');
    });
  });

  describe('Statistics', () => {
    test('calculates object statistics', () => {
      const json = '{"name": "John", "age": 30, "active": true, "tags": ["dev", "js"]}';
      const stats = validator.getStatistics(json);
      expect(stats.objects).toBe(1);
      expect(stats.strings).toBe(3); // name + 2 array items
      expect(stats.numbers).toBe(1);
      expect(stats.booleans).toBe(1);
      expect(stats.arrays).toBe(1);
    });
  });
});
