'use client';

import { useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function AuthStatus() {
  const [status, setStatus] = useState(null);
  
  const checkStatus = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    const res = await fetch('/api/auth/user', {
      headers: session ? { Authorization: `Bearer ${session.access_token}` } : {},
    });
    const data = await res.json();
    setStatus(data.data?.user ? data.data.user.email : 'Not Logged In');
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginTop: '20px' }}>
      <h3>Auth Status</h3>
      <button onClick={checkStatus} style={{ padding: '10px 20px', marginBottom: '10px' }}>
        Check Login Status
      </button>
      <p>{status === null ? 'Click button to check' : status}</p>
    </div>
  );
}