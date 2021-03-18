import { Component } from "react";
import { Form, Button } from "react-bootstrap"
import LanguageButton from "../LanguageButton";

class GameForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            player1Name: this.props.player1Name,
            player2Name: this.props.player2Name,
            pointsToWin: this.props.pointsToWin,
            pointsToChange: this.props.pointsToChange,
        }

        this.handleP1NameChange = this.handleP1NameChange.bind(this);
        this.handleP2NameChange = this.handleP2NameChange.bind(this);
        this.handleWinPointsChange = this.handleWinPointsChange.bind(this);
        this.handleServePointsChange = this.handleServePointsChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleP1NameChange = (e) => this.setState({ player1Name: e.currentTarget.value })

    handleP2NameChange = (e) => this.setState({ player2Name: e.currentTarget.value })

    handleWinPointsChange = (e) => this.setState({ pointsToWin: e.currentTarget.value })

    handleServePointsChange = (e) => this.setState({ pointsToChange: e.currentTarget.value })

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.submitForm({ ...this.state })
    }

    render() {

        const { player1Name, player2Name, pointsToWin, pointsToChange } = this.state;
        const { languages } = this.props;

        return (

            <Form onSubmit={this.handleFormSubmit}>
                <Form.Group controlId="gameForm.NameInput1">
                    <Form.Label>{languages.player1}</Form.Label>
                    <Form.Control type="text" value={player1Name} onChange={this.handleP1NameChange} placeholder={languages.enterPlayerName} />
                </Form.Group>
                <Form.Group controlId="gameForm.NameInput1">
                    <Form.Label>{languages.player2}</Form.Label>
                    <Form.Control type="text" value={player2Name} onChange={this.handleP2NameChange} placeholder={languages.enterPlayerName} />
                </Form.Group>
                <Form.Group controlId="gameForm.NameInput1">
                    <Form.Label>{languages.pointsToWin}</Form.Label>
                    <Form.Control type="number" value={pointsToWin} onChange={this.handleWinPointsChange} placeholder={languages.enterWinPoints} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>{languages.changeServerEvery}</Form.Label>
                    <Form.Control onChange={this.handleServePointsChange} value={pointsToChange} as="select">
                        <option value={5}>5 {languages.points}</option>
                        <option value={4}>4 {languages.points}</option>
                        <option value={3}>3 {languages.points}</option>
                        <option value={2}>2 {languages.points}</option>
                        <option value={1}>1 {languages.point}</option>
                    </Form.Control>
                </Form.Group>
                <Button style={{ marginRight: 20 + "px" }} variant="primary" type="submit">
                    Submit
                </Button>
                <LanguageButton />
            </Form>


        )
    }

}

export default GameForm;
