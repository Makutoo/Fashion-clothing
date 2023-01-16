import { Component } from "react";

class CardList extends Component {
    render() {
        // when return a component make sure there is only top level component to return
        console.log(this.props)
        const { monsters } = this.props
        return (
            <div>
                {monsters.map(monster => (
                    <h1 key={monster.id}>{monster.name}</h1>
                ))}
            </div>
        )
    }
}

export default CardList