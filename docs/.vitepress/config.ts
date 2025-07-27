export default {
    title: 'Termux Docs | Coding With Santanu',
    description: 'A minimal documentation for Termux built using VitePress',

    themeConfig: {
        sidebar: [
            {
                text: 'Getting Started',
                items: [
                    { text: 'Welcome', link: '/' },
                    { text: 'Introduction', link: '/getting-started/introduction' },
                    { text: 'Installation', link: '/getting-started/installation' },
                ]
            },
            {
                text: 'Fundamentals',
                items: [
                    { text: 'Interface', link: '/fundamentals/interface' },
                    { text: 'Basic Commands', link: '/fundamentals/basic-commands' },
                ]
            },
        ]
    }
}