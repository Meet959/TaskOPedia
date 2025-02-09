import logo from "../images/react.png"

function MainHeader() {
    return (
        <div className="pt-3 pl-2" style={{backgroundColor:"black"}}>
            <img src={logo} style={{height:"35px",verticalAlign:"top"}} alt="React Logo"></img>
            <span className="h2 m-2 pt-4 text-white-50"> 
                 REACT COURSE - TaskOPedia
            </span>
        </div>
    );
}
  
function SubHeader() { 
    return (
        <p style={SubHeaderStyle} className="text-center">This will be an exciting course.</p>
    );
}
  
const SubHeaderStyle = {
    color:"blueviolet", 
    backgroundColor:"lightgray"
};

const Header = () => { 
    return (
      <div>
        <MainHeader />
        <SubHeader />
      </div>
    );
}

export default Header;

  