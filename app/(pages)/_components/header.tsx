import Link from "next/link";
import { NavLink } from "./nav-link";


const navItems = [
  {
    path: "/posts",
    label: "My Posts",
  },
];

export const Header = () => {
  return (
    <header className="mb-16 flex items-center">
      <Link
        href="/"
        className="text-xl font-bold transition-colors hover:text-zinc-200/80"
      >
        danideme.
      </Link>
      <div className="ml-auto flex items-center gap-8">
        <div className="flex items-center gap-4">
          {navItems.map((item) => (
            <NavLink key={item.path} path={item.path} label={item.label} />
          ))}
        </div>

      </div>
    </header>
  );
};
