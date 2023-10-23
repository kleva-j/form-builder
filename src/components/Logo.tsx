import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href={"/"}
      className="font-bold text-lg bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text hover:cursor-pointer"
    >
      Form-Builder
    </Link>
  );
};
