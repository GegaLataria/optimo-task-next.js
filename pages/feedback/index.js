import { useState } from "react";
import styles from "../../styles/Feedback.module.css";

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
      <div className={styles.container}>
        <form className={styles.form}>
          <p>Name</p>
          <input
            className={styles.input}
            type={"text"}
            name="name"
            placeholder="Name"
            required
            onChange={() => setMessages(null)}
          ></input>
          <p>E-mail</p>
          <input
            className={styles.input}
            type={"email"}
            name="email"
            placeholder="Email"
            required
            onChange={() => setMessages(null)}
          ></input>
          <p>Text Message</p>
          <textarea
            placeholder="Enter Message"
            className={styles.input}
            required
            name="message"
            onChange={() => setMessages(null)}
          ></textarea>
          <input
            className={styles.button}
            type={"submit"}
            onClick={handleClick}
          ></input>
          {messages ? <h3>{messages}</h3> : null}
        </form>
      </div>
    </div>
  );
};
export default Feedback;
