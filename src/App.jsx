import { useState} from "react";
import "./App.css";
import Form from "./components/Form";
import Result from "./components/Result";


function App() {
  const [inputSearch, setInputSearch] = useState("");
 
  return (
    <> <div className="w-full p-2.5 md:w-full md:p-5">
      <Form inputSearch={inputSearch} setInputSearch={setInputSearch}  />
      <Result inputSearch={inputSearch} />

    </div>
  
    </>
  );
}

export default App;
