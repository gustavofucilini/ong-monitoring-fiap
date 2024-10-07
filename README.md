# 🌍 ONG Monitoring - Distribution Map Application

Este projeto é uma aplicação de monitoramento de ONGs e distribuição de doações com um mapa interativo e diversas funcionalidades de gestão de doações. O projeto foi desenvolvido utilizando **React**, **Vite**, **Tailwind CSS**, e **React Leaflet** para exibir um mapa de distribuição das ONGs e doações.

## 🎯 Funcionalidades

- **Sidebar de navegação**: Acesso rápido a diferentes seções do painel.
- **Gerenciamento de doações**: Visualize e edite as doações feitas por diversas ONGs.
- **Mapa interativo**: Exiba a localização das ONGs e visualize as doações em um mapa.
- **Filtros de doações**: Filtre as doações por categorias e regiões.
- **Responsividade**: Design otimizado para diferentes dispositivos, ajustando-se automaticamente.

---

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **Vite**: Um build tool rápida e eficiente.
- **Tailwind CSS**: Um framework CSS utilitário para criar layouts personalizados de forma rápida.
- **React Router DOM**: Para gerenciamento de rotas e navegação na aplicação.
- **React Leaflet**: Biblioteca para exibir mapas interativos utilizando Leaflet.
- **Lucide-react**: Ícones modernos e escaláveis.

---

## 🚀 Começando

Siga os passos abaixo para configurar e executar a aplicação em sua máquina local.

### Pré-requisitos

Você precisa ter o **Node.js** instalado na sua máquina. Se não tiver o Node.js instalado, pode baixá-lo [aqui](https://nodejs.org/).

### Passo a Passo

1. **Clone o repositório para sua máquina local**

   ```bash
   git clone https://github.com/gustavofucilini/ong-monitoring-fiap.git
    ```	
2. **Acesse a pasta do projeto**
    ```bash
    cd ong-monitoring-fiap
    ```	
3. **Instale as dependências**
    Utilize o npm ou o yarn para instalar as dependências do projeto.
    ```bash
    npm install

    ou

    yarn install
    ```	
4. **Inicie o servidor de desenvolvimento**
    Agora você pode iniciar o servidor de desenvolvimento utilizando o seguinte comando:
    ```bash
    npm run dev

    ou

    yarn dev
    ```	
    Isso irá iniciar a aplicação no modo de desenvolvimento. Você pode acessá-la em http://localhost:3000.
5. **Caso queira construir o projeto para produção, execute o comando:**
    Agora você pode iniciar o servidor de desenvolvimento utilizando o seguinte comando:
    ```bash
    npm run build

    ou

    yarn build
    ```	
    Isso irá gerar os arquivos otimizados para produção dentro da pasta dist.

### 📁 Estrutura do Projeto
Aqui está uma visão geral da estrutura de pastas do projeto:
    
    ├── public
    │   ├── index.html       # Ponto de entrada da aplicação
    ├── src
    │   ├── components       # Componentes reutilizáveis da aplicação
    │   │   ├── Sidebar.jsx
    │   │   ├── DistributionMap.jsx
    │   │   └── ...
    │   ├── pages            # Páginas principais da aplicação
    │   │   ├── ONGsMonitoring.jsx
    │   │   ├── DistributionMapScreen.jsx
    │   │   └── ...
    │   ├── App.jsx          # Componente principal da aplicação
    │   ├── main.jsx         # Arquivo principal de inicialização
    │   └── index.css        # Estilos globais
    ├── package.json         # Dependências e scripts
    ├── tailwind.config.js   # Configurações do Tailwind CSS
    └── vite.config.js       # Configurações do Vite

### Comandos úteis
    npm run dev ou yarn dev - Inicia o servidor de desenvolvimento.
    npm run build ou yarn build - Compila o projeto para produção.
    npm run preview ou yarn preview - Visualiza o projeto após o build.

### 🔗 Links Úteis
    Documentação do React
    Documentação do Vite
    Documentação do Tailwind CSS
    Documentação do React Leaflet