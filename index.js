const generateStyles = ({ color, fontSize }) =>
  `color: ${color}; font-size: ${fontSize};`;

const logger = (text, color = "aqua", fontSize = "18px") =>
  console.log(`%c${text}`, generateStyles({ color, fontSize }));

export default logger
