import React from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';

interface ConfirmDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    variant?: 'default' | 'danger';
    isLoading?: boolean;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
    confirmText = 'Ya',
    cancelText = 'Tidak',
    variant = 'default',
    isLoading = false,
}) => {
    // Close on escape key
    React.useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const isDanger = variant === 'danger';

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
                onClick={onClose}
            />

            {/* Dialog */}
            <div className="relative z-10 w-full max-w-md mx-4 animate-in zoom-in-95 fade-in slide-in-from-bottom-4 duration-300">
                <div className="glass-panel rounded-2xl shadow-2xl overflow-hidden border border-white/60">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <p className="text-slate-600 leading-relaxed">{message}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-end gap-3 p-6 pt-0">
                        <Button
                            variant="ghost"
                            onClick={onClose}
                            disabled={isLoading}
                            className="min-w-[100px]"
                        >
                            {cancelText}
                        </Button>
                        <Button
                            onClick={onConfirm}
                            isLoading={isLoading}
                            className={`min-w-[120px] ${isDanger
                                    ? 'bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/30'
                                    : ''
                                }`}
                        >
                            {confirmText}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
