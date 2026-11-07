import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());

async function dogPic() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  return data.message;
}

async function catPic() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await res.json();
  return data[0].url;
}

async function makePet(id) {
  const name = ["Buddy", "Max", "Charlie", "Bella", "Lucy"];
  const types = ["Dog", "Cat", "Rabbit"];
  const traits = ["Friendly", "Playful", "Loyal", "Curious", "Energetic"];

  const type = types[Math.floor(Math.random() * types.length)];

  let image;
  if (type === "Dog") image = await dogPic();
  else if (type === "Cat") image = await catPic();
  else image = "https://random.imagecdn.app/200/200";

  return {
    id,
    name: name[Math.floor(Math.random() * name.length)],
    type,
    traits: [traits[Math.floor(Math.random() * traits.length)]],
    image,
    adopted: false,
  };
}

app.get("/api/pets", async (req, res) => {
  const pets = [await makePet(1), await makePet(2), await makePet(3)];
  res.json(pets);
});

app.post("/api/adopt/:id", (req, res) => res.json({ message: `Adopted` }));
app.delete("/api/return/:id", (req, res) => res.json({ message: `Returned` }));

app.listen(PORT, () => {
  console.log(`Working PetPal API at http://localhost:${PORT}`);
});
