import Header from "./sections/Header"
import Main from "./sections/Main"

import Languages from "./constants/languages"


function App() {


  return (
    <>
      <Header />
      <Main languages={Languages} />

    </>
  )
}

export default App
