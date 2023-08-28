import { useQuestionStore } from '@/store'
import { Question } from '.';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import Footer from './Footer';


export default function Game() {
    const questions = useQuestionStore(state => state.questions);
    const currentQuestion = useQuestionStore(state => state.currentQuestion);

    const goNextQuestion = useQuestionStore(state => state.goNextQuestion);
    const goPreviousQuestion = useQuestionStore(state => state.goPreviousQuestion);

    const info = questions[currentQuestion];
    return (
        <>
            <Stack direction="row" gap={2} alignItems="center" justifyContent="center">
                <IconButton onClick={goPreviousQuestion} disabled={currentQuestion === 0}>
                    <ArrowBackIosNew />
                </IconButton>
                {currentQuestion + 1} /{questions.length}
                <IconButton onClick={goNextQuestion} disabled={currentQuestion === questions.length - 1}>
                    <ArrowForwardIos />
                </IconButton>
            </Stack>
            <Question info={info} />
            <Footer/>
        </>
    )
}
