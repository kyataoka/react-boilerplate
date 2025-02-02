---
to: "<%= needTests ? `${dir.replace(/\\/$/, '')}/${functionName}/${functionName}.test.ts` : null %>"
---
import { describe, expect, test } from 'vitest';

import { <%= functionName %> } from '@<%= dir.slice(3).replace(/\/$/, '') %>/<%= functionName %>';

describe('<%= functionName %>', () => {
  test('test detail', () => {
    const correct = undefined;

    const result = <%= functionName %>();

    expect(result).toBe(correct);
  });
});
