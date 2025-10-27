import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DollarSign, ShoppingCart, Wallet, TrendingUp, Plus, Tag, ShoppingBag, Users } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const kpis = [
  { label: 'Total Sales', icon: DollarSign, value: '₹125,000', color: 'from-blue-500/10 to-blue-500/5', ring: 'ring-blue-500/20' },
  { label: 'Purchases', icon: ShoppingCart, value: '₹52,000', color: 'from-emerald-500/10 to-emerald-500/5', ring: 'ring-emerald-500/20' },
  { label: 'Expenses', icon: Wallet, value: '₹24,000', color: 'from-rose-500/10 to-rose-500/5', ring: 'ring-rose-500/20' },
  { label: 'Profit', icon: TrendingUp, value: '₹49,000', color: 'from-indigo-500/10 to-indigo-500/5', ring: 'ring-indigo-500/20' },
];

const recentEntries = [
  { date: '2025-10-20', type: 'Sale', amount: '₹12,500', status: 'Verified' },
  { date: '2025-10-20', type: 'Expense', amount: '₹2,400', status: 'Pending' },
  { date: '2025-10-19', type: 'Purchase', amount: '₹8,100', status: 'Rejected' },
  { date: '2025-10-18', type: 'Sale', amount: '₹15,250', status: 'Verified' },
];

export default function Dashboard({ onQuickAction }) {
  return (
    <div className="flex-1 min-h-screen bg-slate-50">
      {/* Hero with Spline */}
      <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden rounded-b-2xl bg-white">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent" />
        <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-800">Welcome back 👋</h1>
            <p className="text-slate-600 mt-1">Track sales, purchases and expenses at a glance.</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={() => onQuickAction('sale')} className="px-3 py-2 text-sm rounded-xl bg-emerald-500 text-white shadow-sm hover:bg-emerald-600">New Sale</button>
            <button onClick={() => onQuickAction('purchase')} className="px-3 py-2 text-sm rounded-xl bg-rose-500 text-white shadow-sm hover:bg-rose-600">New Purchase</button>
          </div>
        </div>
      </div>

      {/* KPI Cards (Desktop) */}
      <div className="hidden lg:grid grid-cols-4 gap-4 px-6 mt-6">
        {kpis.map(({ label, icon: Icon, value, color, ring }) => (
          <motion.div key={label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
            className={`rounded-2xl bg-gradient-to-br ${color} ring-1 ${ring} p-5 shadow-sm`}>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-600">{label}</div>
                <div className="text-2xl font-semibold text-slate-800 mt-1">{value}</div>
              </div>
              <div className="h-11 w-11 rounded-xl bg-white shadow flex items-center justify-center">
                <Icon className="h-5 w-5 text-slate-700" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile quick grid */}
      <div className="lg:hidden px-4 mt-6 grid grid-cols-2 gap-4">
        {[
          { icon: DollarSign, label: 'Sales', bg: 'bg-white' },
          { icon: ShoppingCart, label: 'Purchases', bg: 'bg-white' },
          { icon: Users, label: 'Users', bg: 'bg-white' },
          { icon: TrendingUp, label: 'Reports', bg: 'bg-white' },
          { icon: Wallet, label: 'Expenses', bg: 'bg-white' },
          { icon: ShoppingBag, label: 'Inventory', bg: 'bg-white' },
        ].map(({ icon: Icon, label, bg }) => (
          <button key={label} className={`rounded-2xl ${bg} shadow-sm border border-slate-100 p-4 flex items-center gap-3 active:scale-[0.98] transition`}> 
            <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center">
              <Icon className="h-5 w-5 text-slate-700" />
            </div>
            <span className="font-medium text-slate-800">{label}</span>
          </button>
        ))}
      </div>

      {/* Recent table */}
      <div className="px-4 lg:px-6 mt-6 pb-28 lg:pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
            <h3 className="font-semibold text-slate-800">Recent Entries</h3>
            <div className="text-xs text-slate-500">Date • Type • Amount • Status</div>
          </div>
          <div className="divide-y divide-slate-100">
            {recentEntries.map((row, idx) => (
              <div key={idx} className="px-5 py-3 grid grid-cols-2 md:grid-cols-4 text-sm">
                <div className="text-slate-700">{row.date}</div>
                <div className="text-slate-700">{row.type}</div>
                <div className="text-slate-800 font-medium">{row.amount}</div>
                <div className={`text-right md:text-left ${row.status === 'Verified' ? 'text-emerald-600' : row.status === 'Rejected' ? 'text-rose-600' : 'text-amber-600'}`}>{row.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAB for mobile */}
      <div className="lg:hidden fixed bottom-16 right-4">
        <div className="relative">
          <AnimatePresence>
            {/* Main FAB */}
            <motion.button onClick={() => onQuickAction('menu')} whileTap={{ scale: 0.96 }} className="h-14 w-14 rounded-full bg-blue-500 shadow-lg text-white flex items-center justify-center">
              <Plus className="h-6 w-6" />
            </motion.button>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
