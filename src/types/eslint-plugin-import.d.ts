declare module 'eslint-plugin-import' {
  import { Linter } from 'eslint';

  const plugin: {
    rules: Record<string, Linter.RuleModule>;
    configs: Record<string, Linter.Config>;
    processors?: Record<string, Linter.Processor>;
    flatConfigs?: {
      recommended: Linter.Config;
    };
  };

  export = plugin;
}
