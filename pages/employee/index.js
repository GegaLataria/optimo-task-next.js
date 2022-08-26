import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  const [selectedPosition, setSelectedPosition] = useState("noposition");
  const [selectedLocation, setSelectedLocation] = useState("noloc");
  let topThree = [];
  employees.sort((a, b) =>
    a.liked > b.liked ? -1 : b.liked > a.liked ? 1 : 0
  );
  employees.map((employee) => {
    topThree.push(employee.name);
  });
  topThree = topThree.slice(0, 3);

  const handleChange = (event) => {
    setSelectedPosition(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div>
      <h1 className={styles.header}>
        <span className={styles.title}>Employees List</span>
      </h1>
      <div className={styles.dropdown}>
        <label className={styles.label}>
          Filter by position:
          <select onChange={handleChange} value={selectedPosition}>
            <option value="noposition">None</option>
            <option value="Frontend developer">Frontend</option>
            <option value="Backend developer">Backend</option>
            <option value="Architect">Architect</option>
          </select>
        </label>
        <label className={styles.label}>
          Filter by Location:
          <select onChange={handleLocationChange} value={selectedLocation}>
            <option value="noloc">None</option>
            <option value="1">USA</option>
            <option value="2">EUR</option>
            <option value="3">GEO</option>
          </select>
        </label>
      </div>

      {employees.map((employee) =>
        (selectedPosition === "noposition" ||
          employee.description === selectedPosition) &&
        (selectedLocation === "noloc" ||
          selectedLocation.toString() === employee.location_id.toString()) ? (
          <Link href={`/employee/${employee.id}`} key={employee.id}>
            <div
              className={[
                `${styles.listitem} ${
                  topThree.includes(employee.name) ? styles.top : ""
                }`,
              ]}
            >
              <h3>
                <div>
                  <Image
                    src={`https://test-task-api-optimo.herokuapp.com${employee.avatar}`}
                    alt="avatar"
                    width={70}
                    height={70}
                  ></Image>
                </div>
                {employee.name}
              </h3>
              <h3>Position: {employee.description}</h3>
              <h3>Likes: {employee.liked}</h3>
            </div>
          </Link>
        ) : null
      )}
    </div>
  );
}
