import { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";

function AddTask({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">

      <Input
        type="text"
        placeholder="Titulo da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input
        type="text"
        placeholder="Descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Por favor, preencha todos os campos")
          };
          onAddTask(title, description)
          setTitle("")
          setDescription("")
        }}
        className="bg-slate-500 p-2 text-white rounded-md font-medium">
        Adicionar</button>
    </div>
  );
}

AddTask.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default AddTask;