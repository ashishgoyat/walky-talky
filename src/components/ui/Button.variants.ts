import { colors, radius, textSize } from "@/src/theme/tokens";

export const buttonVariants = {
    variant: {
        primary:   { container: "bg-violet-600 active:bg-violet-700",            text: "text-white" },
        secondary: { container: "bg-zinc-800 active:bg-zinc-700",                text: "text-white" },
        danger:    { container: "bg-red-500 active:bg-red-600",                  text: "text-white" },
        ghost:     { container: "bg-transparent active:bg-white/10",             text: "text-zinc-800" },
        outline:   { container: "bg-transparent border border-violet-600 active:bg-violet-600/10", text: "text-violet-600" },
    },

    size: {
        sm: `px-3 py-2 ${textSize.sm}`,
        md: `px-5 py-3 ${textSize.md}`,
        lg: `px-7 py-4 ${textSize.lg}`
    },

    rounded: {
        sm: radius.sm,
        md: radius.md,
        full: radius.full,
    },
} as const;


export type ButtonVariant = keyof typeof buttonVariants.variant
export type ButtonSize = keyof typeof buttonVariants.size
export type ButtonRounded = keyof typeof buttonVariants.rounded