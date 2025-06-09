
export interface ValidationResult {
  valid: boolean;
  parsed?: any;
  error?: string;
  lineNumber?: number;
  columnNumber?: number;
  suggestions?: string[];
}

export class JSONValidator {
  validate(jsonString: string): ValidationResult {
    if (!jsonString.trim()) {
      return {
        valid: false,
        error: 'Empty input',
        suggestions: ['Enter some JSON data to validate']
      };
    }

    try {
      const parsed = JSON.parse(jsonString);
      return {
        valid: true,
        parsed
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      const lineMatch = errorMessage.match(/at position (\d+)/);
      
      let lineNumber: number | undefined;
      let columnNumber: number | undefined;
      
      if (lineMatch) {
        const position = parseInt(lineMatch[1]);
        const lines = jsonString.substring(0, position).split('\n');
        lineNumber = lines.length;
        columnNumber = lines[lines.length - 1].length + 1;
      }

      const suggestions = this.generateSuggestions(errorMessage, jsonString);

      return {
        valid: false,
        error: errorMessage,
        lineNumber,
        columnNumber,
        suggestions
      };
    }
  }

  private generateSuggestions(error: string, jsonString: string): string[] {
    const suggestions: string[] = [];

    if (error.includes('Unexpected token')) {
      if (jsonString.includes("'")) {
        suggestions.push('Use double quotes instead of single quotes for strings');
      }
      if (jsonString.match(/\w+:/)) {
        suggestions.push('Wrap property names in double quotes');
      }
      if (jsonString.includes(',}') || jsonString.includes(',]')) {
        suggestions.push('Remove trailing commas');
      }
    }

    if (error.includes('Unterminated string')) {
      suggestions.push('Check for missing closing quotes');
    }

    if (error.includes('Expected')) {
      suggestions.push('Check for missing brackets, braces, or commas');
    }

    return suggestions;
  }

  getStatistics(jsonString: string): any {
    try {
      const parsed = JSON.parse(jsonString);
      return this.analyzeObject(parsed);
    } catch {
      return null;
    }
  }

  private analyzeObject(obj: any, depth = 0): any {
    const stats = {
      depth: depth,
      keys: 0,
      arrays: 0,
      objects: 0,
      strings: 0,
      numbers: 0,
      booleans: 0,
      nulls: 0,
      maxDepth: depth
    };

    if (Array.isArray(obj)) {
      stats.arrays = 1;
      obj.forEach(item => {
        const childStats = this.analyzeObject(item, depth + 1);
        this.mergeStats(stats, childStats);
      });
    } else if (obj !== null && typeof obj === 'object') {
      stats.objects = 1;
      stats.keys = Object.keys(obj).length;
      Object.values(obj).forEach(value => {
        const childStats = this.analyzeObject(value, depth + 1);
        this.mergeStats(stats, childStats);
      });
    } else {
      switch (typeof obj) {
        case 'string':
          stats.strings = 1;
          break;
        case 'number':
          stats.numbers = 1;
          break;
        case 'boolean':
          stats.booleans = 1;
          break;
        default:
          if (obj === null) stats.nulls = 1;
      }
    }

    return stats;
  }

  private mergeStats(target: any, source: any): void {
    target.keys += source.keys;
    target.arrays += source.arrays;
    target.objects += source.objects;
    target.strings += source.strings;
    target.numbers += source.numbers;
    target.booleans += source.booleans;
    target.nulls += source.nulls;
    target.maxDepth = Math.max(target.maxDepth, source.maxDepth);
  }
}

export const validator = new JSONValidator();
