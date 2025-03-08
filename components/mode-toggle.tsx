"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // SSR bilan to‘qnashuvni oldini olish

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="icon"
      className="relative transition-all"
    >
      <Sun className={`h-5 w-5 transition-all ${theme === "dark" ? "scale-0 rotate-90" : "scale-100 rotate-0"}`} />
      <Moon className={`absolute h-5 w-5 transition-all ${theme === "dark" ? "scale-100 rotate-0" : "scale-0 -rotate-90"}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
