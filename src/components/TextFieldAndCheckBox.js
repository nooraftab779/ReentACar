import React from "react";
import { TextField, Checkbox, TableCell } from "@material-ui/core";
const TextFieldAndCheckBox = (props) => {
  const [checkBox1, setCheckBox1] = React.useState(false);
  const [checkBox2, setCheckBox2] = React.useState(false);
  const [price, setPrice] = React.useState(0);
  const [percent, setPercent] = React.useState(0);
  const [disableTextField1, setDisableTextField1] = React.useState(true);
  const [disableTextField2, setDisableTextField2] = React.useState(true);
  return (
    <TableCell component="th" scope="row">
      <Checkbox
        checked={checkBox1}
        onChange={() => {
          setCheckBox2(false);
          setCheckBox1(true);
          setDisableTextField1(false);
          setDisableTextField2(true);
          setPrice(0);
        }}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <TextField
        size="small"
        error={percent >= 0 && percent <= 100 ? false : true}
        helperText={
          percent >= 0 && percent <= 100 ? "" : "Percent >=0 && <=100"
        }
        disabled={disableTextField1}
        type="number"
        fullWidth
        label="%"
        variant="outlined"
        value={percent}
        onChange={(e) => {
          setPercent(e.target.value);
        }}
        style={{ width: 100 }}
      ></TextField>
      <br />
      <br />
      <Checkbox
        checked={checkBox2}
        onChange={() => {
          setCheckBox2(true);
          setCheckBox1(false);
          setDisableTextField2(false);
          setDisableTextField1(true);
          setPercent(0);
        }}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <TextField
        size="small"
        error={price >= 0 ? false : true}
        helperText={price >= 0 ? "" : "Price >=0"}
        disabled={disableTextField2}
        type="number"
        fullWidth
        label="£"
        variant="outlined"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        style={{ width: 100 }}
      ></TextField>
    </TableCell>
  );
};

export default TextFieldAndCheckBox;
