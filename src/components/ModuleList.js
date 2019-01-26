import React from 'react'
import ModuleListItem from "./ModuleListItem";

class ModuleList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      module: { title: '' },
      modules: this.props.modules
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
                    module={module}/>
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