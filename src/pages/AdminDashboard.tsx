import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [needsPasswordChange, setNeedsPasswordChange] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [activeTab, setActiveTab] = useState('home');
  const [saveStatus, setSaveStatus] = useState('');
  const navigate = useNavigate();

  const token = localStorage.getItem('admin_token');

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
      return;
    }
    
    if (localStorage.getItem('needs_pw_change') === 'true') {
      setNeedsPasswordChange(true);
    }

    fetch('/api/admin-data', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => {
        if (!res.ok) throw new Error('Unauthorized');
        return res.json();
      })
      .then(d => {
        setData(d);
        setLoading(false);
      })
      .catch(() => {
        localStorage.removeItem('admin_token');
        navigate('/admin/login');
      });
  }, [navigate, token]);

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/change-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ newPassword })
    });
    if (res.ok) {
      setNeedsPasswordChange(false);
      localStorage.setItem('needs_pw_change', 'false');
    }
  };

  const handleSaveData = async () => {
    setSaveStatus('Saving...');
    const res = await fetch('/api/admin-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify(data)
    });
    if (res.ok) {
      setSaveStatus('Saved successfully!');
      setTimeout(() => setSaveStatus(''), 3000);
    } else {
      setSaveStatus('Error saving');
    }
  };

  const handleFileUpload = async (file: File, callback: (url: string) => void) => {
    const formData = new FormData();
    formData.append('file', file);
    setSaveStatus('Uploading...');
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData
      });
      const data = await res.json();
      if (res.ok && data.url) {
        callback(data.url);
        setSaveStatus('Uploaded successfully!');
      } else {
        setSaveStatus('Upload failed');
      }
    } catch {
      setSaveStatus('Upload failed');
    }
    setTimeout(() => setSaveStatus(''), 3000);
  };

  const logout = () => {
    localStorage.removeItem('admin_token');
    navigate('/admin/login');
  };

  if (loading) return <div className="p-10 font-sans">Loading...</div>;

  if (needsPasswordChange) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md border border-gray-100">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Action Required</h2>
          <p className="text-gray-600 mb-6">For security reasons, you must change the default password before accessing the dashboard.</p>
          <form onSubmit={handlePasswordChange}>
            <input
              type="password"
              placeholder="New Password"
              required
              className="w-full px-4 py-2 border rounded mb-4 focus:ring-2 focus:ring-[#0A3622] outline-none"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
            />
            <button className="w-full bg-[#0A3622] text-white py-2 rounded font-medium hover:bg-[#1A593B] transition-colors">
              Update Password
            </button>
          </form>
        </div>
      </div>
    );
  }

  const renderTab = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b pb-2">Home Page Content</h3>
            <div><label className="block text-sm font-medium mb-1">Subtitle</label><input className="w-full border p-2 rounded" value={data.home.subtitle} onChange={e => setData({...data, home: {...data.home, subtitle: e.target.value}})} /></div>
            <div><label className="block text-sm font-medium mb-1">Title</label><input className="w-full border p-2 rounded" value={data.home.title} onChange={e => setData({...data, home: {...data.home, title: e.target.value}})} /></div>
            <div><label className="block text-sm font-medium mb-1">Description</label><textarea className="w-full border p-2 rounded h-24" value={data.home.description} onChange={e => setData({...data, home: {...data.home, description: e.target.value}})} /></div>
          </div>
        );
      case 'about':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b pb-2">About Content</h3>
            <div><label className="block text-sm font-medium mb-1">Title</label><input className="w-full border p-2 rounded" value={data.about.title} onChange={e => setData({...data, about: {...data.about, title: e.target.value}})} /></div>
            <div><label className="block text-sm font-medium mb-1">Heading</label><input className="w-full border p-2 rounded" value={data.about.heading} onChange={e => setData({...data, about: {...data.about, heading: e.target.value}})} /></div>
            <div><label className="block text-sm font-medium mb-1">Mission</label><input className="w-full border p-2 rounded" value={data.about.mission} onChange={e => setData({...data, about: {...data.about, mission: e.target.value}})} /></div>
            <div><label className="block text-sm font-medium mb-1">Vision</label><input className="w-full border p-2 rounded" value={data.about.vision} onChange={e => setData({...data, about: {...data.about, vision: e.target.value}})} /></div>
            <div>
              <label className="block text-sm font-medium mb-1">Image URL</label>
              <div className="flex gap-2">
                <input className="flex-1 border p-2 rounded" value={data.about.imageUrl} onChange={e => setData({...data, about: {...data.about, imageUrl: e.target.value}})} />
                <input type="file" accept="image/*" className="hidden" id="about-img-upload" onChange={e => e.target.files?.[0] && handleFileUpload(e.target.files[0], url => setData({...data, about: {...data.about, imageUrl: url}}))} />
                <label htmlFor="about-img-upload" className="cursor-pointer bg-gray-200 px-4 py-2 rounded text-sm font-medium hover:bg-gray-300 transition-colors">Upload</label>
              </div>
            </div>
          </div>
        );
      case 'founder':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b pb-2">Founder Bio</h3>
            <div><label className="block text-sm font-medium mb-1">Name</label><input className="w-full border p-2 rounded" value={data.founder.name} onChange={e => setData({...data, founder: {...data.founder, name: e.target.value}})} /></div>
            <div><label className="block text-sm font-medium mb-1">Title</label><input className="w-full border p-2 rounded" value={data.founder.title} onChange={e => setData({...data, founder: {...data.founder, title: e.target.value}})} /></div>
            <div><label className="block text-sm font-medium mb-1">Quote</label><textarea className="w-full border p-2 rounded h-24" value={data.founder.quote} onChange={e => setData({...data, founder: {...data.founder, quote: e.target.value}})} /></div>
            <div>
              <label className="block text-sm font-medium mb-1">Founder Image</label>
              <div className="flex gap-2">
                <input className="flex-1 border p-2 rounded" value={data.founder.imageUrl} onChange={e => setData({...data, founder: {...data.founder, imageUrl: e.target.value}})} />
                <input type="file" accept="image/*" className="hidden" id="founder-img-upload" onChange={e => e.target.files?.[0] && handleFileUpload(e.target.files[0], url => setData({...data, founder: {...data.founder, imageUrl: url}}))} />
                <label htmlFor="founder-img-upload" className="cursor-pointer bg-gray-200 px-4 py-2 rounded text-sm font-medium hover:bg-gray-300 transition-colors">Upload</label>
              </div>
            </div>
          </div>
        );
      case 'properties':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b pb-2">Properties</h3>
            {data.properties.map((prop: any, idx: number) => (
              <div key={prop.id} className="border p-4 rounded bg-gray-50 flex flex-col gap-3">
                <div className="flex justify-between items-center"><h4 className="font-bold">Property {idx + 1}</h4></div>
                <input className="border p-2 rounded w-full" placeholder="Title" value={prop.title} onChange={e => { const newP = [...data.properties]; newP[idx].title = e.target.value; setData({...data, properties: newP}); }} />
                <input className="border p-2 rounded w-full" placeholder="Location" value={prop.location} onChange={e => { const newP = [...data.properties]; newP[idx].location = e.target.value; setData({...data, properties: newP}); }} />
                <div className="flex gap-2">
                  <input className="border p-2 rounded flex-1" placeholder="Price" value={prop.price} onChange={e => { const newP = [...data.properties]; newP[idx].price = e.target.value; setData({...data, properties: newP}); }} />
                  <input className="border p-2 rounded flex-1" placeholder="Status (e.g. Selling Fast)" value={prop.status} onChange={e => { const newP = [...data.properties]; newP[idx].status = e.target.value; setData({...data, properties: newP}); }} />
                </div>
                <div className="flex gap-2">
                  <input className="flex-1 border p-2 rounded" placeholder="Image URL" value={prop.imageUrl} onChange={e => { const newP = [...data.properties]; newP[idx].imageUrl = e.target.value; setData({...data, properties: newP}); }} />
                  <input type="file" accept="image/*" className="hidden" id={`prop-img-${idx}`} onChange={e => e.target.files?.[0] && handleFileUpload(e.target.files[0], url => { const newP = [...data.properties]; newP[idx].imageUrl = url; setData({...data, properties: newP}); })} />
                  <label htmlFor={`prop-img-${idx}`} className="cursor-pointer bg-gray-200 px-4 py-2 rounded text-sm font-medium hover:bg-gray-300 transition-colors">Upload</label>
                </div>
              </div>
            ))}
            <button className="text-sm bg-gray-200 px-3 py-1 rounded" onClick={() => setData({...data, properties: [...data.properties, {id: Date.now().toString(), title: 'New Property', location: '', price: '₦', status: 'New', statusColor: '#0A3622', features: [], imageUrl: ''}]})}>+ Add Property</button>
          </div>
        );
      case 'gallery':
        return (
            <div className="space-y-4">
              <h3 className="text-xl font-bold border-b pb-2">Gallery Images</h3>
              <div className="grid grid-cols-2 gap-4">
                {data.gallery.map((img: any, idx: number) => (
                  <div key={img.id} className="border p-2 rounded">
                    <img src={img.url} className="h-32 w-full object-cover rounded mb-2" alt="" />
                    <input className="w-full border p-1 text-sm rounded mb-2" value={img.caption} placeholder="Caption" onChange={e => { const newG = [...data.gallery]; newG[idx].caption = e.target.value; setData({...data, gallery: newG}); }} />
                    <button className="text-red-600 text-xs mt-1" onClick={() => { const newG = [...data.gallery]; newG.splice(idx, 1); setData({...data, gallery: newG}); }}>Remove</button>
                  </div>
                ))}
              </div>
            </div>
        );
      case 'leads':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b pb-2">Contact Submissions & Leads</h3>
            {data.leads && data.leads.length > 0 ? (
              <div className="space-y-4">
                {data.leads.map((lead: any) => (
                  <div key={lead.id} className="border p-4 rounded bg-gray-50">
                    <div className="font-bold">{lead.name}</div>
                    <div className="text-sm text-gray-600 border-b pb-2 mb-2">{new Date(lead.date).toLocaleString()}</div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div><strong>Email:</strong> {lead.email}</div>
                      <div><strong>Phone:</strong> {lead.phone}</div>
                    </div>
                    <div className="mt-2 text-sm bg-white p-2 border rounded">{lead.message}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No leads found.</p>
            )}
          </div>
        );
      case 'contact':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b pb-2">Contact & Socials</h3>
            <div><label className="block text-sm font-medium mb-1">Phone</label><input className="w-full border p-2 rounded" value={data.contact.phone} onChange={e => setData({...data, contact: {...data.contact, phone: e.target.value}})} /></div>
            <div><label className="block text-sm font-medium mb-1">Email</label><input className="w-full border p-2 rounded" value={data.contact.email} onChange={e => setData({...data, contact: {...data.contact, email: e.target.value}})} /></div>
            <div><label className="block text-sm font-medium mb-1">WhatsApp URL</label><input className="w-full border p-2 rounded" value={data.contact.whatsappUrl} onChange={e => setData({...data, contact: {...data.contact, whatsappUrl: e.target.value}})} /></div>
          </div>
        );
      case 'faqs':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b pb-2">FAQs</h3>
            {data.faqs.map((faq: any, idx: number) => (
                <div key={faq.id} className="border p-4 rounded bg-gray-50 flex flex-col gap-2">
                    <input className="w-full border p-2 rounded font-medium" value={faq.question} onChange={e => { const newF = [...data.faqs]; newF[idx].question = e.target.value; setData({...data, faqs: newF}); }} />
                    <textarea className="w-full border p-2 rounded h-20" value={faq.answer} onChange={e => { const newF = [...data.faqs]; newF[idx].answer = e.target.value; setData({...data, faqs: newF}); }} />
                </div>
            ))}
          </div>
        );
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex font-sans">
      <aside className="w-64 bg-[#0A3622] text-white shadow-xl flex flex-col">
        <div className="p-6">
          <h2 className="text-xl font-bold">Admin Panel</h2>
          <p className="text-sm text-[#D4AF37] opacity-80 mt-1">Edenfields Realty</p>
        </div>
        <nav className="flex-1 mt-6">
          {['home', 'about', 'founder', 'properties', 'gallery', 'faqs', 'contact', 'leads'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left px-6 py-3 capitalize transition-colors ${activeTab === tab ? 'bg-[#1A593B] border-l-4 border-white' : 'hover:bg-[#1A593B] bg-transparent'}`}
            >
              {tab}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
            <button onClick={logout} className="w-full text-left text-sm text-white/70 hover:text-white flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                Logout
            </button>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h1 className="text-2xl font-bold text-gray-800 capitalize">{activeTab} Manager</h1>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-green-600 font-medium">{saveStatus}</span>
                    <button onClick={handleSaveData} className="bg-[#0A3622] text-white px-6 py-2 rounded shadow hover:bg-[#1A593B] transition-transform active:scale-95 font-medium">
                        Save Changes
                    </button>
                </div>
            </div>
            <div className="p-6">
                {renderTab()}
            </div>
        </div>
      </main>
    </div>
  );
}
