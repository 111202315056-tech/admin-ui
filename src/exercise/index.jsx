import SpreadRest from "./SpreadRest"
import ArrayMethods from "./ArrayMethods"
import AsyncAwait from "./AsyncAwait"

export default function Exercise() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Latihan ES6 + React</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SpreadRest />
        <ArrayMethods />
        <AsyncAwait />
      </div>
    </div>
  )
}