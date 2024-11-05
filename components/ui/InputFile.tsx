import * as React from "react";
import { cn } from "@/lib/utils";

// Componente Input ajustado para upload de arquivos
const InputFile = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
    ({ className, onChange, ...props }, ref) => {
        return (
            <input
                type="file" // Tipo definido como "file" para upload
                className={cn(
                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                onChange={onChange} // Captura o arquivo no handleFileChange
                {...props}
            />
        );
    }
);
InputFile.displayName = "InputFile";

export { InputFile };