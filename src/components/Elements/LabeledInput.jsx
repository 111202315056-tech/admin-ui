function LabeledInput({ label, type, placeholder, name }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary-500 transition bg-white"
      />
    </div>
  )
}

export default LabeledInput