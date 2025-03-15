import { HeroUIProvider } from "@heroui/system";
import * as React from "react";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
    return <HeroUIProvider>{children}</HeroUIProvider>;
}
