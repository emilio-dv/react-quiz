import { useQuestionStore } from "@/store";

export const useQuestionData = ()=>{
    const questions = useQuestionStore(state=>state.questions);
    let correct = 0, incorrect = 0, unanswered = 0;

    questions.forEach(question=>{
        const {userSelectedAnswer, correctAnswer } = question;
        if(userSelectedAnswer==null) unanswered ++
        else if(userSelectedAnswer===correctAnswer)         correct++
        else incorrect++;
    })

    return {
        correct,
        incorrect,
        unanswered
    }
}