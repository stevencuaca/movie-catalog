import Search from "./Search";

const Header = ({setSearchingProps}) => {

  const setSearchProps = (value) => {
    setSearchingProps(value)
  }

  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
        <a href="/#" className="navbar-brand fw-bold fs-4">
          FinProH8
        </a>

        <Search setSearching = {setSearchProps}/>
      </nav>
    </div>
  );
};

export default Header;
