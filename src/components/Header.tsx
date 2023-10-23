import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { UserButton } from "@clerk/nextjs";
import { Logo } from "@/components/Logo";

export const Header = () => {
  return (
    <header>
      <nav className="flex justify-between border-b border-border h-[64px] px-4 py-2 items-center">
        <Logo />
        <div className="flex gap-4 items-center">
          <ThemeSwitcher />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
    </header>
  );
};
