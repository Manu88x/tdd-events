import { useState } from "react";

function App() {
  // State to track whether the pepperoni checkbox is checked or not
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);

  // Function to toggle the checkbox state
  function togglePepperoni(e) {
    setPepperoniIsChecked(e.target.checked);
  }

  return (
    <div>
      <h1>Select Pizza Toppings</h1>

      {/* Checkbox for adding pepperoni */}
      <input
        type="checkbox"
        id="pepperoni"
        checked={pepperoniIsChecked}
        aria-checked={pepperoniIsChecked}
        onChange={togglePepperoni} // Handles checkbox change
      />
      <label htmlFor="pepperoni">Add pepperoni</label>

      {/* List of toppings */}
      <h2>Your Toppings:</h2>
      <ul>
        <li>Cheese</li> {/* Cheese is always listed */}
        {pepperoniIsChecked && <li>Pepperoni</li>} {/* Conditionally render Pepperoni */}
      </ul>
    </div>
  );
}

export default App;
