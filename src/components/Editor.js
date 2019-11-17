import React from 'react';
import TextField from '@material-ui/core/TextField';

function Editor() {
    return (
        <div style={styles}>
            <TextField
                id="editor"
                label="Markdown Editor"
                multiline
                fullWidth
                rows="5"
                defaultValue="State?"
                variant="outlined"
            />
        </div>
    )
}

const styles = {
    marginTop: '50px',
    marginBottom: '25px',

}


export default Editor;
