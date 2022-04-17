// Ejemplo 1: Diagramas en objetos de JS
const repo = {
    name: "LaunchX",
    author: "Alan Jesus @aljesbacarre",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())

   // Ejemplo 2: Twitter
const twitter_user = {
    name: "user name",
    nickname: "@username",
    description: "biography",
    location: "Country",
    url: "your website",
    creation_aniversary: "date",
    followers: 1000,
    followings: 1000,
    tweets: 1000,
    tweets_answers: 1000,
    getTotalTweets: function(){
      return this.tweets + this.tweets_answers
    },
    getGeneralInfo: function(){
      return `This profile belongs to ${this.name} was created by ${this.nickname}`
    }
   }
   
   console.log("Nombre del propetario de la cuenta:" + twitter_user.getGeneralInfo)
   console.log("Total de Tweets:" + twitter_user.getTotalTweets())
   console.log(twitter_user.getGeneralInfo())

// Ejemplo 2: Instagram
const instagram_user = {
  name: "user name",
  nickname: "@username",
  description: "biography",
  url: "your website",
  followers: 1000,
  followings: 1000,
  publications: 1000,
  stories: 1000,
  getTotalpublications: function(){
    return this.publications + this.stories
  },
  getGeneralInfo: function(){
    return `This profile belongs to ${this.name} was created by ${this.nickname}`
  }
 }
 
 console.log("Nombre del propetario de la cuenta:" + instagram_user.getGeneralInfo)
 console.log("Total de publicaciones:" + instagram_user.getTotalpublications())
 console.log(instagram_user.getGeneralInfo())

// Ejemplo 3: Behance
const behance_user = {
  name: "user name",
  nickname: "@username",
  description: "biography",
  location: "Country",
  url: "your website",
  followers: 1000,
  followings: 1000,
  project_views: 1724,
  ratings: 27,
  projects: 1000,
  getTotalproject_views: function(){
    return this.project_views + this.ratings
  },
  getGeneralInfo: function(){
    return `This profile belongs to ${this.name} was created by ${this.nickname}`
  }
 }
 
 console.log("Nombre del propetario de la cuenta:" + behance_user.getGeneralInfo)
 console.log("Total de Tweets:" + behance_user.getTotalTweets())
 console.log(behance_user.getGeneralInfo())
   