import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TabProvider } from "@/components/TabProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** Runs before hydration to set `.dark` (anti-flash). This lives in the ROOT
 * layout, which has no dynamic params and is therefore PRESERVED (not
 * re-rendered) when navigating /id ↔ /en — so React never re-creates the
 * <script> on a locale switch, avoiding React 19's "script tag" warning. */
const themeInitScript = `(function(){try{var t=localStorage.getItem("theme")||"system";var d=t==="dark"||(t==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);document.documentElement.style.colorScheme=d?"dark":"light";}catch(e){}})()`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-dvh antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <TabProvider>{children}</TabProvider>
      </body>
    </html>
  );
}
