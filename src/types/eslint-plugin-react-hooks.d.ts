declare module 'eslint-plugin-react-hooks' {
  import { Linter } from 'eslint';

  const plugin: {
    rules: Record<string, Linter.RuleModule>;
    configs: Record<string, Linter.Config>;
  };

  export = plugin;
}
