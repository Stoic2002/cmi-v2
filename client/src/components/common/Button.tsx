import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    rightIcon,
    disabled,
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none";

    const variants = {
        primary: "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5",
        secondary: "bg-secondary text-slate-700 hover:bg-secondary/80 shadow-sm",
        outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary/5",
        ghost: "bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900",
        danger: "bg-error text-white hover:bg-error/90 shadow-lg shadow-error/25",
    };

    const sizes = {
        sm: "h-9 px-4 text-sm gap-1.5",
        md: "h-12 px-6 text-base gap-2",
        lg: "h-14 px-8 text-lg gap-3",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading ? (
                <Loader2 className="animate-spin" size={size === 'sm' ? 16 : 20} />
            ) : (
                <>
                    {leftIcon && <span className="flex items-center justify-center">{leftIcon}</span>}
                    {children}
                    {rightIcon && <span className="flex items-center justify-center">{rightIcon}</span>}
                </>
            )}
        </button>
    );
};
