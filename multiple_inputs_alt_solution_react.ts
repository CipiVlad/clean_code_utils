//Source: https://www.w3schools.com/react/react_forms.asp
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    setInputs({});
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter Your Name:</label>
        <input
          type="text"
          name="username"
          value={inputs.username}
          onChange={handleChange}
        />
        <label>Enter Your Age:</label>
        <input
          type="number"
          name="age"
          value={inputs.age}
          onChange={handleChange}
        />
        <input type="submit" value="senden" />
      </form>
    </>
  );
}

/*
Erläuterung: 
    Zeile:
    setInputs((prevState) => ({ ...prevState, [name]: value }));

ist eine Verwendung des Funktionsupdates, das von der useState Hook in React bereitgestellt wird. Diese Zeile aktualisiert den Zustand inputs des Formulars, indem sie eine neue Version von inputs erstellt, wobei der Wert des Eingabefelds mit dem angegebenen name aktualisiert wird.

Hier ist eine Erläuterung der einzelnen Teile dieser Zeile:

setInputs: Dies ist die Funktion, die von useState zurückgegeben wird und verwendet wird, um den Zustand zu aktualisieren.
values => ({...values, [name]: value}): Dies ist eine Arrow-Funktion, die das neue State-Objekt erstellt. values ist hier der vorherige Zustand von inputs. Durch {...values} wird eine flache Kopie des vorherigen Zustands erstellt. Anschließend wird das Objekt mit [name]: value aktualisiert. Dadurch wird das Attribut name im State-Objekt auf den aktuellen Wert des Eingabefelds gesetzt.
[name]: value: Dies ist eine JavaScript-Objektliteralsyntax, die es ermöglicht, dynamische Schlüsselnamen in einem Objekt anzugeben. Hier wird der Schlüssel name auf den Wert value gesetzt, der aus dem Ereignis extrahiert wird.
Zusammengefasst aktualisiert diese Zeile den Zustand inputs, indem sie ein neues Objekt erstellt, das den vorherigen Zustand kopiert und dann das Attribut mit dem angegebenen Namen auf den aktuellen Wert des Eingabefelds setzt.


Also, wenn wir setInputs(values => ({...values, [name]: value})) lesen, bedeutet es: Aktualisiere den Zustand inputs, wobei values den vorherigen Zustand darstellt, indem ein neues Objekt erstellt wird, das den vorherigen Zustand kopiert und dann das Attribut mit dem angegebenen Namen auf den aktuellen Wert des Eingabefelds setzt.


Hier ist ein Beispiel, um zu verdeutlichen, wie es funktioniert:

const name = 'username';
const obj = {[name]: 'John'};
console.log(obj); // Ausgabe: { username: 'John' }


In Ihrem Code wird also {[name]: value} verwendet, 
um das Attribut im State-Objekt zu aktualisieren, 
das den Namen des aktuellen Eingabefelds (name) hat und den Wert des Eingabefelds (value) enthält. 
Dies ermöglicht es, den Namen des Attributs dynamisch zu setzen, je nachdem, welches Eingabefeld geändert wurde.





*/

