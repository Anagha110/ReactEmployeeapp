import React from "react";
import { Button, Form } from "semantic-ui-react";
import { useState } from "react";

const EmployeeForm = () => {
  const [show,setShow]=useState(false);
  return (
    <div>
        <div className="container">
      <div>
      <button style={{backgroundColor:"lightblue"}}onClick={()=>setShow(true)}>Employeeform</button>
      </div>
      {show?
    
        <div className="row">
          <div className="column">
            <div className="card bg-light">
              <div className="card-body">

              <Form className="formcalss">
                <Form.Group className="form" unstackable widths={2}>
                  <Form.Input label="First name" placeholder="First name" />
                  <Form.Input label="Last name" placeholder="Last name" />
                </Form.Group>
                <Form.Group widths={2}>
                  <Form.Input label="Address" placeholder="Address" />
                  <Form.Input label="Phone" placeholder="Phone" />
                </Form.Group>
                <Form.Checkbox label="I agree to the Terms and Conditions" />
                <Button type="submit">Submit</Button>
              </Form>
            </div>
          </div>
        </div>
    
    </div>:null
    }
    </div>
      </div>
  );
};

export default EmployeeForm;
