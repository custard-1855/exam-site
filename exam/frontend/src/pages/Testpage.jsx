import { useParams } from "react-router-dom";

export function TestPage() {
  const { id } = useParams();
  const [test, setTest] = useState(null);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    fetch(`/api/test/${id}/`).then(res => res.json()).then(data => setTest(data));
  }, [id]);

  function handleSubmit() {
    fetch(`/api/test/${id}/submit/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answers)
    }).then(() => alert("Submitted!"));
  }

  if (!test) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{test.test.title}</h1>
      {test.questions.map(q => (
        <div key={q.id} className="mb-6">
          <p className="font-semibold">{q.text}</p>
          {q.question_type === "MCQ" ? (
            q.choices.map(c => (
              <label key={c.id} className="block">
                <input type="radio" name={`q${q.id}`} value={c.text} onChange={e => setAnswers(a => ({ ...a, [q.id]: e.target.value }))} /> {c.text}
              </label>
            ))
          ) : (
            <textarea className="w-full p-2 border rounded" onChange={e => setAnswers(a => ({ ...a, [q.id]: e.target.value }))}></textarea>
          )}
        </div>
      ))}
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </div>
  );
}