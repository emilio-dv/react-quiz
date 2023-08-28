
import { Container, Stack, Typography } from '@mui/material'
import './App.css'
import Start from '@/components/Start'
import { useQuestionStore } from './store'
import { Game } from './components'


function App() {
  const questions = useQuestionStore(state=>state.questions)
  console.log(questions)
  return (
    <>
      <main>
        <Container maxWidth="sm">
          <Stack direction="row" gap={2} alignItems="center" justifyContent="center">
            <Typography variant='h2' component="h1">
              JavaScript Quizz
            </Typography>
          </Stack>
          {questions.length===0 && <Start/>}
          {questions.length > 0 && <Game/>}
        </Container>
      </main>
    </>
  )
}

export default App
