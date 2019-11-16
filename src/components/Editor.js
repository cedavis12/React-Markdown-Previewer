import React from 'react';
import TextField from '@material-ui/core/TextField';

function Editor() {
    return (
        <div>
            <TextField
                id="editor"
                multiline
                fullWidth
                rows="5"
                defaultValue="Markdown Editor"
                variant="outlined"
            />
        </div>
    )
}

export default Editor;
