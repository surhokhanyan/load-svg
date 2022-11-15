import svgDes from "../Images/first_logo.svg";
import svgAnime from "../Images/animation.svg";

export const filterColor = [{
    orange: "invert(65%) sepia(78%) saturate(1745%) hue-rotate(347deg) brightness(98%) contrast(95%)",
    red: "invert(36%) sepia(34%) saturate(7500%) hue-rotate(352deg) brightness(98%) contrast(95%)",
    blue: "invert(48%) sepia(12%) saturate(5190%) hue-rotate(196deg) brightness(96%) contrast(81%)",
    green: "invert(65%) sepia(27%) saturate(484%) hue-rotate(91deg) brightness(88%) contrast(92%)",
    yellow: "invert(88%) sepia(57%) saturate(371%) hue-rotate(1deg) brightness(94%) contrast(90%)"
}]
export const btnColor = [{
    orange: "#F5961B",
    red: "#F5421B",
    blue: "#5181DF",
    green: "#67AA82",
    yellow: "#E2E47A"
}]

export const gradientColors = ["#F5961B","#F5421B","#5181DF","#67AA82","#E2E47A"]


export const Categories = [
    {id: Math.random(), path: "design", svg: svgDes, name: "Дизайн", color: "invert(65%) sepia(78%) saturate(1745%) hue-rotate(347deg) brightness(98%) contrast(95%)", bg : "#F5961B"},
    {id:Math.random(), path: "animation", svg: svgAnime, name: "Анимация", color: "invert(36%) sepia(34%) saturate(7500%) hue-rotate(352deg) brightness(98%) contrast(95%)", bg:"#F5421B"}
]

