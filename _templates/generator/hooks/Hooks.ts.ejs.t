---
to: <%= dir.replace(/\/$/, '') %>/<%= hooksName %>/index.ts
---
export const <%= hooksName %> = () => '<%= hooksName %>';