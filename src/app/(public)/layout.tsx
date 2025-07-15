import { HomeLayout } from "@/features/home/layout";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HomeLayout>{children}</HomeLayout>
  );
}
