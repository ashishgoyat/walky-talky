import { ActivityIndicator, Pressable, Text } from "react-native";
import { ButtonRounded, ButtonSize, ButtonVariant, buttonVariants } from "./Button.variants";


type ButtonProps = {
    label: string;
    onPress: () => void;
    variant?: ButtonVariant;
    size?: ButtonSize;
    rounded?: ButtonRounded;
    loading?: boolean;
    disabled?: boolean;
    leftIcon?: React.ReactNode;
    className?: string; // escape hatch for one-off tweaks
};

export function Button({
    label,
    onPress,
    variant = "primary",
    size = "md",
    rounded = "md",
    loading = false,
    disabled = false,
    leftIcon,
    className = "",
}: ButtonProps) {
    const base = "flex-row items-center justify-center gap-2 m-3";
    const v = buttonVariants.variant[variant];
    const s = buttonVariants.size[size];
    const r = buttonVariants.rounded[rounded];
    const opacity = disabled || loading ? "opacity-50" : "";

    return (
        <Pressable onPress={onPress} disabled={disabled || loading} className={`${base} ${v.container} ${s} ${r} ${opacity} ${className}`}>
            {loading
                ? <ActivityIndicator size="small" color="white" />
                : <>
                    {leftIcon}
                    <Text className={`${v.text} font-semibold`}>{label}</Text>
                </>
            }
        </Pressable>
    )
}