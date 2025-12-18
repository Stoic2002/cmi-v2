import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingProps {
    size?: 'sm' | 'md' | 'lg';
    text?: string;
    fullScreen?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({
    size = 'md',
    text,
    fullScreen = false,
}) => {
    const sizeClasses = {
        sm: 'w-5 h-5',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
    };

    const content = (
        <div className="flex flex-col items-center justify-center gap-4">
            <Loader2 className={`${sizeClasses[size]} text-primary animate-spin`} />
            {text && <p className="text-gray-500 text-sm font-medium">{text}</p>}
        </div>
    );

    if (fullScreen) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-background-light z-[9999]">
                {content}
            </div>
        );
    }

    return content;
};

interface LoadingOverlayProps {
    isLoading: boolean;
    children: React.ReactNode;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isLoading, children }) => {
    return (
        <div className="relative">
            {children}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-[2px] rounded-inherit z-10 transition-all duration-300">
                    <Loading size="lg" />
                </div>
            )}
        </div>
    );
};
