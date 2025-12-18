import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
    label,
    error,
    leftIcon,
    rightIcon,
    className = '',
    id,
    ...props
}) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div className={`group ${className}`}>
            {label && <label htmlFor={inputId} className="block text-gray-500 text-sm font-medium mb-2 ml-1">{label}</label>}
            <div className="relative flex items-center">
                <span className={`absolute left-4 transition-colors ${error ? 'text-error' : 'text-gray-400 group-focus-within:text-primary'}`}>
                    {leftIcon}
                </span>
                <input
                    id={inputId}
                    className={`
                        w-full h-14 rounded-lg bg-gray-50 border text-gray-900 placeholder-gray-400 
                        focus:outline-none focus:ring-2 transition-all duration-300 input-gradient
                        ${leftIcon ? 'pl-12' : 'pl-4'} 
                        ${rightIcon ? 'pr-12' : 'pr-4'}
                        ${error
                            ? 'border-error focus:border-error focus:ring-error/20'
                            : 'border-gray-200 focus:border-primary focus:ring-primary/20'
                        }
                    `}
                    {...props}
                />
                {rightIcon && <span className="absolute right-4 text-gray-400">{rightIcon}</span>}
            </div>
            {error && <span className="block mt-1 ml-1 text-xs text-error font-medium">{error}</span>}
        </div>
    );
};

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
    label,
    error,
    className = '',
    id,
    ...props
}) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div className={`group ${className}`}>
            {label && <label htmlFor={textareaId} className="block text-gray-500 text-sm font-medium mb-2 ml-1">{label}</label>}
            <textarea
                id={textareaId}
                className={`
                    w-full min-h-[120px] p-4 rounded-xl bg-gray-50 border text-gray-900 placeholder-gray-400 
                    focus:outline-none focus:ring-2 transition-all duration-300 input-gradient resize-y
                    ${error
                        ? 'border-error focus:border-error focus:ring-error/20'
                        : 'border-gray-200 focus:border-primary focus:ring-primary/20'
                    }
                `}
                {...props}
            />
            {error && <span className="block mt-1 ml-1 text-xs text-error font-medium">{error}</span>}
        </div>
    );
};
