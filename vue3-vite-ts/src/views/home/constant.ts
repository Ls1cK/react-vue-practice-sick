import { getUuid } from '@/utils/UUID/getUUID'

class Card {
  title: string
  author: string
  routePath: string
  img: string
  id: string
  constructor(title: string, routePath: string, author: string, img: string) {
    this.title = title;
    this.routePath = routePath;
    this.author = author;
    this.img = img;
    this.id = getUuid()
  }
}

export type objCard = {
  title: string,
  author: string,
  routePath: string,
  img: string,
  id: string,
}

export const indexCards: objCard[] = [
  new Card(
    'Vue.js', 
    '/error', 
    'Chris', 
    'https://vuejs.org//images/logo.png'
  ),
  new Card(
    'React.js', 
    'https://facebook.github.io/react/', 
    'Tim',
    'https://daynin.github.io/clojurescript-presentation/img/react-logo.png'
  ),
  new Card(
    'Angular.js', 
    'https://angularjs.org/', 
    'Sam', 
    'https://angularjs.org/img/ng-logo.png'
  ),
  new Card(
    'Ember.js', 
    'http://emberjs.com/', 
    'Rachel',
    'http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200'
  ),
  new Card(
    'Meteor.js', 
    'https://www.meteor.com/', 
    'Chris', 
    'http://hacktivist.in/introduction-to-nodejs-mongodb-meteor/img/meteor.png'
  ),
  new Card(
    'Aurelia', 
    'http://aurelia.io/', 
    'Tim',
    'https://cdn.auth0.com/blog/aurelia-logo.png'
  ),
  new Card(
    'Node.js', 
    'https://nodejs.org/en/', 
    'A. A. Ron',
    'https://code-maven.com/img/node.png'
  ),
  new Card(
    'Pusher', 
    'https://pusher.com/', 
    'Alex', 
    'https://avatars1.githubusercontent.com/u/739550?v=3&s=400'
  ),
  new Card(
    'Feathers.js', 
    'http://feathersjs.com/', 
    'Chuck',
    'https://cdn.worldvectorlogo.com/logos/feathersjs.svg'
  ),
]
