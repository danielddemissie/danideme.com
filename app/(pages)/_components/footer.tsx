export const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-center pb-16 pt-20 font-mono text-xs md:pt-40">
      <p className="font-light text-zinc-500">
        {new Date().getFullYear()} © Daniel Demelash (
        <a
          href="https://twitter.com/danieldemeD"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-200 transition-colors hover:text-zinc-200/80"
        >
          @danielddemissie
        </a>
        )
      </p>
      <a
        href="https://github.com/danielddemissie/danideme.com"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-auto border-b border-dotted transition-colors hover:text-zinc-200/80"
      >
        Code
      </a>
    </footer>
  );
};
