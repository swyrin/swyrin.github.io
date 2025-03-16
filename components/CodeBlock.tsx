import { transformerColorizedBrackets } from "@shikijs/colorized-brackets";
import { BundledLanguage, codeToHtml } from "shiki";

type CodeBlockProps = { children: string; lang: BundledLanguage };

export default async function CodeBlock({ children, lang }: CodeBlockProps) {
    const html = await codeToHtml(children, {
        lang,
        theme: "catppuccin-mocha",
        transformers: [transformerColorizedBrackets()],
    }).then((res) => res);

    return (
        <div className={"card"}>
            {/* Placeholder for small screens */}
            <div className={"justify-between text-center text-sm font-bold text-cat-maroon sm:max-md:block md:hidden"}>
                If you don&apos;t see the code, your screen <span className={"italic"}>probably</span> is not big
                enough.
                <br />
                Site&apos;s desktop-first btw.
            </div>

            <div className={"card-body hidden p-4 md:block"}>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </div>
    );
}
