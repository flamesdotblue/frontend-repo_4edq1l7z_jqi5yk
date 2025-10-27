import React from 'react';
import { Home, TrendingUp, BarChart, Settings } from 'lucide-react';

const tabs = [
  { icon: Home, label: 'Home', route: 'dashboard' },
  { icon: TrendingUp, label: 'Sales', route: 'sales' },
  { icon: BarChart, label: 'Reports', route: 'reports' },
  { icon: Settings, label: 'Settings', route: 'settings' },
];

export default function BottomNav({ active, onNavigate }) {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around py-2">
      {tabs.map(({ icon: Icon, label, route }) => {
        const isActive = active === route;
        return (
          <button
            key={route}
            onClick={() => onNavigate(route)}
            className={`flex flex-col items-center gap-1 text-xs ${isActive ? 'text-blue-600' : 'text-slate-500'}`}
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
