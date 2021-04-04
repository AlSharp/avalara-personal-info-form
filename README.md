# React assessment
This is a project meant to assess your level of understerstanding of ReactJS. Expect it to take no more than an a few hours. All you are provided is this instruction sheet and mock data provided in a separate file. Take your time, and follow the instructions below.

## Instructions
1. Bootstrap a new React project. Feel free to do it manually, or use a tool like [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html).

2. The mock data is a set of questions which will need to be displayed in a form. Pull this data into the project however you see fit.

3. Your react app should consist of one single page which displays this form. Each item of the data will need to be displayed in the correct order, and with the correct input type. The "displayOrder" property should be used to determine the order. The "type" property should be used to determine which type of input to show.
4. Each field should display the label over the input, and the description to the right.  ***Only display the description of the currently selected input.*** 
5. Create input handler functions to maintain the state of the form as the user inputs data.

6. Styling is not necessary, but feel free to do so if you'd like.

## *Bonus*
1. Unit test your code with your choice of test frameworks.
2. Use some type of data fetching mechanism to fetch the mock data.

## Mock data

```
{
    "formType": "Personal information",
    "data": {
        "fields": [
            {
                "name": "contact.email",
                "type": "text",
                "label": "Name of tax office",
                "description": "Enter your email.",
                "displayOrder": 3
            },
            {
                "name": "address.street",
                "type": "text",
                "label": "Street address",
                "description": "Enter your street address.",
                "displayOrder": 4
            },
            {
                "name": "name.last",
                "type": "text",
                "label": "Last name",
                "description": "Enter your last name.",
                "displayOrder": 2
            },
            {
                "name": "name.first",
                "type": "text",
                "label": "First name",
                "description": "Enter your first name.",
                "displayOrder": 1
            },
            {
                "name": "address.state",
                "type": "select",
                "label": "State of residence",
                "description": "Enter your state of residence.",
                "displayOrder": 5,
                "options": ["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]
            },
            {
                "name": "gender",
                "type": "radio",
                "label": "Gender",
                "description": "Enter your gender",
                "displayOrder": 6,
                "options": ["Male", "Female"]
            }
        ]
    }
}
```

## How to work with project

1. git clone https://github.com/AlSharp/avalara-personal-info-form.git
2. cd avalara-personal-info-form
3. npm install
4. npm run test
5. npm start
6. Navigate to localhost:3000 in the web browser