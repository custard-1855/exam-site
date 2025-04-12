import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api';

export default function TestPage() {
  const { id } = useParams();
  const [test, setTest] = useState(null);

  useEffect(() => {
    api.get(`tests/${id}/`).then(res => setTest(res.data));
  }, [id]);

  if (!test) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">{test.title}</h1>
      {test.questions.map(q => (
        <div key={q.id} className="mb-6">
          <p className="font-semibold mb-2">{q.text}</p>
          {q.choices.map(c => (
            <div key={c.id}>
              <input type="radio" id={`c${c.id}`} name={`q${q.id}`} />
              <label htmlFor={`c${c.id}`} className="ml-2">{c.text}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}