/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

function Card({ user, title, description, thumbnail }) {
  const [follow, setFollow] = useState(user.follow);
  const [card, setCard] = useState({
    status: false,
    addFavorite: false,
    message: ""
  });

  function submitMessage(event) {
    event.preventDefault();
    setCard({ ...card, status: !card.status, message: "" });
  }

  return (
    <div className={styles.card}>
      <div className={styles["card-thumbnail"]}>
        <img src={thumbnail} alt={title} />
        <span />
      </div>
      <div className={styles["user-info"]}>
        <div>
          <img src={user.image} alt={user.name} />
          <span>{user.name}</span>
        </div>
        <span className={styles["card-follow"]} onClick={() => setFollow(!follow)}>{follow ? "Following" : "Follow"}</span>
      </div>
      <div>
        <h6 className={styles["card-title"]}>{title}</h6>
        <p className={styles["card-description"]}>{description}</p>
      </div>
      <div className={styles["card-icons"]}>
        <div className={styles["card-favorite-icon"]} onClick={() => setCard({ ...card, addFavorite: !card.addFavorite })}>
          {card.addFavorite ? <img src="/add-favorite.svg" alt="favorite icon" /> : <img src="/favorite.svg" alt="favorite icon" />}
        </div>
        <div className={styles["card-share-icon"]}>
          <img src="/share.svg" alt="share icon" />
        </div>
      </div>
      {card.status ? (
        <form onSubmit={submitMessage} className={styles["send-message"]}>
          <input required type="text" placeholder={`Message for ${user.name}...`}
            value={card.message} onChange={event => setCard({ ...card, message: event.target.value })}
          />
          <button className={styles["send-message__button"]} type="submit">
            <div className={styles["send-message__icon"]}>
              <img src="/send-message.svg" alt="send message icon" />
            </div>
          </button>
        </form>
      ) : <button className={styles["card-button"]} onClick={() => setCard({ ...card, status: !card.status })}>Message</button>}
    </div>
  )
}

export default function Home() {

  return (
    <>
      <Head>
        <title>AlaaHijazi | Card</title>
        <meta name="description" content="card" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Card user={{ name: "Alaa Hijazi", image: "http://birthdaycamp.party/party.jpg", follow: false }}
          title="Experience The Sport Light With Alaa Hijazi"
          description="Whatever you say, Hello"
          thumbnail="https://www.ctvnews.ca/polopoly_fs/1.5063738.1597360423!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg"
        />
      </main>
    </>
  )
}
