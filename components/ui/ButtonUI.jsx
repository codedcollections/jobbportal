export default function Button({ submitText }) {
  return (
    <button
      className="p-2 bg-gray-800 rounded-lg text-white hover:bg-blue-500
        active:bg-green-500"
      type="submit"
    >
      {submitText}
    </button>
  )
}
