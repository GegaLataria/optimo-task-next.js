import { useState } from "react";
import styles from "../../styles/Feedback.module.css";

const Feedback = () => {
  const [messages, setMessages] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault();
    const form = document.forms[0];
    if (form.name.value && form.email.value && form.message.value) {
      if (!form.email.value.includes("@")) {
        setMessages("Please enter valid email");
      } else {
        const response = await fetch(
          "https://test-task-api-optimo.herokuapp.com/feedback",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: form.name.value,
              email: form.email.value,
              message: form.message.value,
            }),
          }
        );

        response.json().then((data) => {
          console.log(data);
          setMessages("Feedback sent successfully");
        });
        form.name.value = "";
        form.email.value = "";
        form.message.value = "";
      }
    } else {
      setMessages("Complete all the required fields");
    }
  };
  return (
    <div>
      <h1 className={styles.header}>
        <span className={styles.title}>Feedback Page</span>
      </h1>
      <div className={styles.container}>
        <form className={styles.form}>
          <h2 className={styles.feedbackTitle}>Feedback Form</h2>
          <input
            className={styles.input}
            type={"text"}
            name="name"
            placeholder="Name"
            required
            onChange={() => setMessages(null)}
          ></input>
          <input
            className={styles.input}
            type={"email"}
            name="email"
            placeholder="Email"
            required
            onChange={() => setMessages(null)}
          ></input>
          <textarea
            placeholder="Enter Message"
            className={styles.textarea}
            required
            name="message"
            onChange={() => setMessages(null)}
          ></textarea>
          <input
            className={styles.button}
            type={"submit"}
            onClick={handleClick}
          ></input>
          {messages ? <h3 className={styles.message}>{messages}</h3> : null}
        </form>
      </div>
    </div>
  );
};
export default Feedback;
