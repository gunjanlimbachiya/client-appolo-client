import { gql } from "@apollo/client";

export const GET_USERS=gql`
    query QueryUsers {
        users:queryUsers {
          first_name,
          last_name,
          primary_email,
          username,
          uuid,
          status
          
        }    
}`

export const GET_PAYROLLDATA=gql`
query PayrollData{
    payrollData {
      basic,
      DA
    }
    
  }`