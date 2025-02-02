---
to: <%= dir.replace(/\/$/, '') %>/<%= functionName %>/index.ts
---
export const <%= functionName %> = () => {
  console.log('<%= functionName %>');
}
