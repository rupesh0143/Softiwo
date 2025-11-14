"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

const Switch = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: {
      root: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 hover:scale-105 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-600 data-[state=checked]:to-purple-600 data-[state=checked]:shadow-lg data-[state=unchecked]:bg-gray-200 data-[state=unchecked]:hover:bg-gray-300 dark:focus-visible:ring-gray-300 dark:focus-visible:ring-offset-gray-950 dark:data-[state=unchecked]:bg-gray-700 dark:data-[state=unchecked]:hover:bg-gray-600",
      thumb: "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-all duration-200 ease-in-out data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 data-[state=checked]:shadow-xl"
    },
    button: {
      root: "peer inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full border-2 border-gray-300 dark:border-gray-600 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 hover:scale-105 hover:shadow-md data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-600 data-[state=checked]:to-purple-600 data-[state=checked]:border-transparent data-[state=checked]:shadow-lg data-[state=unchecked]:bg-white data-[state=unchecked]:hover:bg-gray-50 dark:data-[state=unchecked]:bg-gray-800 dark:data-[state=unchecked]:hover:bg-gray-700",
      thumb: "pointer-events-none block h-6 w-6 rounded-full bg-white shadow-lg ring-0 transition-all duration-300 ease-in-out data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0 data-[state=checked]:shadow-xl data-[state=checked]:bg-white data-[state=unchecked]:bg-gray-600 dark:data-[state=unchecked]:bg-gray-300"
    }
  };

  const currentVariant = variants[variant] || variants.default;

  return (
    <SwitchPrimitives.Root
      className={cn(currentVariant.root, className)}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(currentVariant.thumb)}
      />
    </SwitchPrimitives.Root>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };