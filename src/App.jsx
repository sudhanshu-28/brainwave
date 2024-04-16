import React from "react";
import Button from "./components/Button";
import ButtonGradient from "./assets/svg/ButtonGradient";

const App = () => {
  return (
    <React.Fragment>
      <h1 className="text-3xl underline font-bold">Hello World!</h1>

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10" href="#login">
          Something
        </Button>
      </div>

      <ButtonGradient />
    </React.Fragment>
  );
};

export default App;
