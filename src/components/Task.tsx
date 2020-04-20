import React from "react";
import { RootState } from "../store";
import { removeItemFunction, addItemFunction } from "../store/task/action";
import { Item } from "../store/task/types";
import { Grid, Form, Input, Button } from "semantic-ui-react";
import { connect } from "react-redux";

export interface ITaskProps {
  removeItemFunction: typeof removeItemFunction;
  addItemFunction: typeof addItemFunction;
  items: Item[];
}
export class Task extends React.Component<ITaskProps> {
  newTask = (event: any) => {
    event.preventDefault();
    const formField: HTMLInputElement | null = document.querySelector(
      '[name="task-name"]'
    );
    let formFieldValue: string = "";
    if (formField !== null) formFieldValue = formField.value;
    this.props.addItemFunction({
      task: formFieldValue,
    });
  };
  deleteTask = (task: string) => {
    this.props.removeItemFunction(task);
  };
  render() {
    return (
      <Grid centered>
        <Grid.Row>
          <Form onSubmit={this.newTask}>
            <Form.Field>
              <label htmlFor="task-name">Enter The Task List</label>
              <Input name="task-name" type="text" />
            </Form.Field>
            <Input type="submit" value="Add" />
          </Form>
        </Grid.Row>
        <Grid.Row>
          <h3>Task List</h3>
        </Grid.Row>
        <ul>
          {this.props.items.map((element) => (
            <li>
              <Grid.Column>Task:{element.task}</Grid.Column>
              <Grid.Column>
                <Button
                  size="tiny"
                  color="red"
                  onClick={(event) => {
                    this.deleteTask(element.task);
                  }}
                >
                  Delete the Task
                </Button>
              </Grid.Column>
            </li>
          ))}
        </ul>
      </Grid>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    items: state.task.items,
  };
};

export default connect(mapStateToProps, {
  addItemFunction,
  removeItemFunction,
})(Task);
