// api.d.ts
export function RegisterUser(userName: string, password: string): Promise<any>;
export function LoginUser(userName: string, password: string): Promise<any>;
