function CheckBox({ label, name }) {
  return (
    <div className="flex items-center gap-2">
      <input type="checkbox" id={name} name={name} className="w-4 h-4" />
      <label htmlFor={name} className="text-sm text-gray-600">{label}</label>
    </div>
  )
}

export default CheckBox