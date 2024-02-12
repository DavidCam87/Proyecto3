import "./style.css";
import { renderImages } from "../renderImages/main.js";

export const renderFooter = () => {

  const footer = document.createElement('footer');
  footer.innerHTML = `<h4>Copyright 2024 _ Desarrollado por David Camuñez para:  The Power {RTC}</h4>`;
  const foot = document.querySelector('footer');
  document.body.appendChild(footer);


}