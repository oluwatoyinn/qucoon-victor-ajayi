import React from 'react'
import {  Card} from "react-bootstrap";

function BillerCategoriesList() {
    return (
        <div className="row">
            <div className="col-6 mx-auto col-md-6 col-lg-3 col-sm-6 my-2" >
                <Card className="p-2 shadow cardDesign">
                    <Card className="p-3 cardWidth ">
                        <Card.Img
                        variant="top"
                        // src={item.image} servicelogo
                        className=" position-relative billerImageWidth"
                        /> 
                    </Card>
                    <Card.Body>
                    <h6 className="description">billerName</h6>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default BillerCategoriesList


// import React, { useEffect} from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Container,Card, Form } from "react-bootstrap";
// import {billerValidation  } from "../actions/CategoryAction";

// const BillerValidation = () => {
//   const [state, setState] = useState({
//     billerName:"dstv"
//   })
// const dispatch = useDispatch()
// const { validationListParam} = useSelector(state => ({
//     validationListParam: state.categoryReducer.validationListParam,
//     isLoading: state.categoryReducer.isLoading,
// }))

// useEffect(() => {
//   const data = validationListParam
//   dispatch(billerValidation(data))
// }, [dispatch, validationListParam])

//   return (
//     <React.Fragment>
//       <div className="background">
//         <Container>
//               <h2> Input Details</h2>
//               <Card>
//                 <Card className="m-5" style={{ border: "none" }}>
//                   <Form>
//                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                       {/* <Form.Label>Biller </Form.Label> */}
//                       <Form.Control type="text" placeholder="Reference" />
//                       <Form.Text style={{ fontWeight: '600' }}>
//                         Please input the reference number to credit
//                                 </Form.Text>
//                       <Form.Label className="pt-3" style={{ fontWeight: '600' }}>Biller Name </Form.Label>
//                       <Form.Control type="text" placeholder="Biller Name" disabled />
//                     </Form.Group>
//                   </Form>
//                 </Card>
//               </Card>
//               <pre>{JSON.stringify(validationListParam,null,2)}</pre>                
//         </Container>
//       </div>
//     </React.Fragment>
//   );
// }

// export default BillerValidation;
