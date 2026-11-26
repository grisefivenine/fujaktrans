import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Árak és költöztetési kalkulátor",
  description: "Tekintse meg a Fuják Trans tájékoztató árait, és használja az interaktív költöztetési kalkulátort a várható költség becsléséhez.",
};

export default function PricesLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
