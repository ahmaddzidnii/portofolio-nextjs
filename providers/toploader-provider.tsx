"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

interface ToploaderProviderProps {
  children: React.ReactNode;
}
export const ToploaderProvider = ({ children }: ToploaderProviderProps) => {
  return (
    <>
      {children}
      <ProgressBar
        height="5px"
        color="#fffd00"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};
