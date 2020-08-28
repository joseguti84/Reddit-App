# RedditApp

This app is a simple Reddit client that shows the top 50 entries from Reddit.    

To get the top entries from Reddit it's using the Reddit API. The endpoint is the following:

`https://www.reddit.com/r/all/top.json`

After obtain the entries from json, I'll display them in the Sidebar on the left side.

When the user click on anyone, the entry content is display on the right side and marked it as read. 

Also, the user can dismiss a particular entry or dismiss all entries from the list.

## Public URL

The application is hosted on AWS using S3 static web hosting:

`http://reddit-site.s3-website-us-east-1.amazonaws.com/`

## Technical information

The application is built on Angular 10. 

### Local server

Run `ng serve` and then go to `http://localhost:4200/` in your browser client. The app will automatically reload if you change any of the source files.

### App Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests.
