
import { formatter } from '../formatter';

describe('JSONFormatter', () => {
  describe('Formatting', () => {
    test('formats with 2-space indentation', () => {
      const input = '{"name":"John","age":30}';
      const result = formatter.format(input, { indent: 2, sortKeys: false, preserveOrder: true });
      expect(result.formatted).toContain('  "name": "John"');
      expect(result.formatted).toContain('  "age": 30');
    });

    test('formats with 4-space indentation', () => {
      const input = '{"name":"John"}';
      const result = formatter.format(input, { indent: 4, sortKeys: false, preserveOrder: true });
      expect(result.formatted).toContain('    "name": "John"');
    });

    test('sorts keys when requested', () => {
      const input = '{"z": 1, "a": 2}';
      const result = formatter.format(input, { indent: 2, sortKeys: true, preserveOrder: false });
      const aIndex = result.formatted.indexOf('"a"');
      const zIndex = result.formatted.indexOf('"z"');
      expect(aIndex).toBeLessThan(zIndex);
    });
  });

  describe('Minification', () => {
    test('removes all whitespace', () => {
      const input = `{
        "name": "John",
        "age": 30
      }`;
      const result = formatter.minify(input);
      expect(result.formatted).toBe('{"name":"John","age":30}');
      expect(result.compressionRatio).toBeLessThan(1);
    });
  });

  describe('Error Handling', () => {
    test('throws error for invalid JSON', () => {
      expect(() => {
        formatter.format('{invalid: json}', { indent: 2, sortKeys: false, preserveOrder: true });
      }).toThrow('Invalid JSON');
    });
  });
});
