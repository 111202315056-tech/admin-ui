import { useState } from "react"

const allProducts = [
  { id: 1, name: "Laptop", category: "elektronik", price: 8000000 },
  { id: 2, name: "Baju", category: "fashion", price: 150000 },
  { id: 3, name: "HP", category: "elektronik", price: 3000000 },
  { id: 4, name: "Sepatu", category: "fashion", price: 500000 },
  { id: 5, name: "Tablet", category: "elektronik", price: 4000000 },
]

export default function ArrayMethods() {
  const [category, setCategory] = useState("semua")

  const filtered = category === "semua"
    ? allProducts
    : allProducts.filter((p) => p.category === category)

  const total = filtered.reduce((acc, p) => acc + p.price, 0)

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Array Methods</h2>
      <div className="flex gap-2 mb-4">
        {["semua", "elektronik", "fashion"].map((cat) => (
          <button key={cat} onClick={() => setCategory(cat)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition ${
              category === cat ? "bg-primary-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}>
            {cat}
          </button>
        ))}
      </div>
      <div className="space-y-2">
        {filtered.map((product) => (
          <div key={product.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="text-sm font-medium text-gray-800">{product.name}</p>
              <p className="text-xs text-gray-400">{product.category}</p>
            </div>
            <p className="text-sm font-semibold text-primary-500">
              Rp {product.price.toLocaleString("id-ID")}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center border-t border-gray-100 pt-3">
        <p className="text-sm text-gray-500">Total ({filtered.length} produk)</p>
        <p className="text-sm font-bold text-gray-800">Rp {total.toLocaleString("id-ID")}</p>
      </div>
    </div>
  )
}