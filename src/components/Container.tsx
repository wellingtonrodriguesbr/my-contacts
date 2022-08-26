import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="w-full h-full max-w-screen-xl mx-auto px-8">{children}</div>
  );
}
