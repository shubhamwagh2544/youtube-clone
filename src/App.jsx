import { Grid } from "@mui/material";
import { SearchBar, VideoDetail, VideoList } from "./components";
import axios from "axios";
import { useState } from "react";


function App() {

  const [videoState, setVideosState] = useState({
    videos: [],
    selectedVideo: null
  })

  async function submitHandler(search) {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: import.meta.env.VITE_YOUTUBE_API_KEY,
        q: search
      }
    })
    console.log(response.data.items)

    setVideosState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
    console.log(videoState)
  }

  function videoSelect(video) {
    setVideosState({
      ...videoState,
      selectedVideo: video
    })
  }

  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid justify="center" container spacing={5}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={submitHandler} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={videoState.selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videoState.videos} videoSelect={videoSelect} />
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  )
}

export default App
