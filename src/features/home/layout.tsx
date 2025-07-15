import AnimatedStars from "@/components/animated-bg";
import { Header } from "@/components/header";
import type { PropsWithChildren } from "react";

export function HomeLayout({ children }: PropsWithChildren) {
  return (
    <>
      <AnimatedStars />
      <Header />
      <section className="w-full flex items-center">
        <main>{children}</main>
      </section>
    </>
  );
}
