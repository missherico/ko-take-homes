# "Movies Evan Likes" Take Home Project

## Objective

You've been given a JSON data file that contains a list of movies Evan likes and a bare-bones website to present the data in that file. The website currently looks like this:

![](http://d.pr/i/xCf3+)

You've been tasked with delivering the following requirements so as to make the information in the provided data file consumable by individuals other than Evan.

## Requirements

1. Display the list of movies from the data file on the page. Movies should be listed in alphabetical order.

    ![](http://d.pr/i/17cAz+)

1. When a user clicks on the title of the movie, they should be redirected to the Rotten Tomatoes page for that movie.

    This will require communication with an outside API. Since the Rotten Tomatoes API presently requires an API key, you can use the [Open Movie Database API][omdbapi] instead.

1. Display the year the movie was released next to the title.

    ![](http://d.pr/i/Wos8+)

1. Display the Rotten Tomatoes rating next to each movie title in the list. You should be able to get this information from the same API call from the previous requirement. This value should be displayed as a percentage.

    ![](http://d.pr/i/12mZx+)

    If using the [Open Movie Database API][omdbapi], the parameter you'll want is `tomatoMeter`.

1. In order to not spam the [Open Movie Database API][omdbapi], cache the responses in the browsers [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API). Do not make network requests to the API if there is a cached version of the response available.

    ![](http://d.pr/i/bOXC+)

1. Allow searching by title. Only filter results if 2 or more characters are entered in the search box. The list below should update when the value of the search box changes.

    ![](http://d.pr/i/22BQ+)

    Search should

    - be case-insensitive
    - exact match on any substring in `title`

1. Allow searching by decade. Decade options should be computed from the data file, *not hard-coded*. Selecting a decade should filter the list to show all movies from that decade.

    ![](http://d.pr/i/67Qj+)

    **NOTE**: This filter should be additive to the title search box above it.

    ![](http://d.pr/i/ZDx7+)

1. When a movie row is clicked, expand the row to show what Evan says about the movie (key: `evanSays`). Clicking the row again should collapse it.

    ![](http://d.pr/i/VaMR+)

    **NOTE**: Clicking on the title should still take you to the Rotten Tomatoes page, but ***should not*** expand the row before the user leaves the page.

1. All of the above features should look nice. Feel free to borrow styling from the screenshots or improve upon them with your own take. Do not worry about cross-browser compatibility; the only browser you need to concern yourself with is the latest version of Google Chrome.

## Resources Provided

You've been given a working [webpack][webpack] setup, a basic application structure, and a JSON data file. React is installed as well as [`axios`](https://github.com/mzabriskie/axios), which you should use for making your API requests.

Some additional helpful info:

- CSS files are loaded through [webpack][webpack] using [CSS Modules](https://github.com/css-modules/css-modules)
- [webpack][webpack] has been configured so that files inside `shared` folders resolve like they do in `node_modules`; this means that if you're deep in a folder heirarchy and need to require a file many levels up, you can do it without all the `../` if it's in a `shared` folder.

    Example:

    ```bash
    .
    └── a-folder
    |   └── b-folder
    |       └── c-folder
    |           └── d-folder
    |               └── e-folder
    |                   └── AnotherFile.js
    └── shared
        └── SomeFile.js
    ```

    ```javascript
    // AnotherFile.js

    import SomeFile from 'SomeFile'                           //=> yes
    // import SomeFile from '../../../../shared/SomeFile'     //=> no
    ```

## Success Criteria

1. Your solution delivers all the requirements above.
1. Your code is thoughtful, stylistically consistent, and easily extensible.
1. You submit your solution within 24-48 hours of receiving this assignment.

This list is not exhaustive, but it represents the bulk of what comprises a successful solution.

## Behind-the-scenes reasoning for this take home

Here's a short list of some of the reasoning for this challenge, as it pertains to the work that you would be doing day-to-day.

- Ability to get up-to-speed on an unknown project quickly. That's why we gave you starter code instead of having you submit something from scratch.
- Manipulating, filtering, and displaying data is a large part of what ko-search does. The solutions you provide to this problem will be very relavent to the day-to-day work you'll do on ko-search.

## Extra Credit

**NOTE** Skippig this section will ***not*** count against you: the features outlined here are entirely optional!

1. Add some unit tests! Use whatever libraries you want, but tests should run when

    ```
    npm test
    ```

    ...is invoked on the command line.

1. Add

## Have questions? Need help?

If you have any questions about the requirements for this take home, please don't hesitate to reach out to [Evan](evan.sherwood@kofile.us).

## Getting Started!

1. Install [NodeJS](https://nodejs.org/en/) 6.9.1 however you'd like.
1. Run

    ```bash
    npm install
    ```

1. Cut a new branch off of `master` to do your work on.
1. Run

    ```
    npm run dev
    ```

    You should now be able to access the app at http://localhost:8080 or http://localhost:8080/webpack-dev-server/

1. Push your code to a private (or public, your choice) repo on your Github account.
1. Add [@neezer][neezer] as a collaborator to your repository.
1. Open a Pull Request with your feature branch against `master`.
1. Tag [@neezer][neezer] in the PR description (or in a comment) so that [@neezer][neezer] knows to review it.

    If [@neezer][neezer] cannot provide feedback in the next 24 hours, he'll leave a comment on the PR letting you know so.

Good luck!

[neezer]: https://github.com/neezer "neezer"
[omdbapi]: https://www.omdbapi.com/ "The Open Movie Database API"
[webpack]: http://webpack.github.io/ "Webpack"
