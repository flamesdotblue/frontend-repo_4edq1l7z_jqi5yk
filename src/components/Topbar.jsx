import React from 'react';
import { Bell, Calendar, User } from 'lucide-react';

export default function Topbar() {
  return (
    <header className="hidden lg:flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200">
      <div className="font-semibold text-slate-700">Business Management Software</div>
      <div className="flex items-center gap-3">
        <button className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm px-3 py-2 rounded-lg border border-slate-200">
          <Calendar className="h-4 w-4" />
          <span>Today</span>
        </button>
        <button className="relative p-2 rounded-lg hover:bg-slate-100 text-slate-600">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-2 w-2 bg-blue-500 rounded-full" />
        </button>
        <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-100 text-slate-700">
          <User className="h-5 w-5" />
          <span className="text-sm font-medium">Super Admin</span>
        </div>
      </div>
    </header>
  );
}
