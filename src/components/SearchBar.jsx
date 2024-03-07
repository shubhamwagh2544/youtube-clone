import { Paper, TextField } from "@mui/material"
import { useState } from "react"

export default function SearchBar({ onFormSubmit }) {

    const [search, setSearch] = useState("")

    function handler(e) {
        setSearch(e.target.value)
    }

    function submitHandler(e, props) {
        e.preventDefault()
        onFormSubmit(search)
    }

    return (
        <Paper elevation={6} style={{ padding: "25px" }}>
            <form onSubmit={submitHandler}>
                <TextField fullWidth label="Search..." onChange={handler} autoComplete="off" />
            </form>
        </Paper>
    )
}