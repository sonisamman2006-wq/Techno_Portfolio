import { useContext } from "react";
import { UserContext } from "./Context/UserContext";

function GrandChild() {
  const { username, age } = useContext(UserContext);

  return (
    <div>
      <h2>GrandChild Component</h2>
      <h3>Name: {username}</h3>
      <h3>Age: {age}</h3>
    </div>
  );
}

export default GrandChild;