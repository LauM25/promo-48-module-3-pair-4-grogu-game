import { Link } from "react-router-dom";
const Instructions = () => {
  return (
    <section class="instructions">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        provident nisi voluptatem est nostrum optio perferendis doloremque,
        delectus at, assumenda suscipit sit odio ipsum error consequatur numquam
        vero impedit nulla?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        animi voluptatem quis impedit amet in dicta soluta explicabo, fugit
        magni mollitia, pariatur eos, repellendus aut esse recusandae minima eum
        eaque.
      </p>
      <Link to="/">Volver al inicio</Link>
    </section>
  );
};
export default Instructions;
