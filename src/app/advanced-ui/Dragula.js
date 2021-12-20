import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialData = {
  tasks: {
    'task-1': {
      id: 'task-1', 
      name: 'Rebecca young', 
      designation: 'Software engineer', 
      imgURL: require("../../assets/images/faces/face1.jpg")
    },
    'task-2': {
      id: 'task-2', 
      name: 'Jacob march', 
      designation: 'UI developer', 
      imgURL: require("../../assets/images/faces/face2.jpg")
    },
    'task-3': {
      id: 'task-3', 
      name: 'Catherine', 
      designation: 'Digital Marketer', 
      imgURL: require("../../assets/images/faces/face3.jpg")
    },
    'task-4': {
      id: 'task-4', 
      name: 'Thomas Cook', 
      designation: 'Director', 
      imgURL: require("../../assets/images/faces/face4.jpg")
    },
    'task-5': {
      id: 'task-5', 
      name: 'Keto Philip', 
      designation: 'Software Tester', 
      imgURL: require("../../assets/images/faces/face5.jpg")
    },
    'task-6': {
      id: 'task-6', 
      name: 'Jacob Stephen', 
      designation: 'UI Developer', 
      imgURL: require("../../assets/images/faces/face6.jpg")
    },
    'task-7': {
      id: 'task-7', 
      name: 'March Creg', 
      designation: 'Technical Support Engineer', 
      imgURL: require("../../assets/images/faces/face7.jpg")
    },
    'task-8': {
      id: 'task-8', 
      name: 'Peter Beckham', 
      designation: 'UI Developer', 
      imgURL: require("../../assets/images/faces/face8.jpg")
    },
    'task-9': {
      id: 'task-9', 
      name: 'John Doe', 
      designation: 'UI Designer', 
      imgURL: require("../../assets/images/faces/face9.jpg")
    },
    'task-10': {
      id: 'task-10', 
      name: 'Williamson', 
      designation: 'Technical Support Engineer', 
      imgURL: require("../../assets/images/faces/face10.jpg")
    },
  },
  columns: {
    'column-1' : {
      id: 'column-1',
      tittle: 'TEAM A',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4','task-5'],
    },
    'column-2' : {
      id: 'column-2',
      tittle: 'TEAM B',
      taskIds: ['task-6', 'task-7', 'task-8', 'task-9', 'task-10'],
    },
  },
  columnOrder: ['column-1', 'column-2'],

};

export class Column extends Component {
  render() {
    return (
      <div className="col-sm-6">        
        <div><h6 className="card-title">{this.props.column.tittle}</h6></div>
        <Droppable droppableId= {this.props.column.id}>
          {provided => (
            <div className="kanbanHeight"
            ref={provided.innerRef}
              {...provided.droppableProps}
              >
            {this.props.tasks.map ((task, index) => 
              <Task key= {task.id} task={task} index= {index} /> )} 
            {provided.placeholder}
            </div>
          )}
        </Droppable >       
      </div>
    )
  }
}
export class Task extends Component {
  render() {
    return ( <Draggable draggableId={this.props.task.id} index={this.props.index}>
          {(provided) => (
            <div className="mt-1 board-portlet"
             {...provided.draggableProps}
             {...provided.dragHandleProps}
             ref={provided.innerRef}
             >
             <div className="card-body p-3 border">
                <div className="media">
                  <div className="media-body">
                    <div className="d-flex">
                      <img src={this.props.task.imgURL} alt="profile" className="img-sm mr-3 rounded-circle"/>
                      <div>
                        <h6 className="mb-1">{this.props.task.name}</h6>
                        <p className="mb-0 text-muted"> {this.props.task.designation} </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Draggable>
    )
  }
}

export class Dragula extends Component {
  state = initialData;
  onDragEnd = result => {
    const {destination, source, draggableId} = result;
    if(!destination) {
      return;
    }
    if (
      destination.droppableId===source.droppableId && 
      destination.index===source.index
    ) {
      return
    }
    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start===finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id] : newColumn,
        },
      };
      
      this.setState(newState);   
      return;   
    }


    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };
    
    const newState = {
      ...this.state,
      columns : {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      }
    };
    this.setState(newState);
  }
  render() {
    return (
    
      <div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body p-3">
                <h4 className="card-title">Simple Dragula</h4>
                <p className="card-description">Drag and drop between Team A and Team B</p>
                <div className="card-body">
                  <DragDropContext onDragEnd={this.onDragEnd} onDragStart={this.onDragStart}>  
                    <div className="row">
                    {
                      this.state.columnOrder.map(columnId => {
                      const column = this.state.columns[columnId];
                      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
                        //return column.tittle;
                      return <Column key = {column.id} column={column} tasks={tasks} />;
                      })
                    }
                    </div>
                  </DragDropContext>                        
                </div>    
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Dragula


