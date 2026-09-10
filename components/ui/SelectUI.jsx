export default function Select({ departments }) {
  return (
    <select
      name="filter"
      defaultValue=""
      className="rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700 shadow-sm outline-none transition hover:border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
    >
      <option value="">Alla kompetenser</option>

      {departments.map((department) => (
        <option key={department.id} value={department.value}>
          {department.name}
        </option>
      ))}
    </select>
  )
}
