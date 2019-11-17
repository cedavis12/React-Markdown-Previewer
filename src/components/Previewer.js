import React from 'react';
import TextField from '@material-ui/core/TextField';


function Previewer() {
    return (
        <div>
            <TextField
                id="previewer"
                label="Markdown Previewer"
                multiline
                fullWidth
                rows="10"
                defaultValue="State?"
                variant="outlined"
            />
        </div>
    )
}



export default Previewer;