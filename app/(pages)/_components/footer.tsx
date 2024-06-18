import { Twitter, Github } from "lucide-react";
import { SocialLink } from "./social-link";





const socialItems = [
  {
    path: "https://github.com/danielddemissie",
    label: "GitHub",
    icon: <Github size={18} />,
  },
  {
    path: "https://twitter.com/danieldemeD",
    label: "Twitter",
    icon: <Twitter size={18} />,
  }
];
export const Footer = () => {
  return (
    <footer className="flex flex-wrap items-start justify-start pb-16 pt-20 font-mono text-xs md:pt-40">
      <p className="font-light text-zinc-500">
        {new Date().getFullYear()} © Daniel Demelash

      </p>
      <div className="ml-auto flex items-center gap-4">
        <div className="flex items-center gap-4">
          {socialItems.map((item) => (
            <SocialLink
              key={item.path}
              path={item.path}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </div>
        <a
          href="https://github.com/danielddemissie/danideme.com"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto border-b border-dotted transition-colors hover:text-zinc-200/80"
        >
          Code
        </a>
      </div>
    </footer>
  );
};
