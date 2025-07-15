import { HomeLayout } from "@/features/home/layout";
import { QueryProvider } from "./query-provider";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <HomeLayout>{children}</HomeLayout>
    </QueryProvider>
  );
}
