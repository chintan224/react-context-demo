import ThemeToggler from "./ThemeToggler";

const headerStyle = {
    padding:"1rem",
    display:"flex",
    justifyContent:"space-between",
    alignItems: "center"
}

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>Context API</h1>
            <ThemeToggler/>
        </header>
    )
}

export default Header;