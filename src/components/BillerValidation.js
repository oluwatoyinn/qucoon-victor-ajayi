import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Card, Form, Button, Modal } from "react-bootstrap";
import { billerValidation } from "../actions/CategoryAction";
// import { axiosClient } from "../utils/Config";
import MyLoader from "../utils/Loader";
import {useHistory} from 'react-router-dom'


//  const validateURL = "/billerValidation"
//  const paymentURL = "/billerPayment"

const BillerValidation = () => {
  const history = useHistory()
  const [state, setState] = useState({
    billerCustomerId:"",
    paymentItemCode:"",
    billerName: "dstv"
  })
  const { billerCustomerId,paymentItemCode,billerName} = state
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()

  const { billerValidatedCustomers,isLoading } = useSelector(state => ({
    billerValidatedCustomers: state.categoryReducer.billerValidatedCustomers,
    isLoading: state.categoryReducer.isLoading,
  }))

  useEffect(() => {
    const data = { billerName }
    dispatch(billerValidation(data))
  }, [dispatch, billerName])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleValidation = (e) => {
   e.preventDefault()
   dispatch(billerValidation(state))
   handleShow()
  }

  const handleChange =(e)=>{
    const {name,value} = e.target
    setState(state=>({...state,[name]:value}))
  }

  const goToMakePayment = () =>{
    history.push("/billerPayment")
  }

  // const handleValidation = (data) =>{
  //   try {
  //     axiosClient.post(validateURL, data)
  //     .then(res=>res.data.customers)
  //     handleShow()
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // }

  // const handleValidation = (data) =>{
  //   try {
  //     axiosClient.post(validateURL, data)
  //     .then(res=>res.data.customers)
  //     handleShow()
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // }

  // const handlePayment = (data) =>{
  //   try {
  //     axiosClient.post(paymentURL,data)
  //   } catch (error) {
  //     console.log(error.response);      
  //   }
  // } 


  return isLoading ? <MyLoader msg="Please wait..."/> : (
    <React.Fragment>
      <div className="background">
        <Container>
          <h4> Input Details</h4>
            <Card className="m-5" style={{ border: "none" }}>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" required placeholder="Reference" name="billerCustomerId" value={billerCustomerId} onChange={handleChange} />
                  <Form.Text style={{ fontWeight: '600' }}>
                    Please input the reference number to credit
                      </Form.Text>
                  <Form.Label className="pt-3" style={{ fontWeight: '600' }}>Payment Item Code </Form.Label>
                  <Form.Control type="text" required placeholder="Biller Name" name="paymentItemCode" value={paymentItemCode} onChange={handleChange}/>
                  <Form.Label className="pt-3" style={{ fontWeight: '600' }}>Payment Item Code </Form.Label>
                  <Form.Control type="text" placeholder="Biller Name" name="dstv" value={billerName} onChange={handleChange} disabled />
                </Form.Group>
                <Button onClick={handleValidation} type="submit" >VALIDATE</Button>
              </Form>
            </Card>
          {/* MODAL HERE  */}
         
          { billerValidatedCustomers && billerValidatedCustomers.map(item=>{
            return(
            <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title style={{color:'green', textAlign:'center'}}>User Validated</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="pt-3" style={{ fontWeight: '600' }}>Customer Name </Form.Label>
                  <Form.Control type="text" placeholder="Biller Name" name="dstv" value={item.fullName} onChange={handleChange} disabled />
                  <Form.Label className="pt-3" style={{ fontWeight: '600' }}>Acount Type </Form.Label>
                  <Form.Control type="text" placeholder="Biller Name" name="dstv" value={item.accountType} onChange={handleChange} disabled />
                  <Form.Label className="pt-3" style={{ fontWeight: '600' }}>Amount </Form.Label>
                  <Form.Control type="text" placeholder="Biller Name" name="dstv" value={item.amount} onChange={handleChange} disabled />
                </Form.Group>
                </Form>
            <Button onClick={goToMakePayment}>Make Payment</Button>
            </Modal.Body>
          </Modal>
            )
          })}
          {/* <pre>{JSON.stringify(billerValidatedCustomers, null, 2)}</pre> */}
        </Container>
      </div>
    </React.Fragment>
  );
}

export default BillerValidation;
