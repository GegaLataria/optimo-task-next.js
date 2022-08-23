import Link from "next/link";

const Header = () => {
  return (
    <nav className="header-class">
      <img></img>
      <Link href={"/feedback"}>
        <a className="header-class__item">Feedback</a>
      </Link>
      <Link href={"/employee"}>
        <a className="header-class__item">Employees</a>
      </Link>
      <Link href={"/"}>
        <a className="header-class__item">Home</a>
      </Link>
    </nav>
  );
};

export default Header;
