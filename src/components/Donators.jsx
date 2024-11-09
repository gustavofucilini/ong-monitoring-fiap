const doadores = [
  { 
    nome: 'Supermercado ABC',
    tipo: 'Empresa',
    ultimaDoacao: '15/11/2023',
    totalDoacoes: 150
  },
  {
    nome: 'Maria Silva', 
    tipo: 'Pessoa Física',
    ultimaDoacao: '10/11/2023',
    totalDoacoes: 25
  },
  {
    nome: 'Restaurante Sabor',
    tipo: 'Empresa',
    ultimaDoacao: '12/11/2023', 
    totalDoacoes: 75
  }
];

const Donators = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Lista de Doadores</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full text-white">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-4 text-left">Nome</th>
              <th className="p-4 text-left">Tipo</th>
              <th className="p-4 text-left">Última Doação</th>
              <th className="p-4 text-left">Total de Doações</th>
            </tr>
          </thead>
          <tbody>
            {doadores.map((doador, index) => (
              <tr key={index} className="border-b border-gray-700 hover:bg-gray-800">
                <td className="p-4">{doador.nome}</td>
                <td className="p-4">{doador.tipo}</td>
                <td className="p-4">{doador.ultimaDoacao}</td>
                <td className="p-4">{doador.totalDoacoes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Donators;
