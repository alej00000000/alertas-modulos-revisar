import { AlertCircle, CheckCircle2, Info, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export type AlertType = 'success' | 'error' | 'warning' | 'info';

interface AlertBannerProps {
  type: AlertType;
  message: string;
  description?: string;
  className?: string;
  onClose?: () => void;
}

const alertStyles = {
  success: 'bg-emerald-50 border-emerald-200 text-emerald-800',
  error: 'bg-red-50 border-red-200 text-red-800',
  warning: 'bg-amber-50 border-amber-200 text-amber-800',
  info: 'bg-sky-50 border-sky-200 text-sky-800',
};

const iconMap = {
  success: CheckCircle2,
  error: XCircle,
  warning: AlertCircle,
  info: Info,
};

export function AlertBanner({
  type,
  message,
  description,
  className,
  onClose,
}: AlertBannerProps) {
  const Icon = iconMap[type];

  return (
    <div
      className={cn(
        'flex items-start gap-3 rounded-lg border p-4 shadow-sm transition-all',
        alertStyles[type],
        className
      )}
      role="alert"
    >
      <Icon className="h-5 w-5 flex-shrink-0" />
      <div className="flex-1">
        <h3 className="font-semibold">{message}</h3>
        {description && <p className="mt-1 text-sm opacity-90">{description}</p>}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-auto rounded-lg p-1.5 hover:bg-white/20"
        >
          <XCircle className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}