export const getStaticProps = async () => {
  const res = await fetch(
    "https://test-task-api-optimo.herokuapp.com/employee"
  );
  const data = await res.json();

  return {
    props: { employees: data },
  };
};

export default function EmployeesList({ employees }) {
  return (
    <div>
      <h1>Employees List</h1>
      {employees.map((employee) => (
        <div key={employee.id}>
          <a>
            <h3>{employee.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
}
