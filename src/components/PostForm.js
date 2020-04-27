import React from "react";

export default class PostForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     title:''
  //   }
  // }

  // альтернативная запись конструктора
  state = {
    title: ''
  }

  // стрелочная функция, чтобы не терялся контекст
  // event - параментр функции
  submitHandler = event => {
    event.preventDefault()
    const {title} = this.state

    const newPost = {
      title, id: Date.now().toString()
    }
    this.setState({title: ''})
  }
  changeInputHandler = event => {
    event.persist()

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