import "./App.css";
import ThemeProvider from "./Theme_Context";
import ThemeComp from "./Theme_Context";
import Theme from "./Theme";
function App() {
  return (
    <div>
      <ThemeProvider>
        <div>
          <Theme />
          <ThemeComp />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
