import "./Dropdown.scss";

function Dropdown({ btnText }) {
  return (
    <div className="dropdown">
      <div className="dropdown__wrapper">
        <button className="dropbtn">{btnText}</button>
        <div className="dropdown__arrow dropdown__arrow-black "></div>
        {/* <div className="dropdown__arrow dropdown__arrow-white "></div> */}
      </div>
      <p className="show">Show</p>
      <ul className="dropdown-content">
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
      </ul>
    </div>
  );
}

export default Dropdown;
