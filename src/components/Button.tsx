import { type VariantProps, cva  } from "class-variance-authority"
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: ["bg-neutral-200", "hover:bg-neutral-300"],
      ghost: ["hover:bg-gray-100"],
      dark: [
        "bg-neutral-800",
        "hover:bg-neutral-900",
        "text-neutral-500",
      ],
    },
    size: {
      default: [" rounded", "p-2"],
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

export function Button ({variant, size, className, ...props} : ButtonProps)  {
    return <button {...props}
     className={twMerge(buttonStyles({variant, size}), className)} />
}