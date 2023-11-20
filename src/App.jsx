import { useState } from 'react'
import Card from './Card'
import CardDynamic from './CardDynamic'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <CardDynamic link = "klikněte" heading = "Ahoj" description = "Aktuality"></CardDynamic>
        <CardDynamic link = "na" heading = "Vítej" description = "Maturita"></CardDynamic>
        <CardDynamic link = "tento" heading = "na" description = "Suplování"></CardDynamic>
        <CardDynamic link = "odkaz" heading = "SSPŠ" description = "Skripta"></CardDynamic>
      </div>
    </>
  )
}

export default App
