<script lang="ts">
    import Icon, { type IconifyIcon } from '@iconify/svelte';
    import xIcon from '@iconify/icons-simple-icons/x';
    import youtubeIcon from '@iconify/icons-simple-icons/youtube';
    import githubIcon from '@iconify/icons-simple-icons/github';
    import kofiIcon from '@iconify/icons-simple-icons/kofi';
    import squareTumblr from '@iconify/icons-fa6-brands/square-tumblr';
    import pixivIcon from '@iconify/icons-simple-icons/pixiv';
    import ExternalLink from './ExternalLink.svelte';

    export let type: 'x' | 'youtube' | 'github' | 'kofi' | 'tumblr' | 'pixiv';

    const settings: Record<typeof type, ExternalLink['$$prop_def'] & { icon: IconifyIcon }> = {
        x: {
            href: 'https://twitter.com/cocoa_caa',
            color: '#000000',
            loadingFgColor: '#ffffff',
            loadingBgColor: '#000000',
            icon: xIcon,
        },
        youtube: {
            href: 'https://www.youtube.com/@cocoacaa',
            color: '#ff0000',
            loadingFgColor: '#ff0000',
            loadingBgColor: '#ffffff',
            icon: youtubeIcon,
        },
        github: {
            href: 'https://github.com/CocoaCaa',
            color: '#1f2328',
            loadingFgColor: '#ffffff',
            loadingBgColor: '#1f2328',
            icon: githubIcon,
        },
        kofi: {
            href: 'https://ko-fi.com/cocoacaa',
            color: '#ff5d5a',
            loadingFgColor: '#ffffff',
            loadingBgColor: '#ff5d5a',
            icon: kofiIcon,
        },
        tumblr: {
            href: 'https://www.tumblr.com/cocoacaa',
            color: '#001935',
            loadingFgColor: '#ffffff',
            loadingBgColor: '#001935',
            icon: squareTumblr,
        },
        pixiv: {
            href: 'https://www.pixiv.net/users/33467882',
            color: '#0096FA',
            loadingFgColor: '#0096FA',
            loadingBgColor: '#ffffff',
            icon: pixivIcon,
        },
    };
</script>

<ExternalLink {...settings[type]}>
    <Icon icon={settings[type].icon} />
</ExternalLink>
