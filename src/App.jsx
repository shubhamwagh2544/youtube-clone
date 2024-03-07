import { Grid } from "@mui/material";
import youtube from "./api/youtube";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";


function App() {
  return (
    <Grid justify="center" container spacing={16}>
      <Grid item xs={12}>
        <Grid justify="center" container spacing={16}>
          <Grid item xs={12}>
            <SearchBar />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail />
          </Grid>
          <Grid item xs={4}>
            <VideoList />
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  )
}

export default App
