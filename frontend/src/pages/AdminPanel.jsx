import React, { useState } from 'react';
import api from '../api/api';

export default function AdminPanel() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleCreate = () => {
    api.post('tests/', { title, description })
      .then(() => alert('Test created!'))
      .catch(err => console.error(err));
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Admin Panel</h1>
      <div className="mb-4">
        <label className="block">Title</label>
        <input type="text" className="border w-full p-2" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div className="mb-4">
        <label className="block">Description</label>
        <textarea className="border w-full p-2" value={description} onChange={e => setDescription(e.target.value)}></textarea>
      </div>
      <button onClick={handleCreate} className="bg-blue-600 text-white px-4 py-2 rounded">Create Test</button>
    </div>
  );
}