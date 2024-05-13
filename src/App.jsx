import { useState } from 'react'
import { PartOne } from './Components/PartOne/PartOne'
import st from "./App.module.css"


function App() {
    return (
        <div className={st.main}>
            <PartOne />
            {/* <PartTwo /> */}
        </div>
    )
  
}

export default App
