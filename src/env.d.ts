/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly HOST_SERVER: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}