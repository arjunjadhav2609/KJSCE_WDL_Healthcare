import { useState } from "react";
 
// Reusable functional component.
// Props (name, patientId, test, initialAge) arrive from the parent (App.jsx).
function PatientInfo({ name, patientId, test, initialAge }) {
  // State: 'age' is the current value, 'setAge' is the function that changes it.
  const [age, setAge] = useState(initialAge);
 
  return (
    <div className="card">
      <h2>Patient Details</h2>
      <p>Name: {name}</p>
      <p>Patient ID: {patientId}</p>
      <p>Test: {test}</p>
      <p>Age: {age}</p>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
    </div>
  );
}
 
export default PatientInfo;