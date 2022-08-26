import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="footer-class">
        <Link href={"/"}>
          <a className="footer-class__item">Home</a>
        </Link>
        <Link href={"/feedback"}>
          <a className="footer-class__item">Feedback</a>
        </Link>
        <Link href={"/employee"}>
          <a className="footer-class__item">Employees</a>
        </Link>
      </footer>
      <p className="footer">Copyright 2022</p>
    </div>
  );
};

export default Footer;
