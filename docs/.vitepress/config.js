import golangSidebar from "./sidebar/golang"

export default {
    title: "Modul Backend",
    description: 'An awesome backend module written by BCC',
    themeConfig: {
        logo: "/assets/bcc_logo.png",
        siteTitle: "Backend BCC",
        nav: [
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/bccfilkom-be" }
        ],
        sidebar: {
            "/golang/": golangSidebar
        },
    }
}