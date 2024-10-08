import "@/styles/globals.css";
import { MonumentExtended, NeueMontreal } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";

export const metadata = {
  title: "ZoeJeton",
  description: "by zoejeton",
  icons: {
    icon: "/assets/icons/zoejeton.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${cn(
          MonumentExtended.variable,
          NeueMontreal.variable
        )} font-default bg-background scroll`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
