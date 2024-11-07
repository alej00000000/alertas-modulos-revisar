import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { AlertCircle, CheckCircle2, Info, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AlertType } from './AlertBanner';

interface AlertModalProps {
  type: AlertType;
  title: string;
  description?: string;
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
}

const modalStyles = {
  success: 'border-emerald-200',
  error: 'border-red-200',
  warning: 'border-amber-200',
  info: 'border-sky-200',
};

const iconMap = {
  success: CheckCircle2,
  error: XCircle,
  warning: AlertCircle,
  info: Info,
};

export function AlertModal({
  type,
  title,
  description,
  open,
  onConfirm,
  onCancel,
  confirmText = 'Continue',
  cancelText = 'Cancel',
}: AlertModalProps) {
  const Icon = iconMap[type];

  return (
    <AlertDialog open={open}>
      <AlertDialogContent
        className={cn('border-2', modalStyles[type])}
      >
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <Icon className="h-5 w-5" />
            {title}
          </AlertDialogTitle>
          {description && (
            <AlertDialogDescription>{description}</AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>{cancelText}</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>{confirmText}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}