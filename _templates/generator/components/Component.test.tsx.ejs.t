---
to: "<%= needTests ? `${dir.replace(/\\/$/, '')}/${componentName}/${componentName}.test.tsx` : null %>"
---
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { <%= componentName %> } from '@<%= dir.slice(3).replace(/\/$/, '') %>/<%= componentName %>';

describe('<%= dir.slice(4).replace(/\/$/, '') %>/<%= componentName %>', () => {
  test('Text', () => {
<% if (haveChildren) { -%>
    const randomText = (Math.random() + 1).toString(36).substring(7);

<% } -%>
    render(<%- haveChildren ? `<${componentName}>{ randomText }</${componentName}>` : `<${componentName} />` %>);
    expect(screen.getByText(<%- haveChildren ? 'randomText' : `'${componentName}'` %>)).toBeInTheDocument();
  });
});
