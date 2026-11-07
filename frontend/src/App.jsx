import { useState, useEffect } from "react";
import PetCard from "./PetCard";

const API = "http://localhost:3001/api";

export default function App() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadPets() {
    setLoading(true);

    try {
      const res = await fetch(`${API}/pets`);

      if (!res.ok) {
        throw new Error("Failed to fetch pets");
      }

      const data = await res.json();
      const petList = Array.isArray(data) ? data : data.pets;

      if (!Array.isArray(petList)) {
        throw new Error("API did not return a pets array");
      }

      setPets(petList);
    } catch (error) {
      console.error("Error loading pets:", error);
      setPets([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPets();
  }, []);

  async function adopt(id) {
    setPets((prev) =>
      prev.map((p) => (p.id === id ? { ...p, adopted: true } : p)),
    );

    await fetch(`${API}/adopt/${id}`, {
      method: "POST",
    });
  }

  async function returnPet(id) {
    setPets((prev) =>
      prev.map((p) => (p.id === id ? { ...p, adopted: false } : p)),
    );

    await fetch(`${API}/return/${id}`, {
      method: "DELETE",
    });
  }

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <h1>PetPal Express</h1>

      <button
        onClick={loadPets}
        style={{ padding: "10px 20px", marginBottom: "20px" }}
      >
        Refresh Pets
      </button>

      {loading && <p>Loading pets...</p>}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} adopt={adopt} returnPet={returnPet} />
        ))}
      </div>
    </div>
  );
}
