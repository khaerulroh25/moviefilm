import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  backgroundImage: string;
}

export default function AuthLayout({
  children,
  backgroundImage,
}: AuthLayoutProps) {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div
          className="
          max-w-[360px]
          min-h-[709px]
          md:max-w-[1440px]
          md:min-h-[1024px]"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
