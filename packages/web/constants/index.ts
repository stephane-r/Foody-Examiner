export const __DEV__ = true;
export const isServer: boolean = typeof window === 'undefined';
export const isClient: boolean = typeof window !== 'undefined';
