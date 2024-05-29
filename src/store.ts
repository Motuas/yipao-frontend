import { persistentAtom } from '@nanostores/persistent';

export const theme = persistentAtom<string>('theme', 'light');

export const sql = persistentAtom<string>('sql', '');

