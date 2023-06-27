
export default {
    OK:{
        status:200,
        massege:"SUCCEED"
    },
    ID_VALIDATION:{
        status:404,
        massege:"ID must be a positive number"
    },
    JOB_NAME_VALIDATION:{
        status:404,
        //how to take MIN_JOB_NAME_LENGTH from the controller
        massege:"JobName must be at least 3 characters long"
    },
    COMPANY_DESCRIPTION_VALIDATION:{
        status:404,
        //same...
        massege:"CompanyDescription must be at least 10characters long"
    },
    DEMANDS_VALIDATION:{
        status:404,
        massege:"Demand must contain at least one item"
    },
    STATUS_VALIDATION:{
        status:404,
        massege:"Status must be a boolean value"
    }
}


