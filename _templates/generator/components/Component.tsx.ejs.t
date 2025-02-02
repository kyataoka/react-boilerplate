---
to: <%= dir.replace(/\/$/, '') %>/<%= componentName %>/index.tsx
---
<% if (haveProps) { -%>
import clsx from 'clsx';

<% } -%>
<% if (haveProps || haveChildren) { -%>
<% if (isPackage) { -%>
/**
 * @package
 */
<% } -%>
export type <%= componentName %>PropsType = {
<% if (haveProps) { -%>
  className?: string;
<% } -%>
<% if (haveChildren) { -%>
  children: React.ReactNode;
<% } -%>
};
<% } -%>
<% if (isPackage) { -%>
/**
 * @package
 */
<% } -%>
export const <%= componentName %> = <%= haveProps || haveChildren ? `({ ${ haveProps ? 'className' : '' }${ haveProps && haveChildren ? ', ' : ''}${ haveChildren ? 'children' : '' } }: ${componentName}PropsType)` : '()' %> => (
  <div<%- haveProps ? ` className={clsx('', className)}` : '' %>><%= haveChildren ? '{children}' : componentName %></div>
);
