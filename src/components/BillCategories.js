import React, {useEffect,useState} from "react";
import { Container, Row, Col,Card} from "react-bootstrap";
// import BillerCategoriesList from "./BillerCategoriesList";
import { useDispatch,useSelector } from "react-redux";
import { getCategory,getBillerCategoryList } from "../actions/CategoryAction";
import MyLoader from "../utils/Loader";
import {useHistory} from 'react-router-dom'

const  BillCategories = () => {
  const history = useHistory()
  const [state, setState] = useState({
    categoryId:"cabletv",
    billerId:"",
    billerName:""
  })
  const {categoryId} = state
  const dispatch = useDispatch()
  const {billerCategories,billerCategoriesList,isLoading} =useSelector(state=>({
    billerCategories: state.categoryReducer.billerCategories,
    billerCategoriesList:state.categoryReducer.billerCategoriesList,
    isLoading:state.categoryReducer.isLoading
  }))

  useEffect(() => {
    const data = { request:"categoryList"}
    dispatch(getCategory(data))
  }, [dispatch])

  // biller category list
  useEffect(() => {
    const data =  {categoryId}
    dispatch(getBillerCategoryList(data))
  }, [dispatch,categoryId])

  const handleChange=  (e)=> {
    setState(prev=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }

  // const handleSearchCategory = async () =>{
  //   try {
  //     const data = await {categoryId}
  //     dispatch(getBillerCategoryList(data))
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const goToProductList = (billerId,categoryId, billerName) => {
    const data = {billerId,categoryId,billerName}
    dispatch({
      type:"GOTO_PRODUCTLIST",
      payload:data
    })
    history.push(`/billerProduct`)
  }

  const goToValidatePage = ()=> {
    history.push('/billervalidate')
  }
  
  return isLoading ? <MyLoader msg="Please wait..."/> : (
    <React.Fragment>
        <Container>
          <Row>
            <Col md={12}>
              <h5>Please select category</h5>
             <select className="form-select p-2 selectIcon" name="categoryId" value={categoryId} onChange={handleChange} >
               {billerCategories.map(item=>{
                 return (
                  <option value={item.categoryId} key={item.categoryId}> {item.categoryName} </option>
                 )
               })} 
              </select>
            </Col>
          </Row>
          <Row className={"mt-4"}>
            <Col md={12}>
              <div className="row">
                {billerCategoriesList.map(item=>{
                //  if(item.moreOption ==="NO") return <Redirect to="/billerValidate"/>
                  return (
                    <div className="col-6 col-md-6 col-lg-3 col-sm-6 my-2" key={item.billerId}>
                        <Card 
                        className="p-3 cardWidth" 
                        style={{cursor:'pointer'}} 
                        onClick={
                          item.moreOption==="NO"? 
                          ()=> goToValidatePage():
                          ()=>goToProductList(item.billerId,item.categoryId,item.billerName)}
                        >
                            <Card.Img
                            variant="top"
                            src={item.serviceLogo}
                            className=" position-relative billerImageWidth"
                            /> 
                            <Card.Body>
                              <h6 className="description"> {item.billerName} </h6>
                            </Card.Body>
                        </Card>
                    </div>
                  )
                })} 
            </div>
            </Col>
          </Row>
          {/* <pre>{JSON.stringify(state,null,2)}</pre> */}
        </Container>
    </React.Fragment>
  );
}

export default BillCategories;
