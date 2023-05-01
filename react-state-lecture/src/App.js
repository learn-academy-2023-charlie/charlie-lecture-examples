import Tracker from './components/Tracker'

const App = () => {
  return (
    <>
      <h1>Charlie is going to help me run!</h1>
      <h2>Janurary</h2>
      <Tracker />
      {/* Component Call */}
      <h2>February</h2>
      <Tracker />
      <h2>March</h2>
      <Tracker />
      <h2>April</h2>
      <Tracker />
      <h2>May</h2>
      <Tracker />
    </>
  )
}

export default App