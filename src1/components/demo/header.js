import ThemeToggler from "./ThemeToggler";

const headerStyles = {
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}

const Header = () => {
    return (
        <Header style = {headerStyles}>
            <h1>Context API</h1>
            <ThemeToggler />
        </Header>
    )
}

export default Header;