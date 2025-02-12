Follow these steps to set up the project for local development:


   
1. **Install dependencies**
   bash
   npm install


2. *Start the server*
   bash
   npm run dev
   
   
# API Endpoints Documentation


**Endpoint:**  
`GET / list-users

**Description:**  
This endpoint is used to check if the API is running properly.  

**Response:**  
json
{
  "status": "ok"
}


---

## 2. Get All Users  
**Endpoint:**  
`GET /list-users 

**Description:**  
Fetches a list of all users. Supports optional query parameters for filtering and sorting.  

### Query Parameters:
- `name` (optional) - Filters users by name.  
- `sort` (optional) - Sorts the users by name in ascending (`asc`) or descending (`desc`) order.  

**Examples:**  



