import React from "react"
import classes from './ActiveQuiz.module.css'
import AnswersList from "./AnswersList/AnswersList"

const ActiveQuiz = props => {

    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>1.&nbsp;</strong>
                    {props.question}
                </span>
                <small>{props.questionNumber} из {props.quizLength}</small>
            </p>

            <AnswersList
                state={props.state}
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
            ></AnswersList>
        </div>
    )
}

export default ActiveQuiz
