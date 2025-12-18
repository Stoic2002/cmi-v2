import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    onClick,
    hoverable = false,
}) => {
    return (
        <div
            className={`bg-white border border-gray-100 shadow-soft rounded-xl overflow-hidden transition-all duration-300 ${hoverable ? 'hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 cursor-pointer' : ''
                } ${className}`}
            onClick={onClick}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
        >
            {children}
        </div>
    );
};

interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => (
    <div className={`p-6 border-b border-gray-100 ${className}`}>{children}</div>
);

interface CardBodyProps {
    children: React.ReactNode;
    className?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className = '' }) => (
    <div className={`p-6 ${className}`}>{children}</div>
);

interface CardFooterProps {
    children: React.ReactNode;
    className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => (
    <div className={`p-6 border-t border-gray-100 bg-gray-50/50 ${className}`}>{children}</div>
);
