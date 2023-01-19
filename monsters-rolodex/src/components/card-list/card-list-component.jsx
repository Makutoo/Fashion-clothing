// import { Component } from "react";
import CardContainer from "../card-container/card-container-component";
import './card-list.styles.css'

const CardList = (props) => {
    const { monsters } = props

    return (
        <div className="card-list">
            {monsters.map((monster) => {
                return (
                    <CardContainer monster={monster} key={monster.id} />
                )
            })}
        </div>
    )
}
// class CardList extends Component {
//     render() {
//         // when return a component make sure there is only top level component to return
//         // console.log(this.props)
//         const { monsters } = this.props
//         return (
//             <div className="card-list">
//                 {monsters.map((monster) => {
//                     return (
//                         <CardContainer monster={monster} key={monster.id}/>
//                     )
//                 })}
//             </div>
//         )
//     }
// }

export default CardList