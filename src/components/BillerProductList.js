import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getBillerProductList } from "../actions/CategoryAction";
import { Container, Row, Col, Card,Button} from "react-bootstrap";
// import BillerValidation from "./BillerValidation";
import MyLoader from "../utils/Loader";
import {useHistory} from 'react-router-dom'


function BillerProductList() {
    const history = useHistory()
    const [state, setState] = useState({
        categoryId: "",
        billerId: "",
        billerName:""
    })
    const { categoryId} = state
    const dispatch = useDispatch()
    const { billerProductList, productListParams, isLoading } = useSelector(state => ({
        billerProductList: state.categoryReducer.billerProductList,
        productListParams: state.appReducer.productListParams,
        isLoading: state.categoryReducer.isLoading,
    }))

    useEffect(() => {
        const data = {
            billerId:productListParams.billerId,
            categoryId:productListParams.categoryId
        }
        dispatch(getBillerProductList(data))
    }, [dispatch, productListParams])


    // const goToBillerValidation = (data) => {
    //     dispatch({
    //       type:"GOTO_BILLERVALIDATION",
    //       payload:data
    //     })
    //       history.push(`/billerValidate`)
    //   }
      
    const handleChange = (e) => {
        setState(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const goToValidatePage = ()=> {
        history.push('/billervalidate')
      }

    return isLoading ? <MyLoader msg="Please wait..." /> : (
        <React.Fragment>
            <Container>
                <Row className="mt-5">
                    <Col md={8}>
                        <Card>
                            <Card.Body>
                                <Card.Text>Select from options below</Card.Text>
                                <Row>
                                    <Col md={12}>
                                    <select 
                                    className="form-select p-2 selectIcon" 
                                    style={{cursor:'pointer'}} 
                                    name="categoryId" 
                                    value={categoryId} 
                                    onChange={handleChange} 
                                    >
                                        {billerProductList?.map(items => {
                                            return (
                                                <option  value={items.paymentItemId} key={items.paymentItemId}> 
                                                    {items.paymentItemName} at &#8358;{items.amount}
                                                </option>
                                            )
                                        })}  
                                    </select>
                                    </Col>
                                    <Col className="pt-4">
                                        <Button onClick={goToValidatePage}>Validate Payment</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* <Row>
                    <Col>
                        <pre>{JSON.stringify(state,null,2)}</pre>
                        <pre>{JSON.stringify(productListParams,null,2)}</pre>                
                        <pre>{JSON.stringify(billerProductList,null,2)}</pre> 
                    </Col>
                </Row> */}
            </Container>
        </React.Fragment>
    )
}

export default BillerProductList
