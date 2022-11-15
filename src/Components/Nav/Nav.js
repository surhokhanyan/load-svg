import React, {useState} from 'react';
import css from "./Nav.module.scss";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import {Link, useLocation} from "react-router-dom";

const Nav = ({setOpenModal, characters, setCharacters}) => {
    const [openSvgCol, setOpenSvgCol] = useState(false);
    const pathSplit = useLocation().pathname.split("/");


    const orange = () =>{
        characters.find(({path}) => path === pathSplit[1]).color = "invert(65%) sepia(78%) saturate(1745%) hue-rotate(347deg) brightness(98%) contrast(95%)";
        characters.find(({path}) => path === pathSplit[1]).bg = "#F5961B";
    }
    const red = () =>{
        characters.find(({path}) => path === pathSplit[1]).color = "invert(36%) sepia(34%) saturate(7500%) hue-rotate(352deg) brightness(98%) contrast(95%)";
        characters.find(({path}) => path === pathSplit[1]).bg = "#F5421B";
    }
    const blue = () => {
        characters.find(({path}) => path === pathSplit[1]).color = "invert(48%) sepia(12%) saturate(5190%) hue-rotate(196deg) brightness(96%) contrast(81%)";
        characters.find(({path}) => path === pathSplit[1]).bg = "#5181DF";
    }
    const green = () =>{
        characters.find(({path}) => path === pathSplit[1]).color = "invert(65%) sepia(27%) saturate(484%) hue-rotate(91deg) brightness(88%) contrast(92%)";
        characters.find(({path}) => path === pathSplit[1]).bg = "#67AA82";
    }
    const yellow = () =>{
        characters.find(({path}) => path === pathSplit[1]).color = "invert(88%) sepia(57%) saturate(371%) hue-rotate(1deg) brightness(94%) contrast(90%)";
        characters.find(({path}) => path === pathSplit[1]).bg = "#E2E47A";
    }

    function handleOnDragEnd(result) {
        if (!result.destination) return
        const items = Array.from(characters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setCharacters(items)
    }

    const arrCol = [];

    return (
        <nav className={css.nav}>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="characters" direction="horizontal">
                    {(provided)=>(
                        <ul {...provided.droppableProps} ref={provided.innerRef}>
                            {
                                characters.map(({id, path, svg, name, color, bg}, index)=>{
                                    arrCol.push(bg);
                                    return (
                                        <Draggable key={id} draggableId={path} index={index}>
                                            {(provided)=>(
                                                <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                    <Link to={path}>
                                                        <img src={svg} alt="logo" style={{filter: color}}/>
                                                        <div className={css.btnPlace}>
                                                            {
                                                                openSvgCol === id
                                                                    ?
                                                                    <div className={css.modalColor}>
                                                                        <button onClick={orange}> </button>
                                                                        <button onClick={red}> </button>
                                                                        <button onClick={blue}> </button>
                                                                        <button onClick={green}> </button>
                                                                        <button onClick={yellow}> </button>
                                                                        <button className={css.save} onClick={()=> setOpenSvgCol(false)}>Save</button>
                                                                    </div>
                                                                    : null
                                                            }
                                                            <button
                                                                className={pathSplit[1] === path ? css.active : null}
                                                                id={css.colorBtn}
                                                                onClick={()=> setOpenSvgCol(id)}
                                                                style={{backgroundColor: bg}}
                                                            > </button>
                                                        </div>
                                                        <p>{name}</p>
                                                    </Link>
                                                </li>
                                            )}
                                        </Draggable>
                                    )
                                })
                            }
                            <li className={css.gradient} style={{background:`linear-gradient(to right, #545662  0px 55px,${arrCol.join(", ")} 60%, #12B352 100%) `}}> </li>
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
            <li className={css.addLi}>
                <button className={css.add} onClick={()=> setOpenModal(true)}>+</button>
            </li>
        </nav>
    );
};

export default Nav;