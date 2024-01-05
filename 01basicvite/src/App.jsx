import Youtube from "./Youtube"

//These functions are called components. Also , any file with .jsx returs html from react.

function App() {
  const username = "Tryambak"
  return (
    <>
        <h1>Classic Vite React App {username}</h1>
        <Youtube />
    </>
    
  )
}

export default App
