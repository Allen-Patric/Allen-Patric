var Hipster = {
    name: "Harker",
    age: 23,
    favoriteMovies: ['memento','fightclub','before sunrise', 'the truman show'],
    mostobscurebandtaste: 'Ukranian sign language folk music',
    artclout: function()
    {
        console.log(this.mostobscurebandtaste)
    },
    hipsterfriends: [
        {
            name: "Nathan",
            age: 24,
            favoriteMovie: [
                {
                    
                    Name: 'Memento',
                    Actor: "Guy Pierce",
                    Rottentomatoe: 92,
                    ispretentious = true
                },
                {
                    othergoodguypiercemovies: [
                        console.log("None"),
                        codeisfunny=false,
                        didipass="Not sure" 
                    ]
                },
            ]
        },
        {
            hipsterfriendshangoutspots:
            [
                {
                    coffeeShops: ['noir','nostalgia','coffegarden','beansandbrew' ],
                    smokerfriendly = true,
                    cultured = false,
                    iscool = function()
                    {
                        console.log(this.hipsterfriends.favoriteMovie.ispretentious)
                    }
                }
            ]
        }
    ]
}
var otherHipster = Hipster
otherHipster.name = "Fabio"
var literallyanybarista = Hipster 
literallyanybarista.name = "whocares"