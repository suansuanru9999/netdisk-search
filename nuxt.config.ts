export default defineNuxtConfig({
    devtools: { enabled: false },
    app: {
        // head
        head: {
            title: '酸酸乳-网盘资源搜索',
            meta: [
                {
                    name: 'description',
                    content: '酸酸乳网盘资源搜索，电影迅雷下载、百度云盘、阿里网盘、夸克网盘、迅雷资源网站，免费提供电影、韩剧、美剧、日剧资源，你想看的影视大片，这里都有'
                },
                {   name: 'keyword',
                    content: '酸酸乳,百度云盘,阿里网盘,夸克网盘,迅雷,下载'
                },
                {   name: 'suansuanru',
                    content: '239239'
                },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: 'referrer',
                    content: 'no-referrer'
                },
                {
                    name: 'referrer',
                    content: 'always'
                },
                {
                    name: 'referrer',
                    content: 'strict-origin-when-cross-origin'
                }
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
            script: [
                {
                    src: 'https://www.googletagmanager.com/gtag/js?id=G-17SPF6S871',
                    async: true
                },
                {
                    src: '/ga.js'
                },
                {
                    src: '/qrcode.min.js'
                },
                {
                    src: 'https://challenges.cloudflare.com/turnstile/v0/api.js'
                },
                {
                    src: '/sw.js'
                },
                {
                    innerHTML: "(function(d,z,s){s.src='https://'+d+'/400/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('loajawun.com',7738058,document.createElement('script'))",
                    type: 'text/javascript'
                }
                    ]
        }
    },
    // build modules
    modules: [
        '@element-plus/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/device',
        '@nuxtjs/i18n',
        '@nuxtjs/google-fonts',
        '@nuxtjs/color-mode',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/robots',

    ],
    robots: {
        UserAgent: '*',
        Disallow: '/admin',
        Allow: '/'
    },
    colorMode: {
        preference: 'light',
        classSuffix: ''
    },
    tailwindcss: {
        configPath: 'tailwind.config.js'
    },
    googleFonts: {
        display: 'swap',
        prefetch: false,
        preconnect: false,
        preload: true,
        download: false,
        base64: false,
        families: {
            'Inter': [100, 200, 300, 400, 500, 600, 700, 800, 900],
            'Poetsen One': [100, 200, 300, 400, 500, 600, 700, 800, 900],
            'Sedan SC': [100, 200, 300, 400, 500, 600, 700, 800, 900],
            'Briem Hand': [100, 200, 300, 400, 500, 600, 700, 800, 900],
            'Noto Sans Simplified Chinese': [100, 200, 300, 400, 500, 600, 700, 800, 900]
        }
    },
    i18n: {
        defaultLocale: 'cn',
        langDir: './assets/lang/',
        locales: [
            {
                code: 'en',
                name: 'English',
                iso: 'en-US',
                file: 'en-US.json'
            },
            {
                code: 'cn',
                name: '中文',
                iso: 'zh-CN',
                file: 'zh-CN.json'
            }
        ],
    },
    plugins: [

    ],
    nitro: {
        devProxy: {
           
        }
    },
    runtimeConfig: {
        openaiApiKey: '',
        proxyUrl: ''
    }
})
