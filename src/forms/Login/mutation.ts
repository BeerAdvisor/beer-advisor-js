import gql from 'graphql-tag';

export const SIGNUP_MUTATION = gql`
    mutation SignupMutation(
        $email: String!
        $password: String!
        $nickname: String!
        $sex: Sex!
        $birthdate: DateTime!
    ) {
        signup(
            signUpInput: {
                email: $email
                password: $password
                nickname: $nickname
                sex: $sex
                birthdate: $birthdate
            }
        ) {
            email,
            role,
            nickname,
            birthdate,
            name,
            surname,
        }
    }
`;

export const LOGIN_MUTATION = gql`
    mutation LoginMutation($email: String!, $password: String!) {
        login(loginInput: { email: $email, password: $password }) {
            email,
            role,
            nickname,
            birthdate,
            name,
            surname,
        }
    }
`;

export const USER_QUERY = gql`
    query User {
        user {
            email,
            role,
            nickname,
            birthdate,
            name,
            surname,
            createdAt,
            updatedAt,
            beerRatings {
                beer {
                    id
                }
            }
        }
    }
`;
