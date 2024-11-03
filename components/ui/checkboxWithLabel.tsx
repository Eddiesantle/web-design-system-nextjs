import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, checked, ...props }, ref) => (
    <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
            "flex items-center bg-gray-200 justify-center w-5 h-5 border-2  rounded-sm  focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
        )}
        checked={checked}
        {...props}
    >
        <CheckboxPrimitive.Indicator asChild>
            <CheckIcon className="w-6 h-6 text-primary" />
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

const CheckboxWithLabel = ({
    label,
    checked,
    onChange,
    children,
    ...props
}: {
    label?: React.ReactNode;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>) => {
    return (
        <label className="flex items-center space-x-2">
            <Checkbox checked={checked} onCheckedChange={onChange} {...props} />
            <span className="text-sm">{label || children}</span>
        </label>
    );
};

export { Checkbox, CheckboxWithLabel };
