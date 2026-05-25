function SearchBox({ placeholder = "Search transactions", value, onChange }) {
  return (
    <div className="flex w-full max-w-md items-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <span className="text-slate-400">🔍</span>
      <input
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
      />
    </div>
  )
}

export default SearchBox
