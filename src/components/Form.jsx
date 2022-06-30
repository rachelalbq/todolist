import React from "react";
import { Button, TextField, Paper } from "@mui/material";
import "../App.css";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { format } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

function Form({ addTodo }) {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [category, setCategory] = useState(null);
  const [date, setDate] = useState(null);
  const [id, setId] = useState(0);

  const todoCreate = (title, description) => {
    const formattedDate = format(date, "dd 'de ' MMMM 'de ' yyyy", {
      locale: ptBr,
    });
    const todoObj = {
      title: title,
      id: id,
      description: description,
      category: category,
      date: formattedDate,
    };
    setId(id + 1);
    addTodo(todoObj);
  };

  return (
    <Paper style={{ padding: "2em" }}>
      <div style={{ diplay: "flex", justifyContent: "center" }}>
        <TextField
          id="outlined-basic"
          label="Título"
          variant="outlined"
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          id="outlined-description"
          label="Descrição"
          variant="outlined"
          onChange={(e) => setDescription(e.target.value)}
          sx={{ marginTop: "1em" }}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Data de Conclusão"
            value={date}
            onChange={(newDate) => {
              setDate(newDate);
            }}
            renderInput={(params) => (
              <TextField {...params} sx={{ marginTop: "1em" }} />
            )}
          />
        </LocalizationProvider>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="facil"
            onChange={(e) => setCategory(e.target.value)}
            control={<Radio />}
            label="Fácil"
          />
          <FormControlLabel
            value="dificil"
            onChange={(e) => setCategory(e.target.value)}
            control={<Radio />}
            label="Difícil"
          />
          <FormControlLabel
            value="urgente"
            onChange={(e) => setCategory(e.target.value)}
            control={<Radio />}
            label="Urgente"
          />
          <FormControlLabel
            value="prioritario"
            onChange={(e) => setCategory(e.target.value)}
            control={<Radio />}
            label="Prioritário"
          />
        </RadioGroup>
        <Button
          variant="text"
          onClick={() => todoCreate(title, description)}
          href="#text-buttons"
          color="primary"
        >
          Adicionar
        </Button>
      </div>
    </Paper>
  );
}

export default Form;
