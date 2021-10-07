import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

interface IHomeProps {}

export const Home: React.FC<IHomeProps> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Link to={"/todo"}>
          <Button
            size="large"
            type="primary"
            loading={false}
            onClick={() => {
              //
            }}
          >
            Click me!
          </Button>
        </Link>
      </header>
    </div>
  );
};
