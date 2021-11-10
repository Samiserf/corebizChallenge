import React from "react";
import css from "./styles.module.scss";

export default function Header() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [responseFormApi, setResponseFormApi] = React.useState("");

  const [errorName, setErrorName] = React.useState("");
  const [errorMail, setErrorMail] = React.useState("");

  //Function sendSuscribe -> Validation errors and set state that showing in html
  //If !errors -> call fetch for post newsLetter

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

  //This useEffect catch success or errors in api and show with Alert (Change for SnackBar)

  React.useEffect(() => {
    if (
      responseFormApi.message === "Created successfully" &&
      !!responseFormApi
    ) {
      alert("Solicitud enviada correctamente");
    } else if (
      responseFormApi.message !== "Created successfully" &&
      !!responseFormApi
    ) {
      alert(responseFormApi.message);
    }
  }, [responseFormApi]);

  //Manaje state with function

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
            className={errorName !== "" ? css.error : undefined}
          />
          {errorName !== "" && <p>{errorName}</p>}
        </div>
        <div>
          <input
            onChange={(e) => setState(e, setEmail)}
            placeholder="Ingresa tu mail"
            type="mail"
            className={errorMail !== "" ? css.error : undefined}
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
