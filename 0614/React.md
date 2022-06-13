## React

vanilla JS : HTML > JS 

React : JS > HTML

```react
<script src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```

- JSX
  - Babel : JSX코드를 브라우저가 이해할 수 있게 변환
  - 컴포넌트 첫글자 : 대문자

```html
    <!DOCTYPE html>
    <html lang="en">
    <body>
        <div id="root"></div>
    </body>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
    <script type="text/babel">
        const root = document.getElementById("root");
        function Title() {
            return (
                <h3 id="title" onMouseEnter={()=>console.log("mouse eneter")} >
                    Hello im a title
                </h3>
            );
        }
        const Button =()=> (
            <button 
                style={{
                    backgroundColor: "tomato",
                }}
                onClick={()=>console.log("im clicked")}
            >
                Click me
                </button>
        )
        const Container =()=> (
            <div>
            <Title /> 
            <Button />
            </div>
            );
        ReactDOM.render(<Container/>, root);
    </script>
    </html> 
```



- state
- modifier로 변수 변경 및 리렌더링

```html
    <!DOCTYPE html>
    <html lang="en">
    <body>
        <div id="root"></div>
    </body>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
    <script type="text/babel">
        const root = document.getElementById("root");
        function App() {
            const [counter, setCounter] = React.useState(0);
            const onClick =()=> {
                setCounter(counter+1);
                
            };
            return(  
            <div>
                <h3>Total clicks:{counter}</h3>
                <button onClick={onClick}>Click me</button>
            </div> 
            );
        }
        ReactDOM.render(<App />, root);
    </script>
    </html> 
```

```
// setCounter(counter+1);
setCounter((current)=> current+1);
```



- converter

```html
    <!DOCTYPE html>
    <html lang="en">
    <body>
        <div id="root"></div>
    </body>
    <script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
    <script type="text/babel">

        function App() {
            const [amount, setAmount] = React.useState(0);
            const [inverted, setInverted] = React.useState(false);
            const onChange = (event) => {
                setAmount(event.target.value);
            };
            const reset = () => setAmount(0);
            const onInvert = () => {
                reset();
                setInverted((current)=>!current);}
            return(
            <div>  
            <div>
                <h1>Super Converter</h1>
                <label for="minutes">Minutes</label>
                <input value={inverted ? amount*60 : amount} id="minutes" placeholder="Minutes" type="number" onChange={onChange}  disabled={inverted}/>
                
                <label for="hours">Hours</label>
                <input  value={inverted ? amount : Math.round(amount/60)} id="hours" placeholder="Hours" type="number" onChange={onChange} disabled={!inverted}/>
            </div> 
            <button onClick={reset}>Reset</button>
            <button onClick={onInvert}>{inverted ? "Turn back" : "Invert"}</button>
            </div>
            );
        }
        const root = document.getElementById("root");
        ReactDOM.render(<App />, root);
    </script>
    </html> 
```

