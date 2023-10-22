'use client';

import { type ThemeProviderProps } from "next-themes/dist/types";
import { ThemeProvider as Provider } from "next-themes";

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, ...rest } = props;
  return <Provider {...rest}>{children}</Provider>;
};
