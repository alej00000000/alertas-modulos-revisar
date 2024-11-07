import { useState } from 'react';
import { AlertBanner } from './components/AlertSystem/AlertBanner';
import { AlertModal } from './components/AlertSystem/Modal';
import { AlertToaster, useAlertToast } from './components/AlertSystem/Toast';
import { Button } from '@/components/ui/button';
import './App.css';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const { showToast } = useAlertToast();

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-emerald-900">Alert System Demo</h1>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-emerald-800">Banner Alerts</h2>
          <div className="space-y-4">
            <AlertBanner
              type="success"
              message="Operation completed successfully"
              description="Your changes have been saved to the database."
            />
            <AlertBanner
              type="error"
              message="Error processing request"
              description="Please check your input and try again."
            />
            <AlertBanner
              type="warning"
              message="Limited storage space"
              description="You're approaching your storage limit. Consider upgrading your plan."
            />
            <AlertBanner
              type="info"
              message="System maintenance"
              description="Scheduled maintenance will occur on Saturday at 2 AM UTC."
            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-emerald-800">Toast Notifications</h2>
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => showToast('success', 'Success!', 'Operation completed successfully')}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              Show Success Toast
            </Button>
            <Button
              onClick={() => showToast('error', 'Error!', 'Something went wrong')}
              variant="destructive"
            >
              Show Error Toast
            </Button>
            <Button
              onClick={() => showToast('warning', 'Warning', 'Please review your input')}
              className="bg-amber-500 hover:bg-amber-600"
            >
              Show Warning Toast
            </Button>
            <Button
              onClick={() => showToast('info', 'Info', 'New features available')}
              className="bg-sky-500 hover:bg-sky-600"
            >
              Show Info Toast
            </Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-emerald-800">Modal Alerts</h2>
          <Button
            onClick={() => setModalOpen(true)}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            Open Alert Modal
          </Button>
          <AlertModal
            type="warning"
            title="Confirm Action"
            description="Are you sure you want to proceed with this action? This cannot be undone."
            open={modalOpen}
            onConfirm={() => {
              setModalOpen(false);
              showToast('success', 'Action confirmed!', 'Your action has been processed');
            }}
            onCancel={() => setModalOpen(false)}
            confirmText="Yes, proceed"
            cancelText="No, cancel"
          />
        </section>
      </div>
      <AlertToaster />
    </div>
  );
}

export default App;