"use client";

// Wraps Button: optional dataLayer push for GTM; works with asChild (Slot merges onClick into link).
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type GTMButtonProps = React.ComponentProps<typeof Button> & {
  gtmLabel: string;
  gtmCategory: string;
};

function pushGtmData(gtmLabel: string, gtmCategory: string) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: { push: (d: object) => void } };
  if (w.dataLayer?.push) {
    w.dataLayer.push({
      event: "gtm_interaction",
      gtmLabel,
      gtmCategory,
    });
  }
}

export function GTMButton({
  gtmLabel,
  gtmCategory,
  className,
  onClick,
  ...props
}: GTMButtonProps) {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick?.(e);
    pushGtmData(gtmLabel, gtmCategory);
  };

  return (
    <Button
      className={cn(className)}
      data-gtm-label={gtmLabel}
      data-gtm-category={gtmCategory}
      onClick={handleClick}
      {...props}
    />
  );
}
