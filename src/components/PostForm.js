import React from "react";

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }
  // стрелочная функция, чтобы не терялся контекст
  // event - параментр функции
  submitHandler = event => {
    event.preventDefault()
    console.log(this.state)
  }
  changeInputHandler = event => {
    event.persist()
    console.log(event)
    console.log(event.target)
    this.setState(prev => ({...prev, ...{
        [event.target.name]: event.target.value
      }}))
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title">Заголовок поста.</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.title}
            name="title"
            // не универсально
            // onChange={ event =>  this.setState()}
            // более универсальное решение
            onChange={this.changeInputHandler}

          />
        </div>
        <button className="btn btn-success" type="submit">Создать</button>
      </form>
    )
  }
}