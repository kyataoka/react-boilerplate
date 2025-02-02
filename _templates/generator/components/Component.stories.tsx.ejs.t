---
to: "<%= needStories ? `${dir.replace(/\\/$/, '')}/${componentName}/${componentName}.stories.tsx` : null %>"
---
import { type StoryObj, type Meta } from '@storybook/react';

import { <%= componentName %> } from '@<%= dir.slice(3).replace(/\/$/, '') %>/<%= componentName %>';

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
