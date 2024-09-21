import type { Metadata } from "next";
import "@/app/sass/main.scss"
import { DialogFormContextProvider } from "./context/DialogFormContext";
import { DialogDeleteTaskContextProvider } from "./context/DialogDeleteTaskContext";

export const metadata: Metadata = {
  title: "FocalPoint",
  description: "FocalPoint",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <DialogFormContextProvider>
        <DialogDeleteTaskContextProvider>
            <body>
              {children}
            </body>
        </DialogDeleteTaskContextProvider>
      </DialogFormContextProvider>
    </html>
  );
}
