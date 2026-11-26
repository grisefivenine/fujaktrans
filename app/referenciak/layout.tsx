import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Referenciák és galéria",
  description: "Tekintse meg a Fuják Trans korábbi költöztetési és szállítási munkáit képekben és videón.",
};

export default function ReferencesLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
