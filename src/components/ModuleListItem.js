import React from 'react'

const ModuleListItem = ({module, selectModule}) =>
    <li onClick={() => selectModule(module)} className="list-group-item">
      {module.title}
    </li>

export default ModuleListItem;