import Link from "next/link";
import styles from "../../styles/Employees.module.css";

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
  employees.sort((a, b) =>
    a.liked > b.liked ? -1 : b.liked > a.liked ? 1 : 0
  );

  return (
    <div>
      <h1 className={styles.header}>Employees List</h1>
      <div>
        <label>
          Filter by:
          <select>
            <option value="position">Position</option>
            <option value="location">Location</option>
          </select>
        </label>
      </div>
      {employees.map((employee) => (
        <Link href={`/employee/${employee.id}`} key={employee.id}>
          <div className={styles.listitem}>
            <h3>
              <img
                className={styles.test}
                src={`https://test-task-api-optimo.herokuapp.com${employee.avatar}`}
                alt="avatar"
                width={"40px"}
              ></img>
              {employee.name}
            </h3>
            <h3>Position: {employee.description}</h3>
            <h3>Likes: {employee.liked}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
