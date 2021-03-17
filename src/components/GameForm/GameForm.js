import { Component } from "react";
import { Form, Button } from "react-bootstrap"

class GameForm extends Component {


    constructor(props) {
        super(props)

        this.state = {
            player1Name: "",
            player2Name: "",
            pointsToWin: 21,
            pointsToChange: 5,
        }

        this.handleP1NameChange = this.handleP1NameChange.bind(this);
        this.handleP2NameChange = this.handleP2NameChange.bind(this);
        this.handleWinPointsChange = this.handleWinPointsChange.bind(this);
        this.handleServePointsChange = this.handleServePointsChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleP1NameChange = (e) => {
        this.setState({
            player1Name: e.currentTarget.value
        })
    }

    handleP2NameChange = (e) => {
        this.setState({
            player2Name: e.currentTarget.value
        })
    }

    handleWinPointsChange = (e) => {
        this.setState({
            pointsToWin: e.currentTarget.value
        })
    }

    handleServePointsChange = (e) => {
        this.setState({
            pointsToChange: +e.currentTarget.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.submitForm({ ...this.state })
    }

    render() {

        const { player1Name, player2Name, pointsToWin, pointsToChange } = this.state;

        return (

            <Form onSubmit={this.handleFormSubmit}>
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
                        <option value={5}>5 points</option>
                        <option value={4}>4 points</option>
                        <option value={3}>3 points</option>
                        <option value={2}>2 points</option>
                        <option value={1}>point</option>
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
