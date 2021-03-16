const Header = ({ languages }) => {

    return (
        <header className="jumbotron mt-4 mb-0">
            <h1>{languages.title}</h1>
        </header>
    )
}

export default Header;