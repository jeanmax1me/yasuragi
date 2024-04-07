import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "yasuragi",
  description: "peace of mind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
     <Navbar />
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
