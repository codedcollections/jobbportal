export default function Input({ placeholder, submitText, inputType }) {
  return (
    <div className="flex justify-center gap-2 ">
      <input
        className="flex p-1 bg-white border-2 rounded-sm border-gray-100 placeholder:text-sm "
        type="text"
        name={inputType}
        placeholder={placeholder}
        id={inputType}
      />
      <button className="px-2 bg-gray-800 rounded-lg text-white">
        {submitText}
      </button>
    </div>
  )
}
