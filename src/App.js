import css from "./App.module.scss";
import Header from "./Components/Header/Header";
import Modal from "./Components/Modal/Modal";
import {useState} from "react";
import {Categories} from "./Utills/Categories";

function App() {
    const [openModal, setOpenModal] = useState(false);
    const [characters, setCharacters] = useState(Categories)
  return (
    <div className={css.App}>
        <Header setOpenModal={setOpenModal} characters={characters} setCharacters={setCharacters}/>
        <Modal open={openModal}
               close={setOpenModal}
               characters={characters}
        />
    </div>
  );
}

export default App;
