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
  return (
    <div>
      <h1>{employee.name}</h1>
      <h3>Position: {employee.description}</h3>
      <h3>Likes: {employee.liked}</h3>
      <img
        src={`https://test-task-api-optimo.herokuapp.com${employee.avatar}`}
        alt="avatar"
      ></img>
      <h3>Location: {location}</h3>
    </div>
  );
};

export default Details;
