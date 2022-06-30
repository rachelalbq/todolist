import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Paper } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ListaItem({ todo, deleteTodo }) {
  console.log(todo);
  return (
    <Paper style={{ padding: "2em 0em" }}>
      <ListItem role={undefined} dense button>
        <ListItemIcon>
          <Checkbox edge="start" tabIndex={-1} disableRipple />
        </ListItemIcon>
        <ListItemText primary={todo.title} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => deleteTodo(todo.id)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem role={undefined} dense button>
        <ListItemText primary={todo.description} />
      </ListItem>
      <ListItem role={undefined} dense button>
        <ListItemText primary={todo.category} />
      </ListItem>
      <ListItem role={undefined} dense button>
        <ListItemText primary={todo.date} />
      </ListItem>
    </Paper>
  );
}
