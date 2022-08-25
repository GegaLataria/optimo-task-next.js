import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="header">
        <span className="title">Optimo Group</span>
      </h1>
      <div className="main-page">
        <img className="main-logo" src="/OPTIMO.png" alt="logo"></img>
        <h2 className="slogan">
          We deliver Tomorrow's Solutions Today
          <br></br>
          <Link href={"/feedback"}>
            <button className="main-button">Contact Us</button>
          </Link>
        </h2>
      </div>
    </div>
  );
}
