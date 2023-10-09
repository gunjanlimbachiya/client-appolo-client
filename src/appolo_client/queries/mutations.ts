import { gql } from "@apollo/client";

export const ADD_EMPLOYEE=gql`
mutation AddEmployee($emp: EmployeeType) {
    addEmployee(emp: $emp) {
     empID,
     name,
     age,
     gender,
     dob 
    }
  } `