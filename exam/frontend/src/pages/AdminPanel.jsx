export function AdminPanel() {
    const [tests, setTests] = useState([]);
  
    useEffect(() => {
      fetch("/api/admin/tests/").then(res => res.json()).then(data => setTests(data.tests));
    }, []);
  
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <ul className="list-disc pl-6">
          {tests.map(t => (
            <li key={t.id}>
              <span className="font-semibold">{t.title}</span> <span className="text-gray-500">({new Date(t.created_at).toLocaleString()})</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }