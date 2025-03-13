import { BundledLanguage, codeToHtml } from "shiki";

export default async function ShikiCodeBlock({ children, lang }: { children: string; lang: BundledLanguage }) {
    const html = await codeToHtml(children, {
        lang,
        theme: "catppuccin-mocha",
    });

    return <div className="px-5" dangerouslySetInnerHTML={{ __html: html }} />;
}
