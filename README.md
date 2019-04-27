# Sport Meet Server
REST API for Sport Meet Server

# User
Register a user
* Link - https://meetsportserver.herokuapp.com/user/signup
* Request - POST
* Required Fields - name(string), email(string), password(string)

Login
* Link - https://meetsportserver.herokuapp.com/user/login
* Request - POST
* Required Fields - email(string), password(string)

# Feed
Create a feed
* Link - https://meetsportserver.herokuapp.com/feed
* Request - POST
* Required Fields - favoriteSport(string), level(string), city(string), goal(string)

Find all feeds
* Link - https://meetsportserver.herokuapp.com/feed
* Request - GET

Filter feed by city
* Link - https://meetsportserver.herokuapp.com/feed?city:bronx
* Request - GET
* Params - Enter the name of the city