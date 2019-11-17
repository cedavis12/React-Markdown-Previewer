import React from 'react';
import TextField from '@material-ui/core/TextField';


function Editor(props) {
    return (
        <div style={styles}>
          <TextField
                id="editor"
                label="Markdown Editor"
                multiline
                fullWidth
                rows="50"
                defaultValue={props.markdown}
                variant="outlined"
                onChange={props.onChange}
            /> 
        </div>
    )
}

const styles = {
    marginTop: '50px',
    marginBottom: '25px',

}


export default Editor;
