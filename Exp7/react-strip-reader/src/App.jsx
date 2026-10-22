import PatientInfo from "./PatientInfo";
import "./App.css";
 
function App() {
  return (
    <div>
      <h1>Urine Test Strip Reader - Patient Information</h1>
      <PatientInfo
        name="Rahul Sharma"
        patientId="KJS-P-0001"
        test="10-Parameter Urinalysis Strip"
        initialAge={35}
      />
    </div>
  );
}
 
export default App;