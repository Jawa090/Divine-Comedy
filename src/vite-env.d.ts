/// <reference types="vite/client" />

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

declare module "*.webp" {
  const value: string;
  export default value;
}

declare module "@tanstack/react-start/server-entry" {
  const serverEntry: {
    fetch: (request: Request, env?: unknown, ctx?: unknown) => Promise<Response> | Response;
  };
  export default serverEntry;
}
