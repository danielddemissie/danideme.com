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



export default function About() {
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
          Hi,{" "}
          <InlineLink href="https://twitter.com/danieldemeD">
           I`m Daniel 
          </InlineLink>
          .
        </h1>

        <p>
        I am a software engineer specializing in <strong>Fullstack web developer</strong>.
          To know me better, feel
          free to explore my{" "}
          <Link
            className="border-b border-dotted text-zinc-200 transition-colors hover:text-zinc-200/80"
            href="/posts"
          >
            Posts
          </Link>
          ,{" "}
          <InlineLink href="https://github.com/danielddemissie">Projects</InlineLink>,
          and various social media profiles.
        </p>
      </article>
    </div>
  );
}
