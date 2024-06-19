import Danideme from "@/public/images/danideme.jpg";
import Image from "next/image";
import Link from "next/link";

interface InlineLinkProps {
  href: string;
  children: React.ReactNode;
}

const InlineLink = ({ href, children }: InlineLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="border-b border-dotted text-zinc-200 transition-colors hover:text-zinc-200/80"
  >
    {children}
  </a>
);



export default function Home() {
  return (
    <div>
      <Image
        src={Danideme}
        alt="Danideme"
        width={100}
        height={100}
        priority
        className="rounded-full"
      />
      <article className="mt-6 space-y-4 text-zinc-400">
        <h1 className="font-semibold">
          Hi there, I`m {" "}
          <InlineLink href="https://twitter.com/danieldemeD">
            Daniel
          </InlineLink>
          .
        </h1>

        <p>I am a software engineer, currently working as fullstack software engineer at <InlineLink href="https://phishfort.com">phishfort</InlineLink>.
          While you are here , feel free to explore my{" "}
          <Link
            className="border-b border-dotted text-zinc-200 transition-colors hover:text-zinc-200/80"
            href="/posts"
          >
            posts
          </Link>
          ,{" "}
          <InlineLink href="https://github.com/danielddemissie">projects</InlineLink>
          {" "} and social media profiles.
        </p>
      </article>
    </div >
  );
}
