import React, { useEffect, useState } from 'react';
import api from '../api/api';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    api.get('tests/')
      .then(res => setTests(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Available Tests</h1>
      <ul className="space-y-2">
        {tests.map(test => (
          <li key={test.id} className="p-4 bg-white shadow rounded">
            <Link to={`/test/${test.id}`} className="text-blue-600 hover:underline">
              {test.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}