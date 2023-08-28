import { IQuestion } from '@/models/types' 
import { useQuestionStore } from '@/store'
import { Card, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import SyntaxHighlighter from 'react-syntax-highlighter'

const getBackgroundColor = (info: IQuestion, index: number)=>{
    const {userSelectedAnswer, correctAnswer} = info;
    if(userSelectedAnswer===null) return 'transparent';

    if(index ===correctAnswer && index !==userSelectedAnswer) return 'transparent';

    if(index===correctAnswer) return 'green';

    if(index===userSelectedAnswer) return 'red';
    
    return 'transparent';

}

export default function Question(
    {info}: {
        info: IQuestion
    }
) {

    const selectAnswer = useQuestionStore(state=>state.selectAnswer)

    const createDandleClick = (answrId: number)=>{
        selectAnswer(info.id, answrId)
    }

  return (
   <Card variant='outlined' sx={{
    p: 2,
    textAlign: 'left'
   }}>
        <Typography variant='h5'>
            {info.question}
        </Typography>
        <SyntaxHighlighter language='javascript'>
            {info.code}
        </SyntaxHighlighter>
        <List disablePadding>
            {
                info.answers.map((answer, index)=>(
                    <ListItem key={index} disablePadding divider onClick={()=>createDandleClick(index)}>
                        <ListItemButton disabled={info.userSelectedAnswer!==undefined} sx={{
                            backgroundColor: getBackgroundColor(info, index)
                        }}>
                            <ListItemText primary={answer}></ListItemText> 
                        </ListItemButton>
                    </ListItem>
                ))
            }
        </List>
    </Card>
  )
}
