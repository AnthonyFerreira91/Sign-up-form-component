import FormComponent from "./components/FormComponent"; // Minimal Render & Input uncontrolled
// import {FormWithLibrary as FormComponent} from "./components/FormWithLibrary";

function App() {
  return (
    <>
      <div className="app">
        <header>
          <h1>Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problems in real-time.
            Watching scripted tutorials is great, but understanding how
            developers think is invaluable.
          </p>
        </header>
        <main>
          <div className="freeTry">
            <p><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
          </div>
          <div className="mainForm">
            <FormComponent/>
            <p>By clicking the button, you are agreeing to our <strong className="colorPrimary1">Terms and Services</strong></p>
          </div>
        </main>
      </div>

      <footer>
        <p className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/Matrixfrpro33" target="_blank">Matrixfrpro</a>.
        </p>
      </footer>
    </>
  )
}

export default App
