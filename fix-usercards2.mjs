import { writeFileSync } from 'fs'

writeFileSync('src/pages/UserCards.jsx',
`import UserCard from "../components/UserCard"

export default function UserCards() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">User Cards</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <UserCard name="Aldi" email="aldi@gmail.com" street="Jl. Imam Bonjol" city="Semarang" />
        <UserCard name="Sultan" email="sultan@gmail.com" street="Jl. Indraprasta" city="Ungaran" />
        <UserCard name="Dimas" email="dimas@gmail.com" street="Jl. Pemuda" city="Kendal" />
        <UserCard name="Zayn" email="zayn@gmail.com" street="Jl. Merdeka No.1" city="Bandung" />
        <UserCard name="Ayla" email="ayla@gmail.com" street="Jl. Sudirman No.2" city="Jakarta" />
        <UserCard name="Raka" email="raka@gmail.com" street="Jl. Diponegoro No.3" city="Yogyakarta" />
        <UserCard name="Naya" email="naya@gmail.com" street="Jl. Gajah Mada No.4" city="Surabaya" />
        <UserCard name="Elvan" email="elvan@gmail.com" street="Jl. Ahmad Yani No.5" city="Malang" />
        <UserCard name="Keira" email="keira@gmail.com" street="Jl. Pahlawan No.6" city="Solo" />
      </div>
    </div>
  )
}`)

console.log('UserCards.jsx berhasil diupdate!')