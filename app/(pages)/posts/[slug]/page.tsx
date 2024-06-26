import Link from "next/link";
import type { Metadata } from "next";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx/mdx";
import PostDate from "@/components/post-date";
import { Share } from "../../_components/share";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) return;

  const { title, summary: description, image } = post;

  return {
    title,
    description,
    openGraph: {
      images: image,
    },
    twitter: {
      card: "summary_large_image",
      images: image,
    },
  };
}

export default async function SinglePost({
  params,
}: {
  params: { slug: string };
}) {
  const post = allPosts.find((post) => post.slug === params.slug);
  const fullUrl = `https://danideme-com.vercel.app/posts/${params.slug}`;

  if (!post) notFound();
  const { title } = post

  return (
    <article>
      <header>
        <h1 className="text-2xl font-medium">{post.title}</h1>

        <div className="mb-10 mt-2 flex items-center gap-4 font-mono text-sm text-zinc-500">
          <div>
            <a
              href="https://twitter.com/danieldemeD"
              className="transition-colors hover:text-zinc-200/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              @danideme
            </a>{" "}
            <span className="px-2">|</span>{" "}
            <PostDate dateString={post.publishedAt} />{" "}
          </div>
          <Share url={fullUrl} title={title} />
          <Link
            href="/posts"
            className="ml-auto border-b border-dotted text-zinc-200 transition-colors hover:text-zinc-200/80"
          >
            Back
          </Link>
        </div>
      </header>
      <Mdx code={post.body.code} />
    </article>
  );
}
