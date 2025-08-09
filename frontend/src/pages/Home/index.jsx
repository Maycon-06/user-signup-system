import "./style.css";
import Lixeira from "../../assets/Lixeira.png";

function Home() {
  const users = [
    {
      id: "1801mayc",
      name: "Maycon",
      age: 19,
      email: "mayconcarv@gmail.com",
    },
    {
      id: "1809secon",
      name: "Mike",
      age: 23,
      email: "mikecarv@gmail.com",
    },
    {
      id: "180329secon",
      name: "Michael",
      age: 42,
      email: "micha@gmail.com",
    },
  ];

  return (
    <>
      <div className="container">
        <form>
          <h1>Cadastro de Usuários</h1>
          <input placeholder="Nome" name="nome" type="text" />
          <input placeholder="Idade" name="idade" type="number" />
          <input placeholder="Email" name="email" type="email" />
          <button type="button">Cadastrar</button>
        </form>

        {users.map((user) => (
          <div key={user.id} className="card">
            <div>
              <p>
                Nome: <span>{user.name}</span>
              </p>
              <p>
                Idade: <span>{user.age}</span>
              </p>
              <p>
                Email: <span>{user.email}</span>
              </p>
            </div>
            <button>
              <img src={Lixeira} style={{width: "50px"}} alt="Icone da Lixeira" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
