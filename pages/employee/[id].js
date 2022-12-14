import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Employees.module.css";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://test-task-api-optimo.herokuapp.com/employee"
  );
  const data = await res.json();

  const paths = data.map((employee) => {
    return {
      params: { id: employee.id.toString() },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    `https://test-task-api-optimo.herokuapp.com/employee/${id}`
  );
  const data = await res.json();

  const loc = data.location_id;
  const res2 = await fetch(
    "https://test-task-api-optimo.herokuapp.com/location"
  );
  const data2 = await res2.json();
  let location;
  data2.map((item) => {
    if (item.id === loc) {
      location = item.name;
    }
  });

  return {
    props: { employee: data, location: location },
  };
};

const Details = ({ employee, location }) => {
  const [likes, setLikes] = useState(employee.liked);
  const handleClick = () => {
    setLikes(likes + 1);
    fetch(
      `https://test-task-api-optimo.herokuapp.com/employee/${employee.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(likes),
      }
    );
  };
  return (
    <div>
      <h1 className={styles.header}>
        <span className={styles.title}>Employee: {employee.name}</span>
      </h1>
      <div className={styles.employee}>
        <div>
          <Image
            src={`https://test-task-api-optimo.herokuapp.com${employee.avatar}`}
            alt="avatar"
            width={300}
            height={300}
          ></Image>
          <h1>{employee.name}</h1>
          <h3>Position: {employee.description}</h3>
          <h3>Likes: {likes}</h3>

          <h3>Location: {location}</h3>
          <button className={styles.button} onClick={handleClick}>
            Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
