
# JSONUtil.com Testing Guide

This guide outlines how to validate all functionalities locally before deploying to ensure no features are broken.

## Prerequisites

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Manual Testing Checklist

### 🔍 JSON Validator Testing

#### Basic Validation
- [ ] **Valid JSON Test**
  - Input: `{"name": "John", "age": 30}`
  - Expected: Green "Valid" badge, statistics displayed
  
- [ ] **Invalid JSON - Missing Quotes**
  - Input: `{name: "John", age: 30}`
  - Expected: Red "Invalid" badge, error message with suggestions
  
- [ ] **Invalid JSON - Trailing Comma**
  - Input: `{"name": "John", "age": 30,}`
  - Expected: Error message about trailing comma
  
- [ ] **Empty Input**
  - Input: (empty)
  - Expected: "Empty input" error message

#### Advanced Validation
- [ ] **Large JSON File** (>1MB)
  - Generate large JSON with nested objects/arrays
  - Expected: Validation completes without browser freeze
  
- [ ] **Deep Nesting**
  - Input: JSON with 10+ levels of nesting
  - Expected: Statistics show correct max depth
  
- [ ] **Unicode Characters**
  - Input: `{"unicode": "Hello 世界", "emoji": "🚀"}`
  - Expected: Valid JSON with proper character handling

#### UI/UX Tests
- [ ] **Clear Button**
  - Click Clear → Input and results should empty
  
- [ ] **Example Loading**
  - Click each example → Should load into input field
  
- [ ] **Statistics Display**
  - Valid JSON → Should show objects, arrays, strings, numbers, booleans count

### 🎨 JSON Formatter Testing

#### Formatting Tests
- [ ] **Basic Formatting**
  - Input: `{"name":"John","age":30,"skills":["JS","React"]}`
  - Click "Format JSON" with 2-space indent
  - Expected: Properly indented JSON
  
- [ ] **Indentation Options**
  - Test 2, 4, and 8 space indentation
  - Expected: Different indentation levels applied correctly
  
- [ ] **Key Sorting**
  - Input: `{"z": 1, "a": 2, "m": 3}`
  - Enable "Sort Keys" → Format
  - Expected: Keys appear as "a", "m", "z"

#### Minification Tests
- [ ] **Basic Minification**
  - Input: Formatted JSON with whitespace
  - Click "Minify JSON"
  - Expected: All whitespace removed, single line output
  
- [ ] **Size Comparison**
  - Format then minify the same JSON
  - Expected: Size badges show compression ratio

#### Advanced Tests
- [ ] **Copy to Clipboard**
  - Format JSON → Click "Copy"
  - Paste elsewhere → Should match formatted output
  
- [ ] **Example Loading**
  - Click each example → Should load into input
  - Format and minify → Should work with all examples

### 🔄 JSON Converter Testing

#### CSV Conversion
- [ ] **Simple Object to CSV**
  - Input: `[{"name": "John", "age": 30}, {"name": "Jane", "age": 25}]`
  - Convert to CSV
  - Expected: CSV with headers and data rows
  
- [ ] **Nested Object Handling**
  - Input: Objects with nested properties
  - Expected: Flattened structure or proper nested representation

#### XML Conversion
- [ ] **Object to XML**
  - Input: `{"person": {"name": "John", "age": 30}}`
  - Expected: Valid XML with proper element structure
  
#### YAML Conversion
- [ ] **Object to YAML**
  - Input: Complex JSON object
  - Expected: Valid YAML syntax with proper indentation

#### TypeScript Interface
- [ ] **Interface Generation**
  - Input: `{"name": "string", "age": 30, "active": true}`
  - Expected: TypeScript interface with correct types

### ⚖️ JSON Diff Testing

#### Basic Comparison
- [ ] **Identical Objects**
  - Compare two identical JSON objects
  - Expected: "No differences" message
  
- [ ] **Different Values**
  - Left: `{"name": "John", "age": 30}`
  - Right: `{"name": "John", "age": 31}`
  - Expected: Highlight age difference
  
- [ ] **Missing Properties**
  - Left: `{"name": "John", "age": 30}`
  - Right: `{"name": "John"}`
  - Expected: Show missing "age" property

#### Advanced Comparison
- [ ] **Array Differences**
  - Compare arrays with different elements
  - Expected: Show added/removed array items
  
- [ ] **Nested Object Changes**
  - Deep objects with nested differences
  - Expected: Highlight nested changes correctly

### 🔍 JSONPath Query Testing

#### Basic Queries
- [ ] **Root Query**
  - Data: `{"name": "John", "age": 30}`
  - Query: `$.name`
  - Expected: Result shows "John"
  
- [ ] **Array Access**
  - Data: `{"users": [{"name": "John"}, {"name": "Jane"}]}`
  - Query: `$.users[0].name`
  - Expected: Result shows "John"

#### Advanced Queries
- [ ] **Wildcard Queries**
  - Query: `$.users[*].name`
  - Expected: Array of all names
  
- [ ] **Filter Expressions**
  - Query: `$.users[?(@.age > 25)]`
  - Expected: Filtered results

### 🏗️ Schema Generator Testing

#### Basic Schema Generation
- [ ] **Simple Object**
  - Input: `{"name": "John", "age": 30, "active": true}`
  - Expected: Schema with string, number, boolean types
  
- [ ] **Array Handling**
  - Input: `{"tags": ["red", "blue"], "scores": [1, 2, 3]}`
  - Expected: Array schemas with item types
  
- [ ] **Nested Objects**
  - Input: Complex nested structure
  - Expected: Proper nested schema definitions

## Automated Testing

### Unit Tests
```bash
# Run unit tests
npm test

# Run tests with coverage
npm run test:coverage
```

### Critical Test Cases to Automate

#### Validator Tests
```javascript
// src/utils/jsonProcessors/__tests__/validator.test.ts
describe('JSONValidator', () => {
  it('validates correct JSON', () => {
    const result = validator.validate('{"test": true}');
    expect(result.valid).toBe(true);
  });
  
  it('detects syntax errors', () => {
    const result = validator.validate('{test: true}');
    expect(result.valid).toBe(false);
    expect(result.error).toContain('Unexpected token');
  });
});
```

#### Formatter Tests
```javascript
// src/utils/jsonProcessors/__tests__/formatter.test.ts
describe('JSONFormatter', () => {
  it('formats with correct indentation', () => {
    const result = formatter.format('{"a":1}', { indent: 2 });
    expect(result.formatted).toContain('  "a": 1');
  });
});
```

### Performance Tests

#### Large File Handling
```javascript
// Test with 1MB+ JSON files
const largeJson = JSON.stringify(generateLargeObject(50000));
const startTime = performance.now();
const result = validator.validate(largeJson);
const endTime = performance.now();
expect(endTime - startTime).toBeLessThan(5000); // 5 second max
```

## Browser Testing

### Cross-Browser Compatibility
Test in:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Testing
- [ ] iOS Safari
- [ ] Android Chrome
- [ ] Responsive design on various screen sizes

## Pre-Deployment Checklist

### Functionality
- [ ] All tools load without errors
- [ ] All examples work correctly
- [ ] All buttons are functional
- [ ] Copy/download features work
- [ ] Theme switching works
- [ ] Navigation between tools works

### Performance
- [ ] Page load time < 3 seconds
- [ ] Tools respond within 1 second for typical inputs
- [ ] No memory leaks during extended use
- [ ] Bundle size optimized

### SEO & Content
- [ ] All meta tags present
- [ ] Proper heading structure (H1, H2, H3)
- [ ] Alt text for images
- [ ] Sitemap.xml accessible
- [ ] robots.txt configured

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] High contrast mode support
- [ ] Focus indicators visible

### Analytics
- [ ] Google Analytics tracking code present
- [ ] Custom events firing correctly
- [ ] Ad placements visible (if applicable)

## Deployment Validation

After deployment:

1. **Smoke Test**: Visit each tool and perform basic operations
2. **Performance Check**: Run Lighthouse audit
3. **SEO Check**: Verify meta tags and structured data
4. **Analytics**: Confirm tracking is working
5. **Error Monitoring**: Check for JavaScript errors in console

## Rollback Plan

If issues are found after deployment:
1. Immediately rollback to previous version
2. Document the issue
3. Fix in development environment
4. Re-test thoroughly
5. Re-deploy

This testing framework ensures that all functionality remains intact and performs optimally across different environments and use cases.
