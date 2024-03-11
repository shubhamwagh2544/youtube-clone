import { Grid, Paper, Typography } from "@mui/material"


export default function VideoItem({ video, videoSelect }) {
    return (
        <Grid item xs={12}>
            <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => videoSelect(video)}>
                <img style={{ marginRight: '10px' }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
                <Typography variant="subtitle1">{video.snippet.title}</Typography>
            </Paper>
        </Grid>
    )
}