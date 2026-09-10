export default function Input({ inputType, placeholder, query }) {
  return (
    <input
      className="flex p-1 bg-white border-2 rounded-sm border-gray-100 placeholder:text-sm "
      type={inputType === "search" ? "search" : "email"}
      name={inputType === "search" ? "q" : "e"}
      placeholder={placeholder}
    />
  )
}
