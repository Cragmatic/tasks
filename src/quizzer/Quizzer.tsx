import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Question } from "../interfaces/question";
import { makeBlankQuestion } from "../objects";
import sketch from "./assets/sketch-compressed.png";
import { QuizMultipleChoiceQuestion } from "./QuizMultipleChoiceQuestion";

/** A representation of a Quiz in a quizzing application */
interface Quiz {
    /** A unique identifier for the quiz */
    id: number;
    /** The human-friendly title of the quiz */
    name: string;
    /** The instructions and content of the quiz */
    body: string;
    /** The questions for a quiz */
    questionsList: Question[];
    /** The length of the quiz */
    numQuestions: number;
    /** How many points can be earned in the quiz */
    totalPoints: number;
    /** Whether or not this quiz is ready to displayed */
    published: boolean;
}

export function Quizzer(): JSX.Element {
    const [quizArray] = useState<Quiz[]>([
        {
            id: 0,
            name: "Quiz1",
            body: "This is a 2 question, multiple choice example quiz",
            questionsList: [
                {
                    id: 0,
                    name: "Question 1",
                    type: "multiple_choice_question",
                    options: ["true", "false"],
                    expected: "false",
                    body: "Is the earth flat?",
                    points: 1,
                    published: true
                },
                {
                    id: 1,
                    name: "Question 2",
                    type: "multiple_choice_question",
                    options: ["true", "false"],
                    expected: "true",
                    body: "Is this the second question?",
                    points: 1,
                    published: true
                }
            ],
            numQuestions: 2,
            totalPoints: 2,
            published: true
        },
        {
            id: 1,
            name: "Quiz2",
            body: "This is a 1 question, short answer example quiz",
            questionsList: [
                makeBlankQuestion(1, "question 1", "multiple_choice_question")
            ],
            numQuestions: 1,
            totalPoints: 1,
            published: true
        }
    ]);

    const [currentQuizId, setQuizId] = useState<number>(0);

    function updateQuizId(event: React.ChangeEvent<HTMLSelectElement>) {
        setQuizId(parseInt(event.target.value));
        resetQuestionNumber();
    }
    const [lockAnswer, setLock] = useState<boolean>(false);
    const [questionNumber, setQuestionNumber] = useState<number>(0);
    function resetQuestionNumber() {
        setQuestionNumber(0);
        setLock(false);
    }
    function advanceQuestionNumber() {
        if (questionNumber < quizArray[currentQuizId].numQuestions - 1) {
            setQuestionNumber(questionNumber + 1);
            setLock(false);
        }
    }
    function decreaseQuestionNumber() {
        if (questionNumber > 0) {
            setQuestionNumber(questionNumber - 1);
            setLock(false);
        }
    }
    /**
    const [answer, setAnswer] = useState<string>(
        quizArray[currentQuizId].questionsList[questionNumber].options[0]
    );
    const [userPoints, setUserPoints] = useState<number>(0);
    function answerQuestion() {
        setLock(true);
        if (
            quizArray[currentQuizId].questionsList[questionNumber].expected ===
            answer
        ) {
            setUserPoints(
                userPoints +
                    quizArray[currentQuizId].questionsList[questionNumber]
                        .points
            );
        }
    }
    A bit too ambitious for 11:37pm on friday*/
    return (
        <div>
            <div>
                <h3>Quizzer</h3>
                <div>
                    <span>Sub-Task 1, sketch</span>
                </div>
                <img src={sketch} alt="A sketch of the Quizzer application" />
            </div>
            <div>
                <Form.Group controlId="quizList">
                    <Form.Label>Quizzes: </Form.Label>
                    <Form.Select value={currentQuizId} onChange={updateQuizId}>
                        {quizArray.map((quiz: Quiz) => (
                            <option key={quiz.id} value={quiz.id}>
                                {quiz.name}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <h2>
                    {
                        quizArray[currentQuizId].questionsList[questionNumber]
                            .body
                    }
                </h2>
                <QuizMultipleChoiceQuestion
                    options={
                        quizArray[currentQuizId].questionsList[questionNumber]
                            .options
                    }
                    expectedAnswer={
                        quizArray[currentQuizId].questionsList[questionNumber]
                            .expected
                    }
                    lockAnswer={lockAnswer}
                ></QuizMultipleChoiceQuestion>
                <Button onClick={() => setLock(true)} disabled={lockAnswer}>
                    Lock In Answer & Reveal
                </Button>
                <Button onClick={() => decreaseQuestionNumber()}>
                    Return to previous Question
                </Button>
                <Button onClick={() => advanceQuestionNumber()}>
                    Advance to next Question
                </Button>
            </div>
        </div>
    );
}
