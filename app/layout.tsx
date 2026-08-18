import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "24 Months with Stuti",
  description:
    "Two years, countless memories, one beautiful story. A celebration of 24 months together.",
  openGraph: {
    title: "24 Months with Stuti",
    description:
      "Two years, countless memories, one beautiful story. A celebration of 24 months together.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
