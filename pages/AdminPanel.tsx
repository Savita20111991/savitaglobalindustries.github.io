
import React, { useState } from 'react';
import { CATEGORIES, INITIAL_PRODUCTS, INITIAL_LEADERSHIP } from '../constants';
import { generateProductDescription, generateQuotationReply } from '../services/gemini';

const AdminPanel: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [leadership, setLeadership] = useState(INITIAL_LEADERSHIP);
  const [activeTab, setActiveTab] = useState<'products' | 'leadership' | 'inquiries' | 'analytics'>('products');
  const [aiReply, setAiReply] = useState<string | null>(null);
  const [isGeneratingReply, setIsGeneratingReply] = useState(false);

  // Mock Inquiries
  const [inquiries] = useState([
    { id: '1', name: 'James Wilson', email: 'j.wilson@globalmkt.com', product: 'Industrial CNC Lathe', message: 'Interested in bulk pricing for 10 units to Dubai.', status: 'Pending' },
    { id: '2', name: 'Ahmed Khan', email: 'ahmed@indus.sa', product: 'Precision Brass Valve', message: 'Do you provide certificate of origin for Saudi Arabia?', status: 'Replied' },
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') setIsAuthenticated(true);
    else alert('Invalid Credentials');
  };

  const handleGenerateReply = async (inquiry: any) => {
    setIsGeneratingReply(true);
    const reply = await generateQuotationReply(inquiry);
    setAiReply(reply);
    setIsGeneratingReply(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">S</div>
            <h1 className="text-2xl font-bold text-slate-900">Admin Gateway</h1>
            <p className="text-slate-500 text-sm">Savita Global Internal Systems</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Access Key</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="••••••••"
              />
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-all">
              Authenticate
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col sticky top-0 h-screen">
        <div className="p-8 border-b border-slate-800">
          <div className="font-bold text-xl">Savita Admin</div>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Management Portal</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {[
            { id: 'products', label: 'Products', icon: '📦' },
            { id: 'inquiries', label: 'Inquiries', icon: '✉️' },
            { id: 'leadership', label: 'Leadership', icon: '👤' },
            { id: 'analytics', label: 'Analytics', icon: '📈' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${activeTab === item.id ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}
            >
              <span>{item.icon}</span>
              <span className="text-sm font-bold">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-8 border-t border-slate-800">
          <button onClick={() => setIsAuthenticated(false)} className="text-xs text-slate-500 hover:text-white transition-colors flex items-center gap-2">
            <span>🚪</span> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12 overflow-y-auto">
        {activeTab === 'products' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Manage Products</h2>
                <p className="text-slate-500">Add or edit export catalog items</p>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-all">
                + Add New Product
              </button>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                  <tr>
                    <th className="p-4 border-b">Product</th>
                    <th className="p-4 border-b">Category</th>
                    <th className="p-4 border-b">AI Content</th>
                    <th className="p-4 border-b text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {products.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50 transition-colors border-b">
                      <td className="p-4 font-bold text-slate-700">{p.name}</td>
                      <td className="p-4">
                        <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-[10px] font-bold uppercase">{p.category}</span>
                      </td>
                      <td className="p-4">
                        <button 
                          onClick={async () => {
                            const desc = await generateProductDescription(p.name, p.category);
                            alert(`Generated Description:\n\n${desc}`);
                          }}
                          className="text-blue-600 hover:underline font-medium text-xs"
                        >
                          Regenerate with AI
                        </button>
                      </td>
                      <td className="p-4 text-right">
                        <button className="text-slate-400 hover:text-blue-600 p-2">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'inquiries' && (
           <div className="space-y-8">
             <h2 className="text-3xl font-bold text-slate-900">Quotation Inquiries</h2>
             <div className="grid grid-cols-1 gap-6">
                {inquiries.map((inq) => (
                  <div key={inq.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2">
                           <span className="font-bold text-slate-900">{inq.name}</span>
                           <span className="bg-blue-100 text-blue-600 text-[10px] px-2 py-0.5 rounded font-bold">{inq.status}</span>
                        </div>
                        <p className="text-xs text-slate-500">{inq.email}</p>
                      </div>
                      <button 
                        onClick={() => handleGenerateReply(inq)}
                        className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-blue-700"
                      >
                        AI Draft Reply
                      </button>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl text-sm italic text-slate-600 border border-slate-100">
                      "{inq.message}"
                      <p className="mt-2 text-[10px] not-italic font-bold text-slate-400">PRODUCT: {inq.product}</p>
                    </div>
                  </div>
                ))}
             </div>

             {aiReply && (
               <div className="bg-blue-900 p-8 rounded-2xl text-white animate-slide-up">
                 <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold">AI-Generated Quotation Reply</h3>
                    <button onClick={() => setAiReply(null)} className="text-xl">×</button>
                 </div>
                 <pre className="whitespace-pre-wrap text-sm text-blue-100 bg-white/5 p-6 rounded-xl border border-white/10 font-sans leading-relaxed">
                   {aiReply}
                 </pre>
                 <div className="mt-6 flex gap-4">
                   <button className="bg-white text-blue-900 px-6 py-2 rounded-lg font-bold text-xs">Copy to Clipboard</button>
                   <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold text-xs border border-white/20">Send via Email</button>
                 </div>
               </div>
             )}
           </div>
        )}

        {activeTab === 'leadership' && (
          <div className="space-y-12">
             <h2 className="text-3xl font-bold text-slate-900">Authority Profiles</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                 <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                   <span className="text-blue-600">👔</span> CEO Settings
                 </h3>
                 <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Full Name</label>
                      <input className="w-full border p-2 rounded" defaultValue={leadership.ceo.name} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Message Body</label>
                      <textarea className="w-full border p-2 rounded h-32" defaultValue={leadership.ceo.message} />
                    </div>
                    <button className="w-full bg-slate-900 text-white py-2 rounded font-bold text-sm">Save Changes</button>
                 </div>
               </div>
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                 <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                   <span className="text-blue-600">⚙️</span> Operations Head Settings
                 </h3>
                 <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Full Name</label>
                      <input className="w-full border p-2 rounded" defaultValue={leadership.opsHead.name} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Message Body</label>
                      <textarea className="w-full border p-2 rounded h-32" defaultValue={leadership.opsHead.message} />
                    </div>
                    <button className="w-full bg-slate-900 text-white py-2 rounded font-bold text-sm">Save Changes</button>
                 </div>
               </div>
             </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
            <div className="text-6xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-slate-700">Analytics Dashboard</h3>
            <p className="text-slate-400 text-sm">Live visitor and inquiry tracking will appear here.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminPanel;
