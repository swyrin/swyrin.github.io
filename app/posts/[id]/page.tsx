import { getAllPostIds, getPostData } from "@/lib/posts";
import Link from "next/link";

export default async function BlogPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const postData = await getPostData(id);

    return (
        <div className={"flex-col gap-y-12 bg-cat-base sm:flex sm:min-h-screen"}>
            <div className={"text-center"}>
                <span className={"text-4xl font-extrabold text-cat-maroon"}>{postData.title}</span>
                <br />
                <span className={"text-sm italic text-cat-subtext0"}>Posted on {postData.date}</span>
            </div>

            <div
                className={
                    "justify-between space-y-7 px-20 [&>h2]:text-2xl [&>h3]:text-xl [&>h4]:text-lg [&>h5]:text-medium [&>h6]:text-sm [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-cat-teal [&_h2]:font-bold [&_h2]:text-cat-yellow [&_h3]:font-bold [&_h3]:text-cat-teal [&_h4]:font-bold [&_h4]:text-cat-teal [&_h5]:font-bold [&_h5]:text-cat-teal [&_h6]:font-bold"
                }
                dangerouslySetInnerHTML={{ __html: postData.content }}
            />

            <Link href={"/"} className={"justify-between py-10 text-center"}>
                Back to the front page.
            </Link>
        </div>
    );
}

export function generateStaticParams() {
    return getAllPostIds();
}
