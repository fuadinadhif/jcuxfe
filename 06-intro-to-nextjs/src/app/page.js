export default function Home() {
  return (
    <main>
      <section>
        {/* Left Column */}
        <div>
          <h1 className="title">
            Raih karir dan keahlian digital dengan peluang kerja tanpa batas
          </h1>
          <p>
            Purwadhika dipercaya sejak 1987 dan telah menyalurkan lebih dari
            30.000 talenta digital berkualitas ke 1.000+ hiring partner
            Purwadhika di seluruh dunia
          </p>
        </div>

        {/* Right Column */}
        <div>
          <img
            // style={{ width: "100px", height: "300px" }}
            src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=648&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Multiple little students crossing the roads"
          />
        </div>
      </section>
    </main>
  );
}
