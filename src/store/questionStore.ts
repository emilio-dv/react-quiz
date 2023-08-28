import { IQuestion } from "@/models/types"
import { create } from "zustand"
import confetti from 'canvas-confetti'
import { persist } from "zustand/middleware"
type State = {
    questions: IQuestion[],
    currentQuestion: number
}

type Actions = {    
    fetchQuestion(limit: number):void
    selectAnswer(questionId: number, answerIndex: number):void
    goNextQuestion():void
    goPreviousQuestion():void
    reset():void
}

export const useQuestionStore = create<State & Actions>()(persist((set, get)=>({
    questions: [],
    currentQuestion: 0,
    async fetchQuestion(limit) {
        console.log(limit)
        const res = await fetch("http://localhost:5173/data/quiz.json");
        const json = await res.json();
        const questions = json.sort(()=>Math.random() - 0.5).slice(0, limit)
        set({
            questions
        })
    },
    selectAnswer(questionId, answerIndex) {
        const {questions} = get();
        const newQuestions = structuredClone(questions);
        const questionIndex = newQuestions.findIndex(({id})=>id===questionId);
        const questionInfo = newQuestions[questionIndex];
        const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex;
        if(isCorrectUserAnswer) confetti();
        newQuestions[questionIndex] = {
            ...questionInfo,
            isCorrectUserAnswer,
            userSelectedAnswer: answerIndex
        }
        set({
            questions: newQuestions
        })
    },
    goNextQuestion(){
        const {currentQuestion, questions} = get();
        const nexQuestion = currentQuestion + 1;
        if(nexQuestion < questions.length){
            set({
                currentQuestion: nexQuestion
            })
        }
    },
    goPreviousQuestion(){
       const {currentQuestion} = get();
       const previousQuestion = currentQuestion - 1;
       if(previousQuestion>=0){
        set({
            currentQuestion: previousQuestion
        })
       }
    },
    reset() {
        set({
            questions: [],
    currentQuestion: 0,
        })
    },
}),{    
    name: "questions"
}))