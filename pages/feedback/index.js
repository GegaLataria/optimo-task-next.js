import { useState } from "react";
import styles from "../../styles/Employees.module.css";

const Feedback = () => {
  const [messages, setMessages] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    const form = document.forms[0];
    if (form.name.value && form.email.value && form.message.value) {
      setMessages("Feedback has been successfully sent");
      form.name.value = "";
      form.email.value = "";
      form.message.value = "";
    } else {
      setMessages("Please complete all the required fields");
    }
  };
  return (
    <div>
      <h1 className={styles.header}>
        <span className={styles.title}>Feedback Page</span>
      </h1>
      <form>
        <input
          className={styles.input}
          type={"text"}
          name="name"
          placeholder="Name"
          required
          onChange={() => setMessages(null)}
        ></input>
        <br></br>
        <input
          className={styles.input}
          type={"email"}
          name="email"
          placeholder="Email"
          required
          onChange={() => setMessages(null)}
        ></input>
        <br></br>
        <textarea
          placeholder="Enter Message"
          className={styles.input}
          required
          name="message"
          onChange={() => setMessages(null)}
        ></textarea>
        <br></br>
        <input type={"submit"} onClick={handleClick}></input>
      </form>
      {messages ? <h3>{messages}</h3> : null}
    </div>
  );
};
export default Feedback;
