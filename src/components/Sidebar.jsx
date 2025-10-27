import React from 'react';
import { Home, DollarSign, ShoppingCart, Wallet, BarChart, Users, Settings } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Dashboard', route: 'dashboard' },
  { icon: DollarSign, label: 'Sales', route: 'sales' },
  { icon: ShoppingCart, label: 'Purchases', route: 'purchases' },
  { icon: Wallet, label: 'Expenses', route: 'expenses' },
  { icon: BarChart, label: 'Reports', route: 'reports' },
  { icon: Users, label: 'Users', route: 'users' },
  { icon: Settings, label: 'Settings', route: 'settings' },
];

export default function Sidebar({ active, onNavigate }) {
  return (
    <aside className="hidden lg:flex h-screen w-64 flex-col bg-slate-900 text-slate-100 shadow-xl">
      <div className="px-6 py-5 border-b border-slate-800">
        <div className="text-xl font-semibold tracking-tight">BMS Console</div>
        <div className="text-xs text-slate-400 mt-1">Conifer-inspired POS</div>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        {navItems.map(({ icon: Icon, label, route }) => {
          const isActive = active === route;
          return (
            <button
              key={route}
              onClick={() => onNavigate(route)}
              className={`w-full flex items-center gap-3 px-5 py-3.5 transition-colors ${
                isActive ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-sm font-medium">{label}</span>
            </button>
          );
        })}
      </nav>
      <div className="px-5 py-4 border-t border-slate-800 text-xs text-slate-400">
        v1.0.0
      </div>
    </aside>
  );
}
