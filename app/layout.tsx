import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Sai Pavan Integrated Facility Services | Facility Management & Maintenance",
  description: "Sai Pavan Integrated Facility Services provides integrated facility management, housekeeping, maintenance, civil, electrical, plumbing, fabrication, roofing, catering, manpower and AMC solutions in Tirupati, Andhra Pradesh."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
