import React from 'react'
import ModuleListItem from "./ModuleListItem";

class ModuleList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      module: { title: '' },
      modules: [
        {title: 'Module 1 - jQuery', id: 123},
        {title: 'Module 2 - React', id: 234},
        {title: 'Module 3 - Redux', id: 345},
        {title: 'Module 4 - Angular', id: 456},
        {title: 'Module 5 - Node.js', id: 567},
        {title: 'Module 6 - MongoDB', id: 678}
      ]
    };

    // this.titleChanged = this.titleChanged.bind(this);
  }

  createModule = () => {
    this.setState(
      {
        modules: [
          ...this.state.modules,
          this.state.module
        ]
      }
    )
  }
  titleChanged = (event) => {
    this.setState(
      {
        module: {title: event.target.value}
      });
  }
  render() {
    return(
      <div>
        <h3>Module List</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <input
              onChange={this.titleChanged}
              className="form-control"/>
            <button
              onClick={this.createModule}
              className="btn btn-primary btn-block">Add Module</button>
          </li>
          {
            this.state.modules.map(
              (module) => {
                return (
                  <ModuleListItem
                    key={module.id}
                    title={module.title}/>
                )
              }
            )
          }
        </ul>
      </div>
    )
  }
}
export default ModuleList;