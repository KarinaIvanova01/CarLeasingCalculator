# Car Leasing Calculator

Our company is developing a user-friendly car leasing calculator to assist potential customers in estimating their monthly leasing costs. As part of our front-end development team, you'll be responsible for creating an intuitive web interface that allows users to input relevant details and receive accurate leasing information.

## Project requirements:
- User interface :
    - Design a clean and professional User interface for the calculator using HTML and CSS.
    - Ensure the form elements are well-organized and visually appealing.
    - Implement responsive design to accommodate various screen sizes.
    - Pictures are added to the Appendix section.

## Functionality:
- Develop the calculator logic using vanilla JavaScript or TypeScript.
    - Capture the following user inputs:
        - Car type (Brand new or used)
            - a dropdown list within the two options.
        - Car value ( within the range of €10,000 to €200,000)
            - a text input field for the value
            - a range input field for the value
        - Lease period ( selectable from 12 to 60 months, in 12-month increments)
            - a text input field
            - a range input field for the period.
        - Down payment ( between 10% and 50% of the car value)
            - a range input field with an increment of 5%
        - Calculate the monthly installment based on the selected parameters.
        - Display the leasing cost, down payment, monthly installment, and interest rate.
        - All the inputs must dynamically change the results ( no button to execute the calculation is required).

## Business rules:
- For brand- new cars, apply an annual interest rate of 2.99%
- For used cars, use an annual interest rate of 3.7%
- Validate user inputs to prevent invalid values.

## Results Display:
- Provide a clear breakdown of the leasing cost components.
- Show the calculated results below the form on two columns.
    - Left column:
        - Leasing cost
        - Downpayment (Downpayment %)
    - Right column:
        - Monthly installment
        - Interest rate


## Evaluation Criteria
We'll assess your solution based on the following criteria:
- Code quality : Well-structured, maintainable and commented code.
- Accuracy: Ensure accurate calculations and adherence to business rules.
- User experience: Intuitive interface and error handling.
- Responsiveness: Compatibility across different devices.
 