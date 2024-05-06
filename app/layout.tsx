import type { Metadata } from "next";
import "@/scss/globals.scss";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Options from "@/components/ui/Options";

export const metadata: Metadata = {
  title: "Travel Agency",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <Header />
        <Options />

        {children}
      </body>
    </html>
  );
}
