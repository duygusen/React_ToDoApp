import "./App.css";
import { useState ,useEffect } from "react";
import { Dropdown } from "semantic-ui-react";


function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [completionday, setCompletionday] = useState("");
  const [dropdownOptions] = useState([
    { key: "pazartesi", text: "Pazartesi", value: "Pazartesi" },
    { key: "salı", text: "Salı", value: "Salı" },
    { key: "çarşamba", text: "Çarşamba", value: "Çarşamba" },
    { key: "perşembe", text: "Perşembe", value: "Perşembe" },
    { key: "cuma", text: "Cuma", value: "Cuma" },
    { key: "cumartesi", text: "Cumartesi", value: "Cumartesi" },
    { key: "pazar", text: "Pazar", value: "Pazar" },

  ]);

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: text,
        completionday: completionday || (todos.length > 0 ? todos[todos.length - 1].completionday : alert("Please fill in the completion date")),
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setText("");
      setCompletionday("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    if (todos.length === 0) {
      setCompletionday("");
    }
  }, [todos]);

  return (
    <div>
      <h1 class="todo-title">Weekly Program App</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTodo();
        }}
      >
        <input
          type="text"
          class="task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add New Task"
        />
        <Dropdown
          placeholder="Select Completion Day"
          fluid
          selection
          options={dropdownOptions}
          onChange={(e, { value }) => setCompletionday(value)}
        />
        <button class="ui positive button" type="submit">
          Add
        </button>
      </form>
      <div>
        {todos.map((todo) => (
          <div class="todo" key={todo.id}>
            <span class="ui input">
              <input type="text" placeholder={todo.text} />
            </span>
            <span class="ui input">
              <input type="text" placeholder={todo.completionday} />
            </span>
            
            <button
              class="ui negative button"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
