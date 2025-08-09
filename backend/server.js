import express from "express"; // Usando import
import { PrismaClient } from "@prisma/client"; // Usando import

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.post("/usuarios", async (req, res) => {
  try {
    // Criar usuário no banco de dados
    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
      },
    });

    res.status(201).json(user); // Retorna o usuário criado
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
});

app.get("/usuarios", async (req, res) => {
  let users = [];
  if (req.query) {
    users = await prisma.user.findMany({
      where: {
        name: req.query.name,
        age: req.query.age,
        email: req.query.email,
      },
    });
  } else {
    users = await prisma.user.findMany();
  }

  res.status(200).json(users);
});

app.put("/usuarios/:id", async (req, res) => {
  console.log(req);
  await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: {
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
    },
  });

  res.status(201).json(req.body);
});

app.delete("/usuarios/:id", async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ message: "Usuário deletado com Sucesso!" });
});

app.listen(3000, () => {
  console.log("SERVIDOR RODANDO...");
});
