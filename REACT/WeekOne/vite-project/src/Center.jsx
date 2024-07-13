import React from 'react'

const Center = (props) => {
  return (
    <div id="center">Center
    <p>{props.user.username}</p>
    <p>{props.user.role},</p>
    </div>
  )
}

export default Center