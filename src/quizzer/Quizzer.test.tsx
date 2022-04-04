import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "./Quizzer";
import userEvent from "@testing-library/user-event";

describe("Quizzer Tests", () => {
    beforeEach(() => {
        render(<Quizzer />);
    });
    test("The Quizzer renders", () => {
        // Up to you to decide what your tests are!
        // Add more tests, more components, more test files!
        expect(screen.getByText("Quizzer")).toBeInTheDocument();
    });
    test("The first quiz's first question (and multiple choice questions) are displayed", () => {
        expect(
            screen.getByText("Question 1: Is the earth flat?")
        ).toBeInTheDocument();
    });
    test("User can change multiple choice question answers", () => {
        const select = screen.getByTestId("answer_selection");
        userEvent.selectOptions(select, "false");
        expect(select);
    });
    test("User can lock in answer and see if they're incorrect", () => {
        const lockButton = screen.getByTestId("lock_selection");
        lockButton.click();
        expect(screen.getByText("❌")).toBeInTheDocument();
    });
    test("User can lock in answer and see if they're correct", () => {
        const select = screen.getByTestId("answer_selection");
        userEvent.selectOptions(select, "false");
        const lockButton = screen.getByTestId("lock_selection");
        lockButton.click();
        expect(screen.getByText("✔️")).toBeInTheDocument();
    });
    test("User can advance to next question", () => {
        const advButton = screen.getByTestId("advance_question");
        advButton.click();
        expect(
            screen.getByText("Question 2: Is this the second question?")
        ).toBeInTheDocument();
    });
    test("User can return to a previous question", () => {
        const advButton = screen.getByTestId("advance_question");
        advButton.click();
        const prvButton = screen.getByTestId("previous_question");
        prvButton.click();
        expect(
            screen.getByText("Question 1: Is the earth flat?")
        ).toBeInTheDocument();
    });
    test("User can select another quiz & Short Answer Questions render", () => {
        const select = screen.getByTestId("quiz_selection");
        userEvent.selectOptions(select, "Quiz2");
        expect(screen.getByText("Question 1: Is the earth flat (again)?"));
    });
    test("User can advance to the second question on the second quiz", () => {
        const select = screen.getByTestId("quiz_selection");
        userEvent.selectOptions(select, "Quiz2");
        const advButton = screen.getByTestId("advance_question");
        advButton.click();
        expect(
            screen.getByText("Question 2: what's my (craig's) favorite color?")
        );
    });
    test("user can type in and check if a short answer is correct", () => {
        const select = screen.getByTestId("quiz_selection");
        userEvent.selectOptions(select, "Quiz2");
        const answerBox = screen.getByRole("textbox");
        userEvent.clear(answerBox);
        userEvent.type(answerBox, "no");
        const lockButton = screen.getByTestId("lock_selection");
        lockButton.click();
        expect(screen.getByText("no is correct!")).toBeInTheDocument();
    });
    test("user can type in and check if a short answer is incorrect", () => {
        const select = screen.getByTestId("quiz_selection");
        userEvent.selectOptions(select, "Quiz2");
        const answerBox = screen.getByRole("textbox");
        userEvent.clear(answerBox);
        userEvent.type(answerBox, "yes");
        const lockButton = screen.getByTestId("lock_selection");
        lockButton.click();
        expect(screen.getByText("yes is not correct. :(")).toBeInTheDocument();
    });
});
