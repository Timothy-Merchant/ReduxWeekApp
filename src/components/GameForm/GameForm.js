import { Component } from "react";
import { Form, Button } from "react-bootstrap"

class GameForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            player1Name: "",
            player2Name: "",
            pointsToWin: 0,
            pointsToChange: 5,
        }

        this.handleP1NameChange = this.handleP1NameChange.bind(this);
        this.handleP2NameChange = this.handleP2NameChange.bind(this);
        this.handleWinPointsChange = this.handleWinPointsChange.bind(this);
        this.handleServePointsChange = this.handleServePointsChange.bind(this);

    }


    render() {

        const { player1Name, player2Name, pointsToWin, pointsToChange } = this.state;

        return (

            <Form>
                <Form.Group controlId="gameForm.NameInput1">
                    <Form.Label>Player 1 name</Form.Label>
                    <Form.Control type="text" value={player1Name} onChange={this.handleP1NameChange} placeholder="Enter player 1 name" />
                </Form.Group>
                <Form.Group controlId="gameForm.NameInput1">
                    <Form.Label>Player 2 name</Form.Label>
                    <Form.Control type="text" value={player2Name} onChange={this.handleP2NameChange} placeholder="Enter player 2 name" />
                </Form.Group>
                <Form.Group controlId="gameForm.NameInput1">
                    <Form.Label>Points to win...</Form.Label>
                    <Form.Control type="number" value={pointsToWin} onChange={this.handleWinPointsChange} placeholder="Enter points needed to win" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Change server every...</Form.Label>
                    <Form.Control onChange={this.handleServePointsChange} value={pointsToChange} as="select">
                        <option>5 points</option>
                        <option>4 points</option>
                        <option>3 points</option>
                        <option>2 points</option>
                        <option>point</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>


        )
    }

}

export default GameForm;
