import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeword] = useState("");
  const onChange = (event) => setKeword(event.target.value);
  const onClick = () => setValue((prev)=>prev+1);
  console.log("i run all the time");
  useEffect (()=>{
    console.log("CALL THE API...");
  },[]);
  useEffect(()=> {
    console.log("i run when 'keyword' changes");
  }, [keyword]);
  useEffect(()=> {
    console.log("i run when 'counter' changes");
  }, [counter]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="search here..."/>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick} text={"Continue"}>Click me</button>
    </div>
  );
}

export default App;
