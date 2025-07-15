import { HomeLayout } from "@/features/home/layout";
import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <HomeLayout>{children}</HomeLayout>;
}
