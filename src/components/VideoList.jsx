import { Grid } from "@mui/material"
import VideoItem from "./VideoItem"

export default function VideoList({ videos, videoSelect }) {
    const videoList = videos.map((video, id) => <VideoItem key={id} video={video} videoSelect={videoSelect} />)
    return (
        <Grid container spacing={3}>
            {videoList}
        </Grid>
    )
}