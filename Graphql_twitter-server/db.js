const tweets=[
    { 
        id:"tweet"+1,
        body:"We have updated out Player Cards guidelines. Quick overview and discussion in out developer forums: ",
        date:"2020-08-09",
        AuthorId:"user"+1,
        StatsId:"stats"+11,
        read: true
    },
    { 
        id:"tweet"+2,
        body:"Updated Rules of the Road and Display Requirements: more clarity based on your feedback. Read more in our dev forum: ",
        date:"2015-03-25",
        AuthorId:"user"+2,
        StatsId:"stats"+21,
        read: false
    },
    { 
        id:"tweet"+3,
        body:"Thanks everyone! API v1 Retirement is complete. Please use API v1.1 instead. dev.twitter.com/blog/api-v1-is...",
        date:"2019-12-30",
        AuthorId:"user"+3,
        StatsId:"stats"+31,
        read: false 
    }
]

const users=[
    {
        id: "user"+1,
        username: "TofikManiyar",
        first_name: "Tofik",
        last_name: "Maniyar",
        full_name: "Tofik Maniyar",
        name: "Tofik Maniyar",
        avatar_url: "#"
    },
    {
        id: "user"+2,
        username: "Jeevan Sangave",
        first_name: "Jeevan",
        last_name: "Sangave",
        full_name: "jeevan Sangave",
        name: "Jeevan Sangave",
        avatar_url: "#"
    },
    {
        id: "user"+3,
        username: "Sam Mane",
        first_name: "Sam",
        last_name: "Mane",
        full_name: "Sam Mane",
        name: "Sam Mane",
        avatar_url: "#"
    }
]

const stats=[
    {
        id:"stat"+11,
        views: 12,
        likes: 10,
        retweets: 5,
        responses: 4
    },
    {
        id:"stat"+21,
        views: 120,
        likes: 100,
        retweets: 50,
        responses: 40
    },
    {
        id:"stat"+31,
        views: 1250,
        likes: 1050,
        retweets: 550,
        responses: 450
    }
]

const notifications=[
    {
        id:"note"+1,
        body:"Tofik Maniyar liked your tweet"
    },
    {
        id:"note"+2,
        body:"Jeevan Kumar retweeted"
    },
    {
        id:"note"+3,
        body:"Sam has shared your tweet"
    }
]

module.exports={
    tweets,
    users,
    notifications,
    stats,
}