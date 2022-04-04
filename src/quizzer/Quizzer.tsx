import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";
import sketch from "./assets/sketch-compressed.png";
import { QuizMultipleChoiceQuestion } from "./QuizMultipleChoiceQuestion";
import { QuizShortAnswerQuestion } from "./QuizShortAnswerQuestion";

/** A representation of a Quiz in a quizzing application */
interface Quiz {
    /** A unique identifier for the quiz */
    id: number;
    /** The human-friendly title of the quiz */
    name: string;
    /** The instructions and content of the quiz */
    body: string;
    /** The questions for a quiz */
    questionsList: quizQuestion[];
    /** The length of the quiz */
    numQuestions: number;
    /** How many points can be earned in the quiz */
    totalPoints: number;
    /** Whether or not this quiz is ready to displayed */
    published: boolean;
}

interface quizQuestion {
    /** A unique identifier for the question */
    id: number;
    /** The human-friendly title of the question */
    name: string;
    /** The instructions and content of the Question */
    body: string;
    /** The kind of Question; influences how the user answers and what options are displayed */
    type: QuestionType;
    /** The possible answers for a Question (for Multiple Choice questions) */
    options: string[];
    /** The actually correct answer expected */
    expected: string;
    /** How many points this question is worth, roughly indicating its importance and difficulty */
    points: number;
    /** Whether or not this question is ready to display to students */
    published: boolean;
    /** boolean for if the question has already been answered on this attempt or not */
    answered: boolean;
}
/**
function makeQuizBlankQuestion(
    id: number,
    name: string,
    type: QuestionType
): quizQuestion {
    return {
        id: id,
        name: name,
        type: type,
        body: "",
        expected: "",
        options: [],
        points: 1,
        published: false,
        answered: false
    };
}

interface allQuizzes {
    quizzes: Quiz[];
}*/

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
                    published: true,
                    answered: false
                },
                {
                    id: 1,
                    name: "Question 2",
                    type: "multiple_choice_question",
                    options: ["true", "false"],
                    expected: "true",
                    body: "Is this the second question?",
                    points: 1,
                    published: true,
                    answered: false
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
                {
                    id: 0,
                    name: "Question 1",
                    type: "short_answer_question",
                    options: ["no"],
                    expected: "no",
                    body: "Is the earth flat (again)?",
                    points: 1,
                    published: true,
                    answered: false
                },
                {
                    id: 1,
                    name: "Question 2",
                    type: "short_answer_question",
                    options: ["doesnt matter"],
                    expected: "green",
                    body: "what's my (craig's) favorite color?",
                    points: 1,
                    published: true,
                    answered: false
                }
            ],
            numQuestions: 2,
            totalPoints: 1,
            published: true
        }
    ]);

    const [currentQuizId, setQuizId] = useState<number>(0);

    function updateQuizId(event: React.ChangeEvent<HTMLSelectElement>) {
        setQuizId(parseInt(event.target.value));
        resetQuestionNumber();
        setAnsweredArray(
            quizArray[currentQuizId].questionsList.map(() => false)
        );
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

    const [answeredArray, setAnsweredArray] = useState<boolean[]>([false]);
    function answerQuestion() {
        const newAnsweredArray = [...answeredArray];
        newAnsweredArray.splice(questionNumber, 1, true);
        setAnsweredArray(newAnsweredArray);
        setLock(true);
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
                <h1>Quizzer</h1>
                <div>
                    <span>Sub-Task 1, sketch</span>
                </div>
                <img src={sketch} alt="A sketch of the Quizzer application" />
            </div>
            <div>
                <Form.Group controlId="quizList">
                    <Form.Label>Select A Quiz: </Form.Label>
                    <Form.Select
                        data-testid="quiz_selection"
                        value={currentQuizId}
                        onChange={updateQuizId}
                    >
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
                            .name
                    }
                    :{" "}
                    {
                        quizArray[currentQuizId].questionsList[questionNumber]
                            .body
                    }
                </h2>
                <h3>
                    worth{" "}
                    {
                        quizArray[currentQuizId].questionsList[questionNumber]
                            .points
                    }{" "}
                    point(s)
                </h3>
                {quizArray[currentQuizId].questionsList[questionNumber].type ===
                    "multiple_choice_question" && (
                    <QuizMultipleChoiceQuestion
                        options={
                            quizArray[currentQuizId].questionsList[
                                questionNumber
                            ].options
                        }
                        expectedAnswer={
                            quizArray[currentQuizId].questionsList[
                                questionNumber
                            ].expected
                        }
                        lockAnswer={lockAnswer}
                    ></QuizMultipleChoiceQuestion>
                )}
                {quizArray[currentQuizId].questionsList[questionNumber].type !==
                    "multiple_choice_question" && (
                    <QuizShortAnswerQuestion
                        expectedAnswer={
                            quizArray[currentQuizId].questionsList[
                                questionNumber
                            ].expected
                        }
                        answered={lockAnswer}
                    ></QuizShortAnswerQuestion>
                )}
                <Button
                    onClick={() => answerQuestion()}
                    disabled={lockAnswer}
                    data-testid="lock_selection"
                >
                    Lock In Answer & Reveal
                </Button>
                <Button
                    data-testid="previous_question"
                    onClick={() => decreaseQuestionNumber()}
                >
                    Return to previous Question
                </Button>
                <Button
                    data-testid="advance_question"
                    onClick={() => advanceQuestionNumber()}
                >
                    Advance to next Question
                </Button>
            </div>
        </div>
    );
}
