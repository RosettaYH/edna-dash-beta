import logo from "./logo.svg";
import "./App.css";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import React, { useMemo } from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";
import Home from "./scenes/home";
import Sample from "./scenes/sample";
import Stat from "./scenes/stat";

function App() {
  // const theme = createTheme(themeSettings);
  const theme = useMemo(() => createTheme(themeSettings), []);

  // const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app">
          <Sidebar className="sidebar" />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="sample" element={<Sample />} /> */}
              <Route path="sample/:token" element={<Sample />} />
              <Route path="/insights" element={<Stat />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
