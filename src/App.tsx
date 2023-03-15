import { ButtonTypes, AlertTypes } from "./helpers/Enums";

import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

import Button from "./components/Button/";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import styles from "./components/Button/Button.module.css";

import Form from "./components/Form";

function App() {
  const items = ["New York", "Chicago", "Paris", "London", "Kansas City"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading={"List Group Component"}
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <div className="mb-3">
        <hr />
      </div>
      <Alert type={AlertTypes.Success}>Success Alert</Alert>
      <div className="mb-3">
        <hr />
      </div>
      <Form></Form>
      <div className="mb-3">
        <hr />
      </div>
      <Button type={ButtonTypes.Secondary}>
        <span className={styles.icon}>
          <BsFillArrowDownSquareFill></BsFillArrowDownSquareFill>
        </span>
        <span className="buttonText">ICON BUTTON</span>
      </Button>
    </div>
  );
}

export default App;
