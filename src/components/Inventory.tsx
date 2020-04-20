import React from "react";
import { RootState } from "../store";
import { removeItemFunction, addItemFunction } from "../store/inventory/action";
import { Item } from "../store/inventory/types";
import { Grid, Form, Input, Button } from "semantic-ui-react";
import { connect } from "react-redux";

export interface IInventoryProps {
  removeItemFunction: typeof removeItemFunction;
  addItemFunction: typeof addItemFunction;
  items: Item[];
}
export class Inventory extends React.Component<IInventoryProps> {
  generateID = (): number => {
    let randomNumber: number = Math.floor(Math.random() * 100);
    randomNumber += this.props.items.length;
    return randomNumber;
  };
  newProduct = (event: any) => {
    event.preventDefault();
    const formField: HTMLInputElement | null = document.querySelector(
      '[name="product-name"]'
    );
    let formFieldValue: string = "";
    if (formField !== null) formFieldValue = formField.value;
    this.props.addItemFunction({
      task: formFieldValue,
    });
  };
  deleteProduct = (task: string) => {
    this.props.removeItemFunction(task);
  };
  render() {
    return (
      <Grid centered>
        <Grid.Row>
          <Form onSubmit={this.newProduct}>
            <Form.Field>
              <label htmlFor="product-name">Enter The Task List</label>
              <Input name="product-name" type="text" />
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
                    this.deleteProduct(element.task);
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
    items: state.inventory.items,
  };
};

export default connect(mapStateToProps, {
  addItemFunction,
  removeItemFunction,
})(Inventory);
