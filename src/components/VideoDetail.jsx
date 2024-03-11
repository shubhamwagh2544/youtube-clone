import { Paper, Typography } from "@mui/material"


export default function VideoDetail({ video }) {

    if (!video) return <div>Loading...</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    //console.log(video.id.videoId)

    return (
        <>
            <Paper elevation={6} style={{ height: '50%' }}>
                <iframe frameBorder='0' height="100%" width="100%" title="Video Player"
                    src={videoSrc}
                />
            </Paper>
            <Paper elevation={6} style={{ padding: '15px' }}>
                <Typography variant="h5">{video.snippet.title}</Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>
            </Paper>
        </>
    )
}