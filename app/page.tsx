import ShikiCodeBlock from "@/components/ShikiCodeBlock";
import yuyuko from "@/public/yuyuko.jpg";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <div className={"flex min-h-screen flex-col items-center justify-center gap-10 bg-cat-base"}>
                <Image src={yuyuko} alt="Logo" placeholder={"blur"} width={256} className={"rounded-full"} />
                <div className={"text-3xl font-extrabold text-cat-text"}>L.I.G.M.A.</div>
                <blockquote className={"text-xl italic text-cat-mauve"}>shikanoko nokonoko koshitantan</blockquote>

                <ShikiCodeBlock lang={"py"}>
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
                </ShikiCodeBlock>

                <div className={"text-xl text-cat-text"}>
                    Shamefully brought to you by Next.
                    <br />
                    (Framework is good, my code isn&#39;t)
                </div>
            </div>
        </div>
    );
}
