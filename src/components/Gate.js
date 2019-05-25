import React from 'react'

const Gate = ({isOpen}) => {
  return (
    <div>
      {isOpen ? 'Open' : 'Closed'}
    </div>
  )
}
export default Gate

/*
export default function Gate({isOpen}) {
  return (
    <div>
      {isOpen ? 'Open' : 'Closed'}
    </div>
  )
}



export default class Gate extends React.Component {
  render() {
      const {isOpen} = this.props;

    return (
      <div>
        {isOpen ? 'Open' : 'Closed'}
      </div>
    )
  }
}
*/



