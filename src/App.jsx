import React, { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Topbar from './components/Topbar.jsx';
import BottomNav from './components/BottomNav.jsx';
import Dashboard from './components/Dashboard.jsx';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

const SectionCard = ({ title, children, right }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
    <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
      <h3 className="font-semibold text-slate-800">{title}</h3>
      {right}
    </div>
    <div className="p-5">{children}</div>
  </div>
);

function SalesModule() {
  return (
    <div className="space-y-6">
      <SectionCard title="Add Sales Entry">
        <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input className="input" type="date" placeholder="Date" />
          <input className="input" type="number" placeholder="Cash Sales" />
          <input className="input" type="number" placeholder="Card Sales" />
          <input className="input" type="number" placeholder="Credit Sales" />
          <div className="md:col-span-4 flex gap-3">
            <button type="button" className="btn-primary">Submit</button>
            <button type="button" className="btn-muted">Cancel</button>
          </div>
        </form>
      </SectionCard>
      <SectionCard title="Sales Records" right={<div className="text-sm text-slate-500">Filter: Date • Status</div>}>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500">
                <th className="py-2 pr-6">Date</th>
                <th className="py-2 pr-6">Type</th>
                <th className="py-2 pr-6">Amount</th>
                <th className="py-2 pr-6">Status</th>
                <th className="py-2 pr-6">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { date: '2025-10-20', type: 'Cash + Card', amount: '₹12,500', status: 'Pending' },
                { date: '2025-10-19', type: 'Cash', amount: '₹9,800', status: 'Pending' },
              ].map((r, i) => (
                <tr key={i} className="text-slate-700">
                  <td className="py-3 pr-6">{r.date}</td>
                  <td className="py-3 pr-6">{r.type}</td>
                  <td className="py-3 pr-6 font-medium">{r.amount}</td>
                  <td className="py-3 pr-6 text-amber-600">{r.status}</td>
                  <td className="py-3 pr-6">
                    <div className="flex gap-2">
                      <button className="btn-success inline-flex items-center gap-1"><CheckCircle2 className="h-4 w-4"/>Verify</button>
                      <button className="btn-danger inline-flex items-center gap-1"><XCircle className="h-4 w-4"/>Reject</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}

function PurchasesModule() {
  return (
    <SectionCard title="New Purchase">
      <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input className="input" type="text" placeholder="Supplier Name" />
        <input className="input" type="number" placeholder="Amount" />
        <select className="input">
          <option>Cash</option>
          <option>Supplier</option>
        </select>
        <input className="input" type="date" placeholder="Due Date" />
        <div className="md:col-span-4">
          <button className="btn-primary">Save</button>
        </div>
      </form>
    </SectionCard>
  );
}

function ExpensesModule() {
  return (
    <SectionCard title="Log Expense">
      <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <select className="input">
          <option>Daily</option>
          <option>Monthly</option>
          <option>HR</option>
        </select>
        <input className="input" type="text" placeholder="Description" />
        <input className="input" type="number" placeholder="Amount" />
        <input className="input" type="file" />
        <div className="md:col-span-4">
          <button className="btn-primary">Add</button>
        </div>
      </form>
    </SectionCard>
  );
}

function ReportsModule() {
  return (
    <div className="space-y-6">
      <SectionCard title="Sales Summary">
        <div className="h-28 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500">Table placeholder</div>
      </SectionCard>
      <SectionCard title="Expense Summary">
        <div className="h-28 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500">Table placeholder</div>
      </SectionCard>
      <SectionCard title="Profit & Loss">
        <div className="h-40 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500">Card + Chart placeholder</div>
      </SectionCard>
    </div>
  );
}

function UsersModule() {
  return (
    <SectionCard title="User Management" right={<button className="btn-primary">Add User</button>}>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-slate-500">
              <th className="py-2 pr-6">Name</th>
              <th className="py-2 pr-6">Email</th>
              <th className="py-2 pr-6">Role</th>
              <th className="py-2 pr-6">Status</th>
              <th className="py-2 pr-6">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[
              { name: 'Ava Martin', email: 'ava@shop.com', role: 'Manager', status: 'Active' },
              { name: 'Liam Patel', email: 'liam@shop.com', role: 'Cashier', status: 'Active' },
              { name: 'Zoe Chen', email: 'zoe@shop.com', role: 'Cashier', status: 'Inactive' },
            ].map((u, i) => (
              <tr key={i} className="text-slate-700">
                <td className="py-3 pr-6">{u.name}</td>
                <td className="py-3 pr-6">{u.email}</td>
                <td className="py-3 pr-6">{u.role}</td>
                <td className={`py-3 pr-6 ${u.status === 'Active' ? 'text-emerald-600' : 'text-rose-600'}`}>{u.status}</td>
                <td className="py-3 pr-6">
                  <div className="flex gap-2">
                    <button className="btn-muted">Edit</button>
                    <button className="btn-danger">Deactivate</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionCard>
  );
}

const contentByRoute = (route, onQuickAction) => {
  switch (route) {
    case 'dashboard':
      return <Dashboard onQuickAction={onQuickAction} />;
    case 'sales':
      return <SalesModule />;
    case 'purchases':
      return <PurchasesModule />;
    case 'expenses':
      return <ExpensesModule />;
    case 'reports':
      return <ReportsModule />;
    case 'users':
      return <UsersModule />;
    default:
      return <Dashboard onQuickAction={onQuickAction} />;
  }
};

export default function App() {
  const [route, setRoute] = useState('dashboard');
  const [toast, setToast] = useState(null);

  const handleNavigate = (r) => setRoute(r);
  const handleQuickAction = (type) => {
    if (type === 'sale') setRoute('sales');
    else if (type === 'purchase') setRoute('purchases');
    setToast({ message: 'Action opened', key: Date.now() });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-[Inter]">
      <div className="flex">
        <Sidebar active={route} onNavigate={handleNavigate} />
        <div className="flex-1 flex flex-col min-h-screen">
          <Topbar />
          <main className="px-4 lg:px-6 py-6">
            <motion.div key={route} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
              {contentByRoute(route, handleQuickAction)}
            </motion.div>
          </main>
        </div>
      </div>

      <BottomNav active={route} onNavigate={handleNavigate} />

      {/* Tiny toast */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={toast ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none fixed bottom-24 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-sm px-3 py-2 rounded-full shadow-lg"
      >
        {toast?.message}
      </motion.div>

      {/* Utility styles */}
      <style>{`
        .btn-primary { background:#3B82F6; color:white; padding:0.5rem 0.875rem; border-radius:0.75rem; box-shadow:0 1px 1px rgba(0,0,0,0.04); }
        .btn-primary:hover { background:#2563eb; }
        .btn-success { background:#22C55E; color:white; padding:0.375rem 0.75rem; border-radius:0.625rem; }
        .btn-danger { background:#EF4444; color:white; padding:0.375rem 0.75rem; border-radius:0.625rem; }
        .btn-muted { background:#F1F5F9; color:#0f172a; padding:0.5rem 0.875rem; border-radius:0.75rem; }
        .input { width:100%; background:white; border:1px solid rgb(226,232,240); border-radius:0.75rem; padding:0.625rem 0.875rem; outline:none; }
        .input:focus { border-color:#3B82F6; box-shadow:0 0 0 3px rgba(59,130,246,0.15); }
      `}</style>
    </div>
  );
}
