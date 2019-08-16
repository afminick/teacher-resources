import React from 'react';


class MainSite extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value:''
        };
    }

    render() {
        return (
            <main>
                <p>This is the main part of the page</p>
            </main>
        )
    }
}

export default MainSite;