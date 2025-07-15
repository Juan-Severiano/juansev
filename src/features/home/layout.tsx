import AnimatedStars from "@/components/animated-bg";
import { Header } from "@/components/header";
import type { PropsWithChildren } from "react";

export function HomeLayout({ children }: PropsWithChildren) {
  return (
    <>
      <AnimatedStars />
      <Header />
      <section>
        <main>{children}</main>
      </section>
    </>
  );
}
