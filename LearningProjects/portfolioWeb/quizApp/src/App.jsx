import React from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { log } from "console";

const App = () => {
  const [todo, setTodo] = React.useState([]);

  const handleTodo = (e) => {

    let todo = e.target.value
    console.log(todo)
    setTodo(todo)
  }
  
  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col ">
        <h1 className="text-3xl font-bold mb-2">Quiz Application</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex w-full max-w-sm items-center gap-2">
            <Input type="text" placeholder="Enter A To-Do" />
            <Button type="submit" variant="outline" onSubmit={handleTodo}>
              Add To-Do
            </Button>
              <ul>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
              </ul>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
