import React, {useState} from 'react';
import css from "./Modal.module.scss";
import CloseIcon from '@mui/icons-material/Close';
import {useForm} from "react-hook-form";

const Modal = ({open, close, characters}) => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const [picture, setPicture] = useState(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [imgErr, setImgErr] = useState(false);

    const addUser = (data) =>{
        if (imgSrc !== null){
            characters.push({
                id:Math.random(),
                path: data.name.toLowerCase().replace(/\s/g,''),
                svg: imgSrc,
                name: data.name,
                color: "invert(65%) sepia(78%) saturate(1745%) hue-rotate(347deg) brightness(98%) contrast(95%)",
                bg: "#F5961B"
            });
            reset();
            setImgSrc(null)
            close(false);
            setImgErr(false)
        }else{
            setImgErr(true)
        }
    }

    const onChangePicture = async (e) => {
        if (e.target.files[0]) {
            await setPicture(e.target.files[0]);
            const reader = await new FileReader();
            reader.addEventListener("load", () => {
                setImgSrc(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const closeModal = () =>{
        close(false);
        setImgErr(false)
    }

    if (!open) return null

    return (
        <form className={css.modal} onSubmit={handleSubmit(addUser)}>
            <div className={css.main}>
                <button
                    className={css.close}
                    onClick={closeModal}
                ><CloseIcon/></button>
                <div className={css.upload}>
                    <div className={css.file}>
                        <img src={imgSrc} alt="🖺"/>
                        <p>добавить файл</p>
                        <input type="file" onChange={onChangePicture}/>
                    </div>
                    {
                        imgErr ? <span>Пожалуйста, выберите изображение</span> : null
                    }
                </div>
                <label>
                    название
                    <input
                        type="text"
                        {...register("name", {required:true})}
                    />
                    {errors.name && <span>Пожалуйста, напишите название</span>}
                </label>
                <div className={css.btnPlace}>
                    <button className={css.save}>сохранить</button>
                </div>
            </div>
        </form>
    );
};

export default Modal;