function Patients() {

  const patients = [
    { id: 1, name: "Rahul Sharma", patientId: "KJS-P-0001", test: "10-Parameter Urinalysis Strip" },
    { id: 2, name: "Priya Nair", patientId: "KJS-P-0002", test: "10-Parameter Urinalysis Strip" },
    { id: 3, name: "Imran Shaikh", patientId: "KJS-P-0003", test: "10-Parameter Urinalysis Strip" },
  ];
 
  return (
    <div>
      <h1>Patient List</h1>
      {/* map() turns every object in the array into one JSX element */}
      {patients.map((patient) => (
        <p key={patient.id} className="record">
          {patient.name} - {patient.patientId} - {patient.test}
        </p>
      ))}
    </div>
  );
}
 
export default Patients;