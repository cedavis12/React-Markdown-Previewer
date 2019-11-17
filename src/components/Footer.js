import React from 'react'

function Footer() {
    return (
        <div style={styles}>
            <p style={{textAlign: 'center', paddingTop: '25px'}}>Coded with &hearts; by Courtney Davis.&nbsp;&nbsp;
            <a style={{color: 'white'}}href="https://github.com/cedavis12/React-Markdown-Previewer"><i className="fab fa-github"></i></a>
            </p>
        </div>
    )
}

const styles = {
    background: '#202A25',
    color: 'white',
    height: '65px',
    marginTop: '75px'
}

export default Footer;
