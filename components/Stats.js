import React from 'react';
// import Player from './Player.js'

const Stats = (props) => {

    const totalPlayers = props.players.length;
    // let totalScore = props.players[3].score;
    let totalPoints = props.players.reduce( (total, player) => {
        return total + player.score;
    }, 0);

    // console.log(totalPoints);
    

    return (
        <table className="stats">
            <tbody>
                <tr>
                <td>Players:</td>
                <td>{totalPlayers}</td>
                </tr>
                <tr>
                <td>Total Points:</td>
                <td>{ totalPoints }</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Stats;