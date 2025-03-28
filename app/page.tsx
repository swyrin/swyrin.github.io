import CodeBlock from "@/components/CodeBlock";
import yuyuko from "@/public/yuyuko.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className={"flex min-h-screen flex-col items-center justify-center gap-y-5 bg-cat-base text-cat-text"}>
            <Image src={yuyuko} alt="Logo" width={150} className={"rounded-full"} />
            <div className={"text-2xl font-extrabold lg:text-3xl"}>L.I.G.M.A.</div>

            <blockquote className={"italic text-cat-mauve lg:text-xl"}>
                &quot;shikanoko nokonoko koshitantan&quot;
            </blockquote>

            <CodeBlock lang={"py"}>
                {[
                    "import numpy as np",
                    "from matplotlib import pyplot as plt",
                    "",
                    "angle = np.linspace(0, 2 * np.pi, 100)",
                    "x_val = 16 * (np.sin(angle) ** 3)",
                    "y_val = 13 * np.cos(angle) - 5 * np.cos(2 * angle) - 2 * np.cos(3 * angle) - np.cos(4 * angle)",
                    "",
                    "plt.plot(x_val, y_val)",
                    "plt.show()",
                ].join("\n")}
            </CodeBlock>

            <div className={"text-xs"}>
                Shamefully brought to you by <Link href={"https://nextjs.org/"}>NextJS</Link>.
                <br />
                <span className={"italic"}>(Framework is good, my code isn&apos;t)</span>
            </div>
        </div>
    );
}
