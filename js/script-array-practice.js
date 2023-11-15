//STEP 1
// let favMovies = ['Spirited Away', 'Boyhood', 'Inside Out', 'American Psycho', 'Up'];
// console.log(favMovies[1]);

//STEP 2
// let movies = new Array(5);
// movies[0] = 'Spirited Away';
// movies[1] = 'Boyhood';
// movies[2] = 'Inside Out';
// movies[3] = 'American Psycho';
// movies[4] = 'Up';
// console.log(movies[0]);

//STEP 3
// let movies = new Array(5);
// movies[0] = 'Spirited Away';
// movies[1] = 'Boyhood';
// movies[2] = 'The Lion King';
// movies[3] = 'Inside Out';
// movies[4] = 'American Psycho';
// movies[5] = 'Up';
// console.log(movies.length);

//STEP 4
// let movies = [];
// movies[0] = 'Spirited Away';
// movies[1] = 'Boyhood';
// movies[2] = 'The Lion King';
// movies[3] = 'Inside Out';
// movies[4] = 'Up';
// delete movies[0];
// console.log(movies);

//STEP 5
// let movies = [];
// movies[0] = 'Spirited Away';
// movies[1] = 'Boyhood';
// movies[2] = 'The Lion King';
// movies[3] = 'Inside Out';
// movies[4] = 'Up';
// movies[5] = 'American Psycho';
// movies[6] = 'The Hangover';

// for (let movie in movies) {
//     console.log(movies[movie]);
// }

//STEP 6
// let movies = [];
// movies[0] = 'Spirited Away';
// movies[1] = 'Boyhood';
// movies[2] = 'The Lion King';
// movies[3] = 'Inside Out';
// movies[4] = 'Up';
// movies[5] = 'American Psycho';
// movies[6] = 'The Hangover';

// for (let movie of movies) {
//     console.log(movie);
// }

//STEP 7
// let movies = [];
// movies[0] = 'Spirited Away';
// movies[1] = 'Boyhood';
// movies[2] = 'The Lion King';
// movies[3] = 'Inside Out';
// movies[4] = 'Up';
// movies[5] = 'American Psycho';
// movies[6] = 'The Hangover';
// movies.sort();

// for (let movie of movies) {
//     console.log(movie);
// }

//STEP 8
// let movies = [];
// movies[0] = 'Spirited Away';
// movies[1] = 'Boyhood';
// movies[2] = 'The Lion King';
// movies[3] = 'Inside Out';
// movies[4] = 'Up';
// movies[5] = 'American Psycho';
// movies[6] = 'The Hangover';

// let leastFavMovies = ['Twilight', 'The Last Airbender', 'Les Miserables'];

// console.log('Movies I like:')
// console.log('');
// for (let movie of movies) {
//     console.log(movie);
// }

// console.log('');
// console.log('Movies I regret watching:');
// console.log('');
// for (let movie of leastFavMovies) {
//     console.log(movie);
// }

//STEP 9
// let movies = [];
// movies[0] = 'Spirited Away';
// movies[1] = 'Boyhood';
// movies[2] = 'The Lion King';
// movies[3] = 'Inside Out';
// movies[4] = 'Up';
// movies[5] = 'American Psycho';
// movies[6] = 'The Hangover';

// let leastFavMovies = ['Twilight', 'The Last Airbender', 'Les Miserables'];
// movies = movies.concat(leastFavMovies).sort().reverse();
// for (let movie of movies) {
//     console.log(movie);
// }

//STEP 10
// let movies = [];
// movies[0] = 'Spirited Away';
// movies[1] = 'Boyhood';
// movies[2] = 'The Lion King';
// movies[3] = 'Inside Out';
// movies[4] = 'Up';
// movies[5] = 'American Psycho';
// movies[6] = 'The Hangover';

// let leastFavMovies = ['Twilight', 'The Last Airbender', 'Les Miserables'];
// movies = movies.concat(leastFavMovies).sort().reverse();
// console.log(movies[movies.length - 1]);

//STEP 11
// let movies = [];
// movies[0] = 'Spirited Away';
// movies[1] = 'Boyhood';
// movies[2] = 'The Lion King';
// movies[3] = 'Inside Out';
// movies[4] = 'Up';
// movies[5] = 'American Psycho';
// movies[6] = 'The Hangover';

// let leastFavMovies = ['Twilight', 'The Last Airbender', 'Les Miserables'];
// movies = movies.concat(leastFavMovies).sort().reverse();
// console.log(movies.sort().reverse()[0]);

//STEP 12
// let movies = [];
// movies[0] = 'Spirited Away';
// movies[1] = 'Boyhood';
// movies[2] = 'The Lion King';
// movies[3] = 'Inside Out';
// movies[4] = 'Up';
// movies[5] = 'American Psycho';
// movies[6] = 'The Hangover';

// let leastFavMovies = ['Twilight', 'The Last Airbender', 'Les Miserables'];
// movies = movies.concat(leastFavMovies).sort().reverse();
// let betterMovies = ['The King\'s Speech', 'Lincoln', 'The Social Network'];

//     // Because our array contains only strings, we can use indexOf()
//     // to check for a given movie's index print the index in the
//     // console, and then replace that film with a better movie,
//     // printing the new array to the console at the end

//     // a traditional for loop is used since the counter can be used
//     // to index for both leastFavMovies and betterMovies
// let index;
// console.log(movies);
// for (let i = 0; i < leastFavMovies.length; i++) {
//     // don't need to check if movie is included since we concatenated
//     index = movies.indexOf(leastFavMovies[i]);
//     console.log('Index: ' + index + ", Movie: " + leastFavMovies[i]);
//     movies[index] = betterMovies[i];
// }

// console.log(movies); //unsorted after replacement

//STEP 13
// let movies = [
//     ['Spirited Away', 1],
//     ['Boyhood', 2],
//     ['The Lion King', 3],
//     ['Inside Out', 4],
//     ['Up', 5]
// ]

// let movieNames = [];
// for (eachMovie of movies) {
//     movieNames = movieNames.concat(eachMovie.filter(value => typeof value === 'string'));
// }

// console.log(movieNames);

//STEP 14
// let employees = ['ZAK', 'JESSICA', 'MARK', 'FRED', 'SALLY'];
// const showEmployee = arrayOfNames => {
//     let employeeList = 'Employees:\n\n';
//     for (let name of arrayOfNames) {
//         employeeList += name + '\n';
//     }
//     console.log(employeeList);
// }

// showEmployee(employees);

//STEP 15
// function garbageFilter (someArray) {
//     return someArray.filter(item => {
//         return item !== false && item !== null && item !== 0 && item !== '';
//     })
// }
// let testData = [58, '', 'abcd', true, null, false, 0];
// console.log(garbageFilter(testData));


/* HELPER FUNCTIONS TO GENERATE RANDOM ARRAYS TO TEST PROBLEMS 16 AND 17 */

// let testArray = [];
// function randomInt() {    // helper function to create int from 1-100
//     return Math.floor(Math.random() * 100) + 1;
// }
// const arrayLength = randomInt();
// for (let i = 0; i < arrayLength; i++) { // random array generation
//     testArray.push(randomInt());
// }

//STEP 16
// function randomElement(someArray) {
//     const index = Math.floor(Math.random() * someArray.length);
//     return someArray[index];
// }

//STEP 17
// function largestNumber(someArray) {
//     someArray.sort((a, b) => a - b); // sort array numerically
//     return someArray[someArray.length - 1] // return last item in sorted array
// }

// // To accomplish the same outcome without altering the order of the given array:
// function largestNumberNoSort(someArray) {
//     let champion = someArray[0]; // set champion to first entry value
//     for (let element of someArray) {
//         if (champion < element) {
//             champion = element;
//         }
//     }
//     return champion;
// }