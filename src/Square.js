import React, { Component } from 'react'

class Square extends Component {
    render() {
        return (
            !this.props.mark && <div className='square'></div>
            ||
            this.props.mark === 'X' && <div className='square'>X</div>
            ||
            this.props.mark === 'O' && <div className='square square-red'>O</div>
        )
    }
}
export default Square