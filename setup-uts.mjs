import { writeFileSync } from 'fs'

// SOAL 01 - Update index.css
writeFileSync('src/index.css',
`@import "tailwindcss";

@theme {
  --font-sans: 'Plus Jakarta Sans', sans-serif;

  --color-special-red2: #b83016;
  --color-special-green: #00B894;
  --color-gray-01: #636E72;

  --color-primary-500: #00B894;
  --color-primary-600: #009E7D;

  --color-gray-50:  #F9FAFB;
  --color-gray-100: #F3F4F6;
  --color-gray-200: #E5E7EB;
  --color-gray-300: #D1D5DB;
  --color-gray-400: #9CA3AF;
  --color-gray-500: #6B7280;
  --color-gray-600: #4B5563;
  --color-gray-700: #374151;
  --color-gray-800: #1F2937;
  --color-gray-900: #111827;

  --color-red-500: #EF4444;
  --color-green-500: #22C55E;
  --color-yellow-500: #EAB308;
}

@layer base {
  body {
    font-family: var(--font-sans);
  }
}`)

// SOAL 02 - PostCard component
writeFileSync('src/components/PostCard.jsx',
`import { useState } from "react"

function PostCard({ id, userId, title, body }) {
  const [clicked, setClicked] = useState(false)

  return (
    <div className="p-4 rounded-lg border border-gray-200 bg-white cursor-pointer
      hover:scale-105 hover:border-gray-400 hover:bg-red-50 hover:shadow-lg 
      transition-all duration-300">
      
      <h2 className="text-sm font-bold text-center text-gray-800 mb-3">
        {title}
      </h2>
      
      <p className="text-xs text-center text-gray-500 mb-4">
        {body}
      </p>
      
      <button
        onClick={() => setClicked(true)}
        style={clicked ? { backgroundColor: "#b83016" } : {}}
        className={\`w-full py-2 rounded text-white text-sm font-medium transition-all
          \${clicked ? "hover:opacity-90" : "bg-gray-500 hover:bg-gray-600"}\`}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  )
}

export default PostCard`)

// SOAL 03 - Services dengan data posts
writeFileSync('src/Services.jsx',
`export const posts = [
  { id: 1, userId: 1, title: "Sunt Aut Facere Repellat Provident Occaecati Excepturi Optio Reprehenderit", body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto" },
  { id: 2, userId: 1, title: "Qui Est Esse", body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla" },
  { id: 3, userId: 1, title: "Ea Molestias Quasi Exercitationem Repellat Qui Ipsa Sit Aut", body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut" },
  { id: 4, userId: 1, title: "Eum Et Est Occaecati", body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit" },
  { id: 5, userId: 1, title: "Nesciunt Quas Odio", body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut vitae nisi nulla dolor deserunt" },
  { id: 6, userId: 1, title: "Dolorem Eum Magni Eos Aperiam Quia", body: "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quis deserunt molestiae voluptatem vel nulla" },
  { id: 7, userId: 1, title: "Magnam Facilis Autem", body: "dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ipsum quia quas est sed qui neque sit" },
  { id: 8, userId: 1, title: "Dolorem Dolore Est Ipsum", body: "dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam claudi dolor voluptatem moli non vitae" },
  { id: 9, userId: 1, title: "Nesciunt Iure Omnis Dolorem Tempora Et Accusantium", body: "consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas auter voluptas" },
  { id: 10, userId: 1, title: "Optio Molestias Id Quia Eum", body: "quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi vitae totam voluptatem sed accusantium veritatis error" },
  { id: 11, userId: 2, title: "Et Ea Vero Quia Laudantium Autem", body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus accusantium in eum beatae sit vel qui neque voluptates ut commodi qui incidunt ut animi corrupti" },
  { id: 12, userId: 2, title: "In Quibusdam Tempore Odit Est Dolorem", body: "itaque id aut magnam praesentium quia et aut fugiat et aut incidunt omnis saepe dolorem dolor voluptatem incidunt est distinctio" },
  { id: 13, userId: 2, title: "Dolorum Ut In Voluptas Mallitia Et Saepe Quo Animi", body: "natus nemo voluptatem recusandae vel eos blanditiis itaque omnia molestias porro aspernatur velit nisi fugiat beatae architecto" },
  { id: 14, userId: 2, title: "Voluptatem Eligendi Optio", body: "fuga et accusamus dolorum perferendis illo voluptas non doloremque neque facere ad qui dolorem molestiae beatae sed aut voluptas totam et illo" },
  { id: 15, userId: 2, title: "Eveniet Quod Temporibus", body: "reprehenderit quos placeat omnis quia temporibus ut in quasi optio et minus voluptatem repudiandae molestiae numquam ea aut nihil omnis omnis incidunt veniam" },
  { id: 16, userId: 2, title: "Sint Suscipit Perspiciatis Velit Dolorum Rerum Ipsa Laboriosam Odio", body: "suscipit nam nisi quo aperiam aut asperiores aut odit fugit architecto doloremque numquam omnis reprehenderit voluptatem quaerat itaque laudantium dolorum et quo tenetur non rem et" },
  { id: 17, userId: 2, title: "Fugit Voluptas Sed Molestias Voluptatem Provident", body: "eos voluptas et aut odit natus earum aspernatur fuga molestiae ullam deserunt ratione qui eos qui nihil ratione nemo velit ut aut id quo" },
  { id: 18, userId: 2, title: "Voluptate Et Itaque Vero Tempora Molestiae", body: "eveniet quo quis laborum totam consequatur non dolor ut et est repudiandae est voluptatem vel debitis et molestiae" },
  { id: 19, userId: 2, title: "Adipisci Placeat Illum Aut Reiciendis Qui", body: "illum quis cupiditate provident sit magnam ea sed aut omnis delectus qui corrupti fuga beatae sequi quibusdam incidunt vel" },
  { id: 20, userId: 2, title: "Doloribus Ad Provident Suscipit At", body: "qui consequuntur ducimus possimus quisquam amet similique suscipit porro ipsam amet eos veritatis officiis odit aut eos sunt" },
]`)

// SOAL 03 - Exercise component
writeFileSync('src/Exercise.jsx',
`import React from "react"
import PostCard from "./components/PostCard"
import { posts } from "./Services"

function Exercise() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Post Cards
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </div>
  )
}

export default Exercise`)

// Update App.jsx tambah route Exercise
writeFileSync('src/App.jsx',
`import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import UserCards from './pages/UserCards'
import Exercise from './Exercise'
import MainLayout from './layouts/MainLayout'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/usercards" element={<UserCards />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  )
}`)

console.log('setup-uts selesai!')