import { useRouter } from "next/router";
import { useState } from "react";

export default function Employee() {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Hello {id}</h1>;
}

export async function getStaticProps({ params }) {
  const req = await fetch(
    `https://test-task-api-optimo.herokuapp.com/${params.id}.json`
  );
  const data = await req.json();

  return {
    props: { employee: data },
  };
}

export async function getStaticPaths() {
  const req = await fetch(
    "https://test-task-api-optimo.herokuapp.com/employee.json"
  );
  const data = await req.json();

  // const paths = data.map((employee) => {
  //   return {
  //     params: { id: employee },
  //   };
  // });

  // return {
  //   paths,
  //   fallback: false,
  // };
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
      { params: { id: "5" } },
      { params: { id: "6" } },
    ],
    fallback: false,
  };
}
