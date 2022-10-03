import React from 'react';
export default class GlobalState extends React.Component{
state = {
  tasks: [],
}
 
const addNewTask = (task) => {
  const list = […this.state.tasks, task];
  this.setState({tasks: list});
};
 
const deleteTask = (taskId) => {
  this.setState(this.state.tasks.splice(taskId,1));
};
 return (
  <Context.Provider 
   value={{
    tasks: this.state.tasks,
    addNewTask: this.addNewTask,
    deleteTask: this.deleteTask
   }}
  >
   {this.props.children}
  </Context.Provider>
 );
 
}