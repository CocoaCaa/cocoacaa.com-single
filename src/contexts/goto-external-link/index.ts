import { SvelteComponent, getContext } from 'svelte';

export interface GotoExternalLinkContextStartParams {
    href: string;
    foregroundColor: string;
    backgroundColor: string;
    iconElement: HTMLElement;
}

export interface GotoExternalLinkContextValue {
    start(params: GotoExternalLinkContextStartParams);
}

export const key = Symbol();

export function getGotoExternalLinkContext() {
    return getContext<GotoExternalLinkContextValue>(key);
}
