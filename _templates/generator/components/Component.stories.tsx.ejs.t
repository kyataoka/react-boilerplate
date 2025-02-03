---
to: "<% const fileName = componentName.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/([A-Z])([A-Z][a-z])/g, '$1-$2').toLowerCase() %><%= needStories ? `${dir.replace(/\\/$/, '')}/${fileName}/${fileName}.stories.tsx` : null %>"
---
<% const fileName = componentName.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/([A-Z])([A-Z][a-z])/g, '$1-$2').toLowerCase() %>import { type StoryObj, type Meta } from '@storybook/react';

import { <%= componentName %> } from '@<%= dir.slice(3).replace(/\/$/, '') %>/<%= fileName %>';

type T = typeof <%= componentName %>;
type Story = StoryObj<T>;

/**
 * @private
 */
export default {
  component: <%= componentName %>,
<% if (haveChildren) { -%>
  args: {
    children: '<%= componentName %>',
  },
<% } else { -%>
  args: {},
<% } -%>
} satisfies Meta<T>;

/**
 * @private
 */
export const Default: Story = {};
