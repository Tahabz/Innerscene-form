import { Button, Card, CardContent } from "@material-ui/core";
import { useState } from "react";
import Home from './Form';

export default function Main() {

  const [form, setForm] = useState('first')

  const showSecondForm = () => {
    setForm('second');
  }
  const showThirdForm = () => {
    setForm('third');
  }

  return (
    <Card>
      <CardContent>
        {
          form === 'first' ?
          <div>
            <Button
              color="secondary"
              onClick={showSecondForm}>second
            </Button>
  
            <Button 
              color="secondary"
              onClick={showThirdForm}>third
            </Button> 
          </div> : null
        }

        {
          form === 'second' ? <Home /> : null
        }
      </CardContent>
    </Card>
  )
}