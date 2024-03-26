import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const github = {
    username: "MatthewL246",
    repo: "pretendo-docker",
};

const config: Config = {
    title: "Pretendo Docker Documentation",
    tagline: "An unofficial Docker Compose setup for self-hosting a Pretendo Network server.",
    favicon: "img/favicon.ico",

    // GitHub Pages deployment configuration
    url: `https://${github.username.toLowerCase()}.github.io`,
    baseUrl: `/${github.repo}/`,
    organizationName: github.username,
    projectName: github.repo,

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    editUrl: `https://github.com/${github.username}/${github.repo}/tree/main/`,
                },
                blog: {
                    showReadingTime: true,
                    editUrl: `https://github.com/${github.username}/${github.repo}/tree/main/`,
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        navbar: {
            title: "Pretendo Docker Documentation",
            logo: {
                alt: "Docusaurus Logo",
                src: "img/logo.svg",
            },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "tutorialSidebar",
                    position: "left",
                    label: "Tutorial",
                },
                { to: "/blog", label: "Blog", position: "left" },
                {
                    href: `https://github.com/${github.username}/${github.repo}`,
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
