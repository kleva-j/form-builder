"use client";

import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Tabs defaultValue={theme}>
      <TabsList className="border">
        <TabsTrigger value="light" onClick={() => setTheme("light")}>
          <SunIcon className="h-4 w-4" />
        </TabsTrigger>
        <TabsTrigger value="dark" onClick={() => setTheme("dark")}>
          <MoonIcon className="h-4 w-4" />
        </TabsTrigger>
        <TabsTrigger value="system" onClick={() => setTheme("system")}>
          <DesktopIcon className="h-4 w-4" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
