import React, { useState } from "react";
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  // Estado para controlar a visibilidade da lista de tarefas
  const [showTasks, setShowTasks] = useState(true);

  // Função para alternar a visibilidade da lista de tarefas
  const toggleTaskVisibility = () => {
    setShowTasks((prevShowTasks) => !prevShowTasks);
  };

  return (
    <div className="App">
      {/* Passando props para o componente Header */}
      <Header
        toggleTaskVisibility={toggleTaskVisibility}
        showTasks={showTasks}
      />
      {/* Renderizando ListarTarefa com base no estado de showTasks */}
      {showTasks && <ListarTarefa />}
    </div>
  );
}

export default App;
