export default function Input({ placeholder, submitText, inputType }) {
  return (
    <div className="flex justify-between bg-gray-100 rounded-sm m-2">
      <input
        type="text"
        name={inputType}
        placeholder={placeholder}
        id={inputType}
      />
      <button>{submitText}</button>
    </div>
  )
}
