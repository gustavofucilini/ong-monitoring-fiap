const ongs = [
  {
    nome: 'Casa de Apoio Esperança',
    tipo: 'Assistência Social',
    endereco: 'Rua das Flores, 123',
    telefone: '(11) 1234-5678',
    pessoasAtendidas: 150
  },
  {
    nome: 'Instituto Amor e Vida',
    tipo: 'Combate à Fome',
    endereco: 'Av. Principal, 456', 
    telefone: '(11) 8765-4321',
    pessoasAtendidas: 300
  },
  {
    nome: 'Lar dos Idosos São José',
    tipo: 'Assistência a Idosos',
    endereco: 'Rua da Paz, 789',
    telefone: '(11) 2468-1357',
    pessoasAtendidas: 80
  }
];

const ONGs = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Lista de ONGs</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full text-white">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-4 text-left">Nome</th>
              <th className="p-4 text-left">Tipo</th>
              <th className="p-4 text-left">Endereço</th>
              <th className="p-4 text-left">Telefone</th>
              <th className="p-4 text-left">Pessoas Atendidas</th>
            </tr>
          </thead>
          <tbody>
            {ongs.map((ong, index) => (
              <tr key={index} className="border-b border-gray-700 hover:bg-gray-800">
                <td className="p-4">{ong.nome}</td>
                <td className="p-4">{ong.tipo}</td>
                <td className="p-4">{ong.endereco}</td>
                <td className="p-4">{ong.telefone}</td>
                <td className="p-4">{ong.pessoasAtendidas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ONGs;
