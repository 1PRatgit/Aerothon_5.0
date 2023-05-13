# Airbus Aerothon 5.0
### Team name- AeroTech

Hackathon date - 13/05/2023  

## Given Problem Statement

Redundant data in data lake - A possible solution and approach to reduce underlying intermediate data in the
system and make the approach of departments using the data more sustainable in the long
term.


## 💻Tech Stack
<br>

![HTML](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![ReactJs](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

<br>

## Solution Approach
Redundant Data in Data Lake - Backend API
This project is a Flask-based backend API for storing and retrieving data related to the Redundant Data in Data Lake project. It uses SQLite and SQLAlchemy for the database aspect.

## Installation
Clone this repository: git clone <repository_url>
Navigate to the project directory: cd backend
Install the required packages: pip install -r requirements.txt
Usage
To run the Flask app, use the following command:

- sh
- Copy code
- flask run
The API endpoints for fetching and pushing data are:

- GET /Assembly and POST /Assembly: Use these endpoints to fetch and push data to and from the Assembly table.
- GET /subAssembly and POST /subAssembly: Use these endpoints to fetch and push data to and from the Sub-Assembly table.
- GET /fabrication and POST /fabrication: Use these endpoints to fetch and push data to and from the Fabrication table.
- POST /login: Use this endpoint to login and access the data.
- The data is assumed to be forecasted data and real-time data entered by the user.

## Database Schema
The database schema for this project is designed to be in the 2nd Normal Form (2NF). It consists of three tables:

- assembly table
- sub_assembly table
- fabrication table
- Security
- To protect the data in the API endpoints, a login mechanism has been implemented. Users need to enter their login credentials to access the data.

## Limitations and Future Work
- This project is still in its early stages and has some limitations. For example, the database could be further optimized to reduce redundancy and increase efficiency.

- In the future, we plan to add support for JWT authentication and authorization. We also plan to integrate the front-end ReactJS application with the API to create a complete solution for the Redundant Data in Data Lake project.

## Contributors
- Sidhharth
- sahana
- Pranjali
- Arushi
- Vittal

## License
This project is licensed under the MIT License - see the LICENSE file for details.
