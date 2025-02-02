---
to: "<%= needTests ? `${dir.replace(/\\/$/, '')}/${hooksName}/${hooksName}.test.ts` : null %>"
---
import { cleanup, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';

import { <%= hooksName %> } from '@<%= dir.slice(3).replace(/\/$/, '') %>/<%= hooksName %>';

describe('<%= dir.slice(4).replace(/\/$/, '') %>/<%= hooksName %>', () => {
  beforeEach(() => {
    cleanup();
  });

  test('return text', async () => {
    const { result } = renderHook(() => <%= hooksName %>());

    expect(result.current).toBe('<%= hooksName %>');
  });
});