import { NavLink } from "react-router-dom";
import "./VendingMachine.css";
const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <h1>Hello, I'm a vending machine. What would you like to eat?</h1>
      <nav>
        <NavLink exact to="/chips">
          Chips
        </NavLink>
        <NavLink exact to="/soda">
          Soda
        </NavLink>
        <NavLink exact to="/sardines">
          Sardines
        </NavLink>
      </nav>
    </div>
  );
};

export default VendingMachine;
