import * as React from 'react';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import { AlertType } from './AlertBanner';
import { CheckCircle2, AlertCircle, Info, XCircle } from 'lucide-react';

const iconMap = {
  success: CheckCircle2,
  error: XCircle,
  warning: AlertCircle,
  info: Info,
};

export function useAlertToast() {
  const { toast } = useToast();

  const showToast = React.useCallback(
    (type: AlertType, title: string, description?: string) => {
      const Icon = iconMap[type];
      toast({
        variant: type === 'error' ? 'destructive' : 'default',
        title: (
          <div className="flex items-center gap-2">
            <Icon className="h-5 w-5" />
            {title}
          </div>
        ),
        description,
      });
    },
    [toast]
  );

  return { showToast };
}

export function AlertToaster() {
  return <Toaster />;
}