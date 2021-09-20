import * as Yup from 'yup'


export const BillerSchema = Yup.object().shape({
    reference:Yup.string()
        .required("required"),
    billerCustomerId:Yup.string()
        .required("required"), 
    customField2:Yup.string()
        .required("required").min(2).max(15),
    customField3:Yup.string()
        .required("required").min(2).max(15),
    amount:Yup.string()
        .required("required"),
    itemFee:Yup.string()
        .required("required"),
    mobileNumber:Yup.string()
        .required("required"),
    source:Yup.string()
        .required("required").min(2).max(15),
    billerCustomerName:Yup.string()
        .required("required").min(2).max(15),
    debitAccountNumber:Yup.string()
        .required("required"),
    debitAccountName:Yup.string()
        .required("required").min(2).max(15),
    billerName:Yup.string()
        .required("required").min(2).max(15),
    paymentItemCode:Yup.string()
        .required("required").min(2).max(15),
    username:Yup.string()
        .required("required").min(2).max(15),
    saveBeneficiary:Yup.string()
        .required("required").min(2).max(15),
    countryCode:Yup.string()
        .required("required"), 
    categoryId:Yup.string()
        .required("required").min(2).max(15),
    password:Yup.string()
        .min(3, "too short")
        .required("required"),
})
