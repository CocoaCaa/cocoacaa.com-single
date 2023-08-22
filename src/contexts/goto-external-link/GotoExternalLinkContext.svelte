<script lang="ts">
    import { setContext, SvelteComponent } from 'svelte';
    import { key, type GotoExternalLinkContextValue, type GotoExternalLinkContextStartParams } from '.';

    let startParams: GotoExternalLinkContextStartParams | null = null;

    setContext<GotoExternalLinkContextValue>(key, {
        async start(params) {
            if (startParams) {
                return;
            }

            startParams = params;
            await new Promise((rs) => setTimeout(rs, 1500));
            window.open(params.href, '_blank');
            await new Promise((rs) => setTimeout(rs, 100));
            startParams = null;
        },
    });
</script>

<slot />

{#if startParams}
    <div class="overflow-hidden fixed top-0 right-0 bottom-0 w-0 animate-goto-external-link-container-show">
        <div
            class="absolute top-0 right-0 bottom-0 w-screen flex items-center justify-center"
            style={`background-color: ${startParams.backgroundColor};`}
        >
            <div class="text-7xl animate-bounce" style={`color: ${startParams.foregroundColor}`}>
                {@html startParams.iconElement.innerHTML}
            </div>
        </div>
    </div>
{/if}
