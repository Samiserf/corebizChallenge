import React from "react";
import css from "./styles.module.scss";

export default function Header() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [responseFormApi, setResponseFormApi] = React.useState("");

  const [errorName, setErrorName] = React.useState("");
  const [errorMail, setErrorMail] = React.useState("");

  function sendSuscribe() {
    setErrorName("");
    setErrorMail("");

    if (name === "") {
      setErrorName("El nombre esta vacio.");
    }
    if (!email.includes("@") && !email.includes(".com")) {
      setErrorMail("No es un formato correcto para el email.");
    }
    if (email === "") {
      setErrorMail("El email esta vacio.");
    }
    if (email !== "" && errorName === "" && name !== "" && errorMail === "") {
      console.log("fetch");
      fetch("https://corebiz-test.herokuapp.com/api/v1/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, name: name }),
      })
        .then((res) => res.json())
        .then((res) => setResponseFormApi(res))
        .catch((err) => console.error(err));
    }
  }

  React.useEffect(() => {
    if (
      responseFormApi.message == "Created successfully" &&
      responseFormApi !== undefined
    ) {
      alert("Solicitud enviada correctamente");
    } else if (
      responseFormApi.message !== "Created successfully" &&
      responseFormApi !== undefined
    ) {
      alert("Ha ocurrido un error enviando su solicitud.");
    }
  }, [responseFormApi]);

  const setState = (e, state) => {
    state(e.target.value);
  };

  return (
    <section className={`${css.formContact} formContact`}>
      <h2>¡Únete a nuestras novedades y promociones!</h2>
      <div className={css.infoContact}>
        <div>
          <input
            onChange={(e) => setState(e, setName)}
            placeholder="Ingresa tu nombre"
            type="text"
            className={errorName !== "" && css.error}
          />
          {errorName !== "" && <p>{errorName}</p>}
        </div>
        <div>
          <input
            onChange={(e) => setState(e, setEmail)}
            placeholder="Ingresa tu mail"
            type="mail"
            className={errorMail !== "" && css.error}
          />
          {errorMail !== "" && <p>{errorMail}</p>}
        </div>
        <button type="button" onClick={sendSuscribe}>
          Suscribirme
        </button>
      </div>
    </section>
  );
}
