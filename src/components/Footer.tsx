import { useQuestionData } from '@/hooks' 
import { useQuestionStore } from '@/store';
import { Button } from '@mui/material';

export default function Footer() {
    const {correct, incorrect, unanswered} = useQuestionData();
    const reset = useQuestionStore(state=>state.reset)
  return (
    <footer style={{marginTop: '16px'}}>
        <strong>
            {`✅${correct} correctas - ❌ ${incorrect} incorrectos - ❓ ${unanswered} sin responder`}
        </strong>
         
        <Button sx={{marginTop: 2}} color="error" fullWidth onClick={reset} variant='contained'>
            Limpiar
        </Button>
    </footer>
  )
}
