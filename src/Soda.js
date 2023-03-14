import { NavLink } from "react-router-dom";
const Soda = () => {
  return (
    <div>
      <h1>Soda!!!!</h1>
      <NavLink exact to="/">
        Go Back
      </NavLink>
    </div>
  );
};

export default Soda;
