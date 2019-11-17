import React from 'react';

function Header() {
    return (
        <div style={styles}>
            <h1 style={{textAlign: 'center', margin:'0'}}>Welcome to the React Markdown Previewer</h1>
            <h4 style={{textAlign: 'center', paddingBottom: '10px'}}>Use the editor to write your Markup and observe as the Previewer dynamically updates with your input.</h4>
        </div>
    )
}

const styles = {
    background: '#202A25',
    color: 'white',
    width: '100%',
    margin: '0'
}

export default Header;
