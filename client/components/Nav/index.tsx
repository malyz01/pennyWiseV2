import React from 'react'

import { INav } from './interface'

const index = (props: INav) => {
  return (
    <div>
      <div>{props.id}</div>
      <div>{props.name}</div>
    </div>
  )
}

export default index
