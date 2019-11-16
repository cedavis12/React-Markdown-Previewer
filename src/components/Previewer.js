import React from 'react';
import TextField from '@material-ui/core/TextField';

function Previewer() {
    return (
        <div>
            <TextField
                id="previewer"
                multiline
                fullWidth
                rows="10"
                defaultValue="Markdown Previewer"
                variant="outlined"
            />
        </div>
    )
}

export default Previewer;