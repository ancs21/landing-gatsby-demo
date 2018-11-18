import React from 'react'

class Accordion extends React.Component {
  constructor() {
    super()

    this.state = {
      accordion: false,
      scrollHeight: null,
    }
    this.myRef = React.createRef()
  }

  handleClick = () => {
    console.log(this.myRef.current.scrollHeight)
    const scrollHeight = !this.state.accordion
      ? this.myRef.current.scrollHeight
      : 0
    this.setState({
      accordion: !this.state.accordion,
      scrollHeight,
    })
  }
  render() {
    const { accordion, scrollHeight } = this.state
    return (
      <li className={accordion ? 'is-open' : ''}>
        <div onClick={this.handleClick} className="accordion-title">
          <span>{this.props.title}</span>
          <div className="accordion-icon" />
        </div>
        <div
          className="accordion-body"
          style={{ maxHeight: scrollHeight }}
          ref={this.myRef}
        >
          <p>{this.props.description}</p>
        </div>
      </li>
    )
  }
}
export default Accordion
