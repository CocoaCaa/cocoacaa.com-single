<script lang="ts">
    import type { MouseEventHandler } from 'svelte/elements';
    import { getGotoExternalLinkContext } from '../contexts/goto-external-link';

    export let color: String;
    export let href: string;
    export let loadingFgColor: string;
    export let loadingBgColor: string;
    let iconElement: HTMLElement;

    const { start } = getGotoExternalLinkContext();

    const handleClick: MouseEventHandler<HTMLAnchorElement> = (ev) => {
        ev.preventDefault();
        start({
            href,
            foregroundColor: loadingFgColor,
            backgroundColor: loadingBgColor,
            iconElement,
        });
    };
</script>

<a class="inline-block transition-transform hover:scale-125" {href} target="_blank" on:click={handleClick}>
    <span bind:this={iconElement} style={`color: ${color};`}><slot /></span>
</a>
