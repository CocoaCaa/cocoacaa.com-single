<script lang="ts">
    import cocoacaaImg from './assets/cocoacaa.png';
    import SocialMediaLink from './components/SocialMediaLink.svelte';
    import GotoExternalLinkContext from './contexts/goto-external-link/GotoExternalLinkContext.svelte';
</script>

<GotoExternalLinkContext>
    <main class="bg-teal-950 text-slate-700">
        <div class="container mx-auto flex items-center justify-center min-h-screen">
            <div class="max-w-screen-sm">
                <div class="bg-white px-2 py-5 sm:rounded-lg shadow-md">
                    <img src={cocoacaaImg} alt="CocoaCaa" width="100%" height="auto" />
                    <h1 class="text-2xl font-bold text-center mt-5">Hello! I am CocoaCaa 可綠!</h1>
                    <div class="grid gap-4 grid-cols-6 text-4xl mt-5">
                        <div class="text-center">
                            <SocialMediaLink type="x" />
                        </div>
                        <div class="text-center">
                            <SocialMediaLink type="youtube" />
                        </div>
                        <div class="text-center">
                            <SocialMediaLink type="github" />
                        </div>
                        <div class="text-center">
                            <SocialMediaLink type="kofi" />
                        </div>
                        <div class="text-center">
                            <SocialMediaLink type="tumblr" />
                        </div>
                        <div class="text-center">
                            <SocialMediaLink type="pixiv" />
                        </div>
                    </div>
                </div>
                <footer class="px-2 py-2 text-sm">
                    <a
                        class="text-teal-600 hover:text-teal-500"
                        href="https://github.com/CocoaCaa/cocoacaa.com-single"
                        target="_blank">This website develop by myself (CocoaCaa)</a
                    >
                </footer>
            </div>
        </div>
    </main>
</GotoExternalLinkContext>

<style>
</style>
