---
to: <% const fileName = componentName.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/([A-Z])([A-Z][a-z])/g, '$1-$2').toLowerCase() %><%= dir.replace(/\/$/, '') %>/<%= fileName %>/index.tsx
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
export const <%= componentName %> = <%- haveProps || haveChildren ? `({
  ${ haveProps ? 'className' : '' }${ haveProps && haveChildren ? ',\n' : ','}${ haveChildren ? 'children,' : '' }
}: Readonly<${componentName}PropsType>)` : '()' %> => (
  <div<%- haveProps ? ` className={clsx('', className)}` : '' %>><%= haveChildren ? '{children}' : componentName %></div>
);
