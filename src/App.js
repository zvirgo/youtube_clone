import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Searchfeed,
  VideoDetail,
  Feed,
  ChannelDetail,
  Navbar,
} from "./component";
const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchItem" element={<Searchfeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
