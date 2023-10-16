
const artists = [
    {
        Name: 'Post Malone',
        albums: ["AUSTIN","Hollywoods Bleeding","Twelve Carat Toothache","Stoney"],
        releasedrecently: true,
    },
    {
        Name: 'Kanye West',
        albums: ["Graduation","The College Dropout","Donda","The Life of Pablo"],
        releasedrecently: false,
    },
    {
        Name: 'Tyler, The Creator',
        albums: ["Flower Boy","IGOR","CALL ME IF YOU GET LOST"],
        releasedrecently: true,
    },
];

artists.forEach((artists) => console.log(artists.Name));
const released = artists.filter((artist) => artist.releasedrecently !== true);
console.log(released)
artists.forEach((artist) => artist.albums.forEach((album) => console.log(album)));