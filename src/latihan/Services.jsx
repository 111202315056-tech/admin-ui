export const users = [
  { name: "April", email: "april@gmail.com", street: "Jl. Indraprasta", city: "Semarang", age: 25, job: "Web Developer" },
  { name: "Yani", email: "yani@gmail.com", street: "Jl. Imam Bonjol", city: "Ungaran" },
  { name: "Safitri", email: "safitri@gmail.com", street: "Jl. Pemuda", city: "Kendal" },
]

export const posts = [
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
]

export const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    return data.map((user) => ({
      name: user.name,
      email: user.email,
      street: user.address.street,
      city: user.address.city,
    }))
  } catch (error) {
    console.error("[Services] Gagal mengambil data:", error.message)
    throw error
  }
}