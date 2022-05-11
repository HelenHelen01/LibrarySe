1.How long did you spend on the coding assignment? 
a.	What would you add to your solution if you had more time?
b.	If you didn't spend much time on the coding test, then use this as an opportunity to explain what you would add.

First of all, thank you for giving me opportunity learn more depth knowledge about difference between fetch(), axios() and sorting data. I spend LibrarySearch project for three days. 
a.	In implementing LibrarySearch app, I want to add sorting feature by ascending and descending order. My initial plan was using React Router order to sort by books by author and published date. Second, solution would be if I have more time, I will add carousel in front page to display cover pictures of the book.   
b.	For the testing I will use React testing library that allows to test react components and functions. I will use Jest.
Test API -created __mocks__ file in source code to test /testing axios with useEffect  Therefore mocked axios called expect(axios.get).toHaveBeenCalledTimes(1);
i.	Test components
ii.	Function 
iii.	API axios

2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

On my Search.js page Searching a book, I used the Formik library, it maintains getting values from the user, also helps in and out of from state. Yup and Formik both helped to validate form. It did really helped my Library Search application. 
"yup": "^0.32.11"
"formik": "^2.2.9"

1.	Initialized value
2.	Keep track of handling for submission
3.	Displays error message
4.	Validation

 
			Image 1

3.	How would you track down a performance issue in production? Have you ever had to do this?
I would track down code to use performance test and code metric analyse.

4.	How would you improve the API that you just used?

When I used the fetching() date had a couple of issue Open Library API and inconsistent data formatting was impossible to use fetch. Then I used the axios also provide All browsers including react native So I was really happy about that. I would say improvements would be a good consistent data format.

a.	Data formating







5.	Please describe yourself using correctly formatted JSON.

http://openlibrary.org/api/volumes/brief/isbn/9781442249073.json
1.	Main JSON Object
2.	Array of objects

 
Image 1






















3. Details array
4. object with Keys Value: number 
5. object inside object

 
Image 2

 
Image 3

6	Key array of numbers
7	“data” array subtitle: value 


About
My name is Helen. I implemented Library Search app used: HTML, CSS, React.js Node.js And tailwind.css the Open Library API 
Installation
Fork or clone this repository. cd open-library-search. Then install dependencies with npm install. Start a local development environment with npm run start and navigate http:// localhost:3000
	
In the future adds on
•	Search by published date 
•	Sort Ascending and Descending order
•	Add express.js to create server and client
