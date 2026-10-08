import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Toast({ message, visible }) {
  if (!visible) return null;

  return (
    <div className="toast-notification animate-slide-up" role="alert">
      <CheckCircle2 size={18} className="text-emerald" />
      <span>{message}</span>
    </div>
  );
}
