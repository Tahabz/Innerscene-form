import { Button, Card, CardContent } from "@material-ui/core";
import { Formik, Field, Form } from "formik";
import { FormikTextField } from 'formik-material-fields';
import React, { useState } from "react";


export default function Home() {
  return (
    <Card>
      <CardContent>
        <FormStepper initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }} onSubmit={(values) => {
          console.log(values)
        }}>

          <div>
            <FormikTextField name="firstName" label="First Name" value="input" />
          </div>
          <div>
            <FormikTextField name="lastName" label="Last Name" />
          </div>
          <div>
            <FormikTextField name="email" type="email" label="Email" />
          </div>
        </FormStepper>
      </CardContent>
    </Card>
  )
}

const FormStepper = ({children, ...props}) => {

  const childrenArray = React.Children.toArray(children)
  const [step, setStep] = useState(0)

  const currentChild = childrenArray[step];


  const isLastChild = () => step === childrenArray.length - 1

  return <Formik {...props} onSubmit={async (values) => {
    if (isLastChild()) {
      await props.onSubmit(values)
    } else {
      setStep(s => s + 1)
    }
  }}>
      <Form autoComplete="off">
        {currentChild}
        {step > 0 ? <Button onClick={() => setStep(s => s-1)}>Back</Button>: null}
        <Button type="submit">{isLastChild() ? "submit" : "Next"}</Button>
      </Form>
  </Formik>
}
