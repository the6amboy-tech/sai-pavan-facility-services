import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Sai Pavan Facility Services | Cleaner spaces. Safer places.",
  description: "Complete facility management solutions in Tirupati and across Andhra Pradesh."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
