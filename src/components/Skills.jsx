export default function Skills() {
  const skills = ["JavaScript (ES6)", "Python", "React.js", "Node.js", "Fluent UI 9", "Tailwind CSS", "GraphQL", "MongoDB", "Docker", "Mobaxterm"];
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <ul className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <li key={s} className="bg-blue-500 text-white px-4 py-2 rounded-lg">{s}</li>
        ))}
      </ul>
    </section>
  );
}
