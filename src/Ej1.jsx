import PersonClass from './components/PersonClass'
import PersonFunc from './components/PersonFunc'

function Ej1() {

  return (
    <div className="Ej1">
      <PersonFunc name="Marisa" surname="Benito" age="70" />
      <PersonFunc name="Vicenta" surname="Benito" age="80" />
      <PersonFunc name="Concha" surname="de la Fuente" age="80" />

      <PersonClass name="Mariano" surname="Delgado" age="70" />
      <PersonClass name="Emilio" surname="Delgado" age="30" />
      <PersonClass name="Josemi" surname="Cuesta" age="10" />
    </div>
  )
}

export default Ej1