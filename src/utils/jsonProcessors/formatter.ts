
export interface FormatterOptions {
  indent: number;
  sortKeys: boolean;
  preserveOrder: boolean;
}

export interface FormatterResult {
  formatted: string;
  originalSize: number;
  formattedSize: number;
  compressionRatio: number;
}

export class JSONFormatter {
  format(jsonString: string, options: FormatterOptions = { indent: 2, sortKeys: false, preserveOrder: true }): FormatterResult {
    try {
      const parsed = JSON.parse(jsonString);
      
      let formatted: string;
      if (options.sortKeys) {
        formatted = JSON.stringify(this.sortObjectKeys(parsed), null, options.indent);
      } else {
        formatted = JSON.stringify(parsed, null, options.indent);
      }

      return {
        formatted,
        originalSize: jsonString.length,
        formattedSize: formatted.length,
        compressionRatio: formatted.length / jsonString.length
      };
    } catch (error) {
      throw new Error(`Invalid JSON: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  minify(jsonString: string): FormatterResult {
    try {
      const parsed = JSON.parse(jsonString);
      const minified = JSON.stringify(parsed);
      
      return {
        formatted: minified,
        originalSize: jsonString.length,
        formattedSize: minified.length,
        compressionRatio: minified.length / jsonString.length
      };
    } catch (error) {
      throw new Error(`Invalid JSON: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  private sortObjectKeys(obj: any): any {
    if (Array.isArray(obj)) {
      return obj.map(item => this.sortObjectKeys(item));
    } else if (obj !== null && typeof obj === 'object') {
      const sorted: any = {};
      Object.keys(obj).sort().forEach(key => {
        sorted[key] = this.sortObjectKeys(obj[key]);
      });
      return sorted;
    }
    return obj;
  }

  escape(jsonString: string): string {
    return jsonString
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/\t/g, '\\t');
  }

  unescape(jsonString: string): string {
    return jsonString
      .replace(/\\"/g, '"')
      .replace(/\\\\/g, '\\')
      .replace(/\\n/g, '\n')
      .replace(/\\r/g, '\r')
      .replace(/\\t/g, '\t');
  }
}

export const formatter = new JSONFormatter();
