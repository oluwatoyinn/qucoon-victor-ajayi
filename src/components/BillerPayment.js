import React from 'react'
import { Container, Row, Col} from "react-bootstrap";
// import { useDispatch,useSelector } from "react-redux";
import { billerPayment } from "../actions/CategoryAction";
import { Formik } from "formik";
import { BillerSchema } from "../utils/ValidationSchema";
import CustomForm from "../components/FormFields/CustomForm";
import CustomInputFields  from "../components/FormFields/CustomInputFields";
import { Button} from '@material-ui/core/';
import CircularProgress from '@material-ui/core/CircularProgress'


function BillerPayment() {

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Formik
                        initialValues={{
                            reference: "80981348A83440904042300319",
                            billerCustomerId: "",
                            categoryId:"",
                            customField2:"",
                            customField3:"",
                            amount: "",
                            itemFee: "0",
                            mobileNumber: "",
                            source: "openapi",
                            billerCustomerName: "",
                            debitAccountName:"",
                            debitAccountNumber: "4460518964",
                            billerName: "",
                            paymentItemCode: "",
                            username: "09049957786",
                            saveBeneficiary: "NO",
                            password: "654321",
                            countryCode:"234"
                        }}
                        onSubmit={async(data,{setSubmitting})=>{
                            setSubmitting(true);
                            await billerPayment(data)
                            setSubmitting(false);
                          }} 
                        validationSchema={BillerSchema} 
                    >
                        {({isSubmitting})=>(
                            <CustomForm>
                                <Row>
                                    <Col lg={6} md={12}>
                                        <CustomInputFields
                                            fullWidth
                                            name="reference"
                                            labelName="Reference"
                                            disabled
                                        />
                                         <CustomInputFields
                                            fullWidth
                                            name="customField2"
                                            labelName="customField2"
                                        />
                                        <CustomInputFields
                                            fullWidth
                                            name="amount"
                                            labelName="amount"
                                        />
                                        <CustomInputFields
                                            fullWidth
                                            name="mobileNumber"
                                            labelName="mobileNumber"
                                        />
                                        <CustomInputFields
                                            fullWidth
                                            name="source"
                                            labelName="source"
                                        />
                                         <CustomInputFields
                                            fullWidth
                                            name="billerName"
                                            labelName="billerName"
                                        />
                                        <CustomInputFields
                                            fullWidth
                                            name="paymentItemCode"
                                            labelName="paymentItemCode"
                                        />
                                        <CustomInputFields
                                            fullWidth
                                            name="password"
                                            labelName="password"
                                        />
                                    </Col>
                                    <Col lg={6} md={12}>
                                        <CustomInputFields
                                            fullWidth
                                            name="billerCustomerId"
                                            labelName="billerCustomerId"
                                        />
                                        <CustomInputFields
                                            fullWidth
                                            name="customField3"
                                            labelName="customField3"
                                        />
                                        <CustomInputFields
                                            fullWidth
                                            name="itemFee"
                                            labelName="itemFee"
                                        />
                                        <CustomInputFields
                                            fullWidth
                                            name="billerCustomerName"
                                            labelName="billerCustomerName"
                                        />
                                        <CustomInputFields
                                            fullWidth
                                            name="debitAccountName"
                                            labelName="debitAccountName"
                                        />
                                          <CustomInputFields
                                            fullWidth
                                            name="username"
                                            labelName="username"
                                            disabled
                                        />
                                        <CustomInputFields
                                            fullWidth
                                            name="saveBeneficiary"
                                            labelName="saveBeneficiary"
                                            disabled
                                        />
                                        <CustomInputFields
                                            fullWidth
                                            name="countryCode"
                                            labelName="countryCode"
                                            disabled
                                        />
                                    </Col>
                                </Row>
                                <Button
                                fullWidth
                                startIcon={isSubmitting ? <CircularProgress size="1rem"/> : null}
                                type="submit" 
                                variant="contained" 
                                color="primary"
                                disabled={isSubmitting}   
                                style={{backgroundColor:"#2886C8"}}
                                >
                                Make Payment
                                </Button>
                            </CustomForm>
                        )}

                    </Formik>
                    {/* <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="pt-3" style={{ fontWeight: '600' }}>Reference </Form.Label>
                            <Form.Control type="text" placeholder="Biller Name" name="reference" value={reference} onChange={handleChange} disabled  />
                            <Form.Label className="pt-3" style={{ fontWeight: '600' }}>Biller Customer Id </Form.Label>
                            <Form.Control type="text" placeholder="Biller Name" name="billerCustomerId" value={billerCustomerId} onChange={handleChange}  />
                            <Form.Label className="pt-3" style={{ fontWeight: '600' }}>CategoryId </Form.Label>
                            <select className="form-select p-2 selectIcon" name="categoryId" value={categoryId} onChange={handleChange} >
                                {billerCategories.map(item=>{
                                    return (
                                    <option value={item.categoryId} key={item.categoryId}> {item.categoryName} </option>
                                    )
                                })} 
                            </select>
                            <Form.Label className="pt-3" style={{ fontWeight: '600' }}>Amount </Form.Label>
                            <Form.Control type="text" placeholder="Biller Name" name="amount" value={amount} onChange={handleChange}  />
                            <Form.Label className="pt-3" style={{ fontWeight: '600' }}>Mobile Number </Form.Label>
                            <Form.Control type="text" placeholder="Biller Name" name="mobileNumber" value={mobileNumber} onChange={handleChange}  />
                            <Form.Label className="pt-3" style={{ fontWeight: '600' }}>Biller Customer Name  </Form.Label>
                            <Form.Control type="text" placeholder="Biller Name" name="billerCustomerName" value={billerCustomerName} onChange={handleChange}  />
                        
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="pt-3" style={{ fontWeight: '600' }}>Debit Account Number </Form.Label>
                            <Form.Control type="text" placeholder="Biller Name" name="debitAccountNumber" value={debitAccountNumber} onChange={handleChange} disabled  />

                            <Form.Label className="pt-3" style={{ fontWeight: '600' }}>Biller Name </Form.Label>
                            <Form.Control type="text" placeholder="Biller Name" name="billerName" value={billerName} onChange={handleChange}  />
                            <Form.Label className="pt-3" style={{ fontWeight: '600' }}>Payment Item Code </Form.Label>
                            <Form.Control type="text" placeholder="Biller Name" name="paymentItemCode" value={paymentItemCode} onChange={handleChange}  />
                            <Form.Label className="pt-3" style={{ fontWeight: '600' }}>UserName </Form.Label>
                            <Form.Control type="text" placeholder="Biller Name" name="username" value={username} onChange={handleChange} disabled />
                            <Form.Label className="pt-3" style={{ fontWeight: '600' }}>Password </Form.Label>
                            <Form.Control type="password" placeholder="Biller Name" name="password" value={password} onChange={handleChange} disabled />
                            <Form.Label className="pt-3" style={{ fontWeight: '600' }}>Debit Account Name  </Form.Label>
                            <Form.Control type="text" placeholder="Biller Name" name="debitAccountName" value={debitAccountName} onChange={handleChange}  />
                        </Form.Group>
                    </Col> */}
                </Row>
                 {/* <pre>{JSON.stringify(billerCategoriesList, null, 2)}</pre> */}
            </Container> 
        </React.Fragment>
    )
}

export default BillerPayment
