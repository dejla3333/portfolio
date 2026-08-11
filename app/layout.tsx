import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/custom-cursor";

export const metadata: Metadata = {
  title: "Dejla Sharifi",
  description: "Dejla Sharifi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}