/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { maxlengthContentEditable } from "maxlength-contenteditable";


function Textarea() {
  const [length, setLength] = useState(0);
  const [value, setValue] = useState("");
  const [currentColor, setCurrentColor] = useState("");
  const [newColor, setNewColor] = useState("");
  const textarea = useRef(null);

  const maxLength = "1500";
  useEffect(() => maxlengthContentEditable(), []);

  useEffect(() => {
    document.execCommand("foreColor", false, currentColor);
    document.execCommand("styleWithCSS", false, true);
  }, [value, currentColor]);

  const submitMessage = () => console.log("your message: ", value);

  return (
    <>
      <div>
        <span className={styles.length}>{length}/{maxLength}</span>
        {(value || value === " ") ? "" : <p>Write your message here...</p>}
        <div onInput={event => {
          setValue(event.currentTarget.innerText);
          setLength(event.currentTarget.innerText.length);
        }}
          ref={textarea}
          data-max-length={maxLength}
          contentEditable className={styles.textarea}
          suppressContentEditableWarning={true}
        >
        </div>
        <div className={styles["color-picker"]}>
          <span>Colors</span>
          {["#FE636F", "#FFDE6A", "#70CF98", "#2984FF", "#725CFD"].map((color, index) => (
            <button onClick={() => setCurrentColor(color)} key={index} style={{ backgroundColor: [color] }}></button>
          ))}
          {newColor && <button onClick={() => {
            setCurrentColor(newColor);
          }} style={{ backgroundColor: [newColor] }}></button>}
          <div className={styles["color-picker__icon"]}>
            <label htmlFor="head"><img height="20" width="20" src="https://icon-library.com/images/color-wheel-icon/color-wheel-icon-17.jpg" alt="color picker" /></label>
            <input type="color" id="head" name="head" value={newColor} onChange={event => setNewColor(event.target.value)} />
          </div>
        </div>
      </div>
      <button onClick={submitMessage}>
        <img src="/send-icon.svg" alt="send-icon" />Send
      </button>
    </>
  )
}

export default function Home() {

  return (
    <>
      <Head>
        <title>AlaaHijazi | css row</title>
        <meta name="description" content="css row" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <Textarea />
        </div>
      </main>
    </>
  )
}
