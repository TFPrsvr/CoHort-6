import React from 'react'
import Grandchild from './Grandchild'

const Child = (props) => {
  return (
    <div>Child
<Grandchild user={props.user}/>


    </div>
  )
}

export default Child