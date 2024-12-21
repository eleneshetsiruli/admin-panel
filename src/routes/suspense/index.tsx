import { ReactNode, Suspense } from "react";
import { Loading } from "../../pages/loading";

export const SuspenseWrapper = ({ children }: { children: ReactNode }) => (
  <Suspense fallback={<Loading text="page" />}>{children}</Suspense>
);
