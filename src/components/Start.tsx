import { useQuestionStore } from '@/store/questionStore'
import { Button } from '@mui/material' 
const LIMIT_QUESTIONS = 10
export default function Start() {
    const fetchQuestion = useQuestionStore(state=> state.fetchQuestion)

    const handleClick = ()=>{
        fetchQuestion(LIMIT_QUESTIONS);
    }
  return (
    <Button variant='contained' onClick={handleClick}>
        ¡Empezar!
    </Button>
  )
}
