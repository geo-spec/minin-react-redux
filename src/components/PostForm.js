import React from "react";
import {connect} from 'react-redux'
import {createPost, showAlert} from "../redux/actions";
import {Alert} from "./Alert";

class PostForm extends React.Component {
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
    // откулючаем поведение (отправку формы) по-умолчанию
    event.preventDefault()
    const {title} = this.state
    // извлекаем только title из state
    if (!title.trim()) { //очищаем от пробелов
      return this.props.showAlert('Empty post')
    }

    const newPost = {
      title, id: Date.now().toString()
    }
    this.props.createPost(newPost)
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
        {this.props.alert && <Alert text={this.props.alert} />}
        {/*если this.props.alert не  false - то отображать*/}
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

const mapDispatchToProps = {
  createPost, showAlert
}

const mapStateToProps = state => ({
  alert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)