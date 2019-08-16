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
                <article>I am currently teaching with VIPKID while I travel the world. I am always looking for better ways to interact with my students, while not increasing my load as a traveler. The easiest solution seemed to develop some games I could run using a desktop camera app. After the first few games it seemed like a good idea to be able to autopopulate them with vocabulary from the different lessons. At that point it seemed natural to take that data and create some other teacher tools, like easy links to pictures and animations for the different words I was teaching. </article>
            </main>
        )
    }
}

export default MainSite;