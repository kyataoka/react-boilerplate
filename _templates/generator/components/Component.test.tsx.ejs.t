---
to: "<% const fileName = componentName.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/([A-Z])([A-Z][a-z])/g, '$1-$2').toLowerCase() %><%= needTests ? `${dir.replace(/\\/$/, '')}/${fileName}/${fileName}.test.tsx` : null %>"
---
<% const fileName = componentName.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/([A-Z])([A-Z][a-z])/g, '$1-$2').toLowerCase() %>import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { <%= componentName %> } from '@<%= dir.slice(3).replace(/\/$/, '') %>/<%= fileName %>';

describe('<%= dir.slice(4).replace(/\/$/, '') %>/<%= componentName %>', () => {
  test('Text', () => {
<% if (haveChildren) { -%>
    const randomText = (Math.random() + 1).toString(36).slice(7);

<% } -%>
    render(<%- haveChildren ? `<${componentName}>{randomText}</${componentName}>` : `<${componentName} />` %>);
    expect(screen.getByText(<%- haveChildren ? 'randomText' : `'${componentName}'` %>)).toBeInTheDocument();
  });
});
