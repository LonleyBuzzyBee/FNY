import React from 'react'
import Item from "./Item";

const Items = ({items}) => {
  return (
    <div className="listItemsContainer">
      <div className="listItems">
        {items.map((item) => {
          return (
            <Item
              item={item}
              id={item.id}
              key={item.id} />
          )
        })}
      </div>
    </div>
  )
}

export default Items
