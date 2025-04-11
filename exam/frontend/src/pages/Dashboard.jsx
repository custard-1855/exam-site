export function Dashboard() {
    const [data, setData] = useState({ tests: [], responses: [] });
  
    useEffect(() => {
      fetch("/api/dashboard/").then(res => res.json()).then(setData);
    }, []);
  
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <h2 className="text-xl font-semibold">Available Tests</h2>
        <ul className="list-disc pl-6">
          {data.tests.map(test => (
            <li key={test.id}>
              <a className="text-blue-600 underline" href={`/test/${test.id}`}>{test.title}</a>
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold mt-6">Your Responses</h2>
        <ul className="list-disc pl-6">
          {data.responses.map((r, i) => (
            <li key={i}>
              <span className="font-semibold">Q:</span> {r.question__text}<br />
              <span className="font-semibold">A:</span> {r.answer} ({r.is_correct ? '✔️' : '❌'})
            </li>
          ))}
        </ul>
      </div>
    );
  }