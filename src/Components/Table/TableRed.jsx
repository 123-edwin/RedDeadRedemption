import "./TableRed.css";

export function TableRed (){
  const data = [
    { id: 1, name: "Red Dead Redemption", year: 2010, platform: "PS3, Xbox 360" },
    { id: 2, name: "Red Dead Redemption: Undead Nightmare", year: 2010, platform: "PS3, Xbox 360" },
    { id: 3, name: "Red Dead Redemption 2", year: 2018, platform: "PS4, Xbox One, PC" },
  ];

  return (
    <div className="table-container">
      <h2>Red Dead Redemption Series</h2>
      <table className="red-dead-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Año de lanzamiento</th>
            <th>Plataforma(s)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((game) => (
            <tr key={game.id}>
              <td>{game.id}</td>
              <td>{game.name}</td>
              <td>{game.year}</td>
              <td>{game.platform}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
