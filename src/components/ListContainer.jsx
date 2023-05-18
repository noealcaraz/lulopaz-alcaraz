import React from 'react'

const ListContainer = (props) => {
  return (
    <div className="item-list">
      <div className="item">{props.greeting}</div>
    </div>
  )
}

export default ListContainer