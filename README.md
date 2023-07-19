## Friday Night Films - Part 3


This follows on from
[Part 1](https://gist.git.generalassemb.ly/katie/9c940b65fd83f9a6610e7d1886c6b553) and [Part 2](https://gist.git.generalassemb.ly/katie/071ec8e8176138d6a497ccae6ffc6a76)
you need to have finished Part 1, but you do not need to have finished Part 2.

### Using React Router

You'll need to install react router:

```
yarn add react-router-dom@6
```

You'll need to add `BrowserRouter` and a set of `Routes` at the very top of your App:

```js
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/films" element={<FilmLibrary/>} />
      </Routes>
    </BrowserRouter>
  );
}
```

Now you'll only be able to see your films app if you go to `http://localhost:3000/films`

### Step 1: Add a home page

Add a separate home page for when you go to `http://localhost:3000/` (without `/films`).

You can put whatever you want on this page! But make sure it includes a `Link` component to get to `/films` to see the main app.

**Hint:** You'll need a new React component for the new page.


### Step 2: Add a not-found page

Add another component which will be a not-found page. If you enter any invalid URL (anything that's not `/` and not `/films`) it should show this page. 

Include a nice message like "Uh oh, that page doesn't exist."


### Step 3: URL and links for each film detail page

Go to your `FilmRow` component.

Replace the "more details" button with a React Router `Link` component. (Yours might be a bit different. That's ok!)

```js
<Link to={`/films/${props.film.id}`} className="action">
  <span className="material-icons">read_more</span>
</Link>
```

Your new `Link` component will change the URL to a URL with the film ID in it. 

Find a way to change your code so that this `Link` works like the button did before. Clicking it should show the details of the film in the `FilmDetail` component.

You should be able to load these pages (directly in the URL bar):

- http://localhost:3000/films should still work, but should say 'No film selected' instead of showing film details.
- http://localhost:3000/films/335787 should load details for the movie 'Uncharted'
- http://localhost:3000/films/508947 should load details for the movie 'Turning Red'

**Hint:** You will likely need to change how the `FilmDetails` component gets data from the API. It cannot use the button click event anymore, and you may need `useEffect`.

This follows on from
[Film Project - Part 1](https://gist.git.generalassemb.ly/katie/9c940b65fd83f9a6610e7d1886c6b553)
you need to finish step 1 and step 2, but you do not need to have done the extension.

### Step 1: Set up an API key

To use TMDB you'll need to get an API key.

- Go to [TMDb](https://www.themoviedb.org).
- You'll have to sign up first (it's free). However, it will ask for your phone number and address.
- Request an API key on your profile page (further instructions [here](https://developers.themoviedb.org/3/getting-started)).

Once you have your API key, include it in your app. Because you **never want to store app secrets in your repository**, you'll use the [`dotenv`](https://github.com/motdotla/dotenv) package to keep the API key in a local file.

#### Using `dotenv` to include your API key

Using `create-react-app` means that `dotenv` is already installed.

You just need to:
- Create a new file at the root of your project called `.env.local`.
- In your `.env.local` file, add the line `REACT_APP_TMDB_API_KEY=<Your TMDB API v3 KEY>`

To use that API key in your JavaScript, add the following line to your `TMDB.js` file:

```js
// Gets the API key from the .env.local file
export const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY
```

You can then import this API key from other files like this:

```js
import { TMDB, TMDB_API_KEY } from "./TMDB"
```

### Step 2: Fetch film details

When the user clicks to show more details about a film, instead of using the information from `TMDB.js` it should fetch that information from the API using `fetch` and store it in state in the `FilmLibrary` component.

1. Read the TMDB API documentation for looking up a Movie by its ID: https://developers.themoviedb.org/3/movies/get-movie-details

2. When the user clicks on one of the films, use the API to get the movie information. Check it's working with `console.log` before trying to use the results.

3. Use the result of the API call in the `FilmDetail` component

4. The API results include a tagline for most movies! Include the tagline in your `FilmDetail` before the overview.


### Step 3: Fetch the list of movies

_All these movies are from 2017... let's get some newer ones from the API!_

> **Warning:** For this step you will need to use `useEffect`. You may want to wait until it's covered in class before doing this step.

1. Read the documentation for discovering new movies using the TMDB API: https://developers.themoviedb.org/3/discover/movie-discover

2. Using `useEffect`, change your code so that after the `FilmLibrary` component renders for the first time (and only the first time), it fetches most popular 2022 movies and displays those in the list of movies.

**Hint:** You'll need `sort_by=popularity.desc`, and `primary_release_year=2022` in the URL of your request.

You should be able to delete all the films from `TMDB.js` now.

### Extensions

You're free to extend this film app as much as you want!

- The TMDB API only returns the first 20 movies, make it possible to load more and add them to the list. (You could add a 'load more' button at the end of the list)
- Make it possible to choose the release year for the movies list

This follows on from
[Film Project - Part 1](https://gist.git.generalassemb.ly/katie/9c940b65fd83f9a6610e7d1886c6b553)
you need to finish step 1 and step 2, but you do not need to have done the extension.

### Step 1: Set up an API key

To use TMDB you'll need to get an API key.

- Go to [TMDb](https://www.themoviedb.org).
- You'll have to sign up first (it's free). However, it will ask for your phone number and address.
- Request an API key on your profile page (further instructions [here](https://developers.themoviedb.org/3/getting-started)).

Once you have your API key, include it in your app. Because you **never want to store app secrets in your repository**, you'll use the [`dotenv`](https://github.com/motdotla/dotenv) package to keep the API key in a local file.

#### Using `dotenv` to include your API key

Using `create-react-app` means that `dotenv` is already installed.

You just need to:
- Create a new file at the root of your project called `.env.local`.
- In your `.env.local` file, add the line `REACT_APP_TMDB_API_KEY=<Your TMDB API v3 KEY>`

To use that API key in your JavaScript, add the following line to your `TMDB.js` file:

```js
// Gets the API key from the .env.local file
export const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY
```

You can then import this API key from other files like this:

```js
import { TMDB, TMDB_API_KEY } from "./TMDB"
```

### Step 2: Fetch film details

When the user clicks to show more details about a film, instead of using the information from `TMDB.js` it should fetch that information from the API using `fetch` and store it in state in the `FilmLibrary` component.

1. Read the TMDB API documentation for looking up a Movie by its ID: https://developers.themoviedb.org/3/movies/get-movie-details

2. When the user clicks on one of the films, use the API to get the movie information. Check it's working with `console.log` before trying to use the results.

3. Use the result of the API call in the `FilmDetail` component

4. The API results include a tagline for most movies! Include the tagline in your `FilmDetail` before the overview.


### Step 3: Fetch the list of movies

_All these movies are from 2017... let's get some newer ones from the API!_

> **Warning:** For this step you will need to use `useEffect`. You may want to wait until it's covered in class before doing this step.

1. Read the documentation for discovering new movies using the TMDB API: https://developers.themoviedb.org/3/discover/movie-discover

2. Using `useEffect`, change your code so that after the `FilmLibrary` component renders for the first time (and only the first time), it fetches most popular 2022 movies and displays those in the list of movies.

**Hint:** You'll need `sort_by=popularity.desc`, and `primary_release_year=2022` in the URL of your request.

You should be able to delete all the films from `TMDB.js` now.

### Extensions

You're free to extend this film app as much as you want!

- The TMDB API only returns the first 20 movies, make it possible to load more and add them to the list. (You could add a 'load more' button at the end of the list)
- Make it possible to choose the release year for the movies list

The TMDB API only returns the first 20 movies, make it possible to load more and add them to the list. (You could add a 'load more' button at the end of the list)
Make it possible to choose the release year for the movies list
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
