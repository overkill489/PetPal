export default function PetCard({ pet, adopt, returnPet }) {
  return (
    <div
      style={{
        width: 220,
        height: 330,
        padding: 12,
        border: "1px solid #ccc",
        borderRadius: 10,
        background: pet.adopted ? "#f0f0f0" : "#fff",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <img
        src={pet.image}
        alt={pet.name}
        style={{
          width: "100%",
          height: 150,
          objectFit: "cover",
          borderRadius: 8,
        }}
      />
      <div>
        <h3 style={{ margin: "10px 0" }}>{pet.name}</h3>
        <p style={{ margin: 0 }}>
          {pet.type} - {pet.traits}
        </p>
      </div>

      {!pet.adopted ? (
        <button
          onClick={() => adopt(pet.id)}
          style={{
            padding: "8px 12px",
            background: "#5eff00",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Adopt
        </button>
      ) : (
        <>
          <p style={{ color: "green", fontWeight: "bold" }}>Adopted</p>
          <button
            onClick={() => returnPet(pet.id)}
            style={{
              padding: "8px 12px",
              background: "#ff5e5e",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Return
          </button>
        </>
      )}
    </div>
  );
}
