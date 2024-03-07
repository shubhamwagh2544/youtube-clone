import { Grid } from "@mui/material";
import { SearchBar, VideoDetail, VideoList } from "./components";
import axios from "axios";


function App() {

  async function submitHandler(search) {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: import.meta.env.VITE_YOUTUBE_API_KEY,
        q: search
      }
    })
    console.log(response.data)
  }

  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid justify="center" container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={submitHandler} />
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
