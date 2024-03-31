import { colors } from "./colors"

export const playlists = [
    {
        id: '1',
        albumId: 1,
        title: "Teenagers Rock",
        color: colors.yellow,
        cover:
            "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/rock-hits-mp3-cd-album-cover-template-design-2d9456fb8f1721d5a2f5fa7b78a6f886_screen.jpg?ts=1595860033",
        artists: ["Skillet", "PXNDX", "Obus", "Paramore", "Thirty Seconds to Mars"],
    },
    {
        id: '2',
        albumId: 2,
        title: "Reggae And Chill",
        color: colors.orange,
        cover:
            "https://i.scdn.co/image/ab67706c0000da84b45d4b6c1b0a80ebfeafae54",
        artists: ["Bob Marley", "Damian Marley", "Stephen Marley", "Shaggy"],
    },
    {
        id: '3',
        albumId: 3,
        title: "Old School Reggaeton",
        color: colors.red,
        cover:
            "https://i.scdn.co/image/ab67616d0000b2739cc5f428e38ede9d45b4d552",
        artists: ["Don Omar", "Wisin Y Yandel", "RKM & Ken-Y",],
    },
]

//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------


export const songs = [
    //playlist 1 : Teenagers Rock

    {
        "id": 1,
        "albumId": 1,
        "title": "Awake And Alive",
        "image": `https://d1csarkz8obe9u.cloudfront.net/posterpreviews/rock-hits-mp3-cd-album-cover-template-design-2d9456fb8f1721d5a2f5fa7b78a6f886_screen.jpg?ts=1595860033`,
        "artists": ["Skillet"],
        "album": "Teengaers Rock",
        "duration": "3:42"
    },
    {
        "id": 2,
        "albumId": 1,
        "title": "The Kill",
        "image": `https://d1csarkz8obe9u.cloudfront.net/posterpreviews/rock-hits-mp3-cd-album-cover-template-design-2d9456fb8f1721d5a2f5fa7b78a6f886_screen.jpg?ts=1595860033`,
        "artists": ["Thirty Seconds To Mars"],
        "album": "Teengaers Rock",
        "duration": "5:30"
    },
    {
        "id": 3,
        "albumId": 1,
        "title": "Ignorance",
        "image": `https://d1csarkz8obe9u.cloudfront.net/posterpreviews/rock-hits-mp3-cd-album-cover-template-design-2d9456fb8f1721d5a2f5fa7b78a6f886_screen.jpg?ts=1595860033`,
        "artists": ["Paramore"],
        "album": "Teengaers Rock",
        "duration": "3:40"
    },
    {
        "id": 4,
        "albumId": 1,
        "title": "Narcicista Por Excelencia",
        "image": `https://d1csarkz8obe9u.cloudfront.net/posterpreviews/rock-hits-mp3-cd-album-cover-template-design-2d9456fb8f1721d5a2f5fa7b78a6f886_screen.jpg?ts=1595860033`,
        "artists": ["PXNDX"],
        "album": "Teengaers Rock",
        "duration": "3:51"
    },

    //playlist 2: Reggae And Chill

    {
        "id": 1,
        "albumId": 2,
        "title": "Praise Jah In The Moonlight",
        "image": `https://i.scdn.co/image/ab67706c0000da84b45d4b6c1b0a80ebfeafae54`,
        "artists": ["YG Marley"],
        "album": "Reggae And Chill",
        "duration": "4:23"
    },
    {
        "id": 2,
        "albumId": 2,
        "title": "Jamming",
        "image": `https://i.scdn.co/image/ab67706c0000da84b45d4b6c1b0a80ebfeafae54`,
        "artists": ["Bob Marley"],
        "album": "Reggae And Chill",
        "duration": "3:33"
    },
    {
        "id": 3,
        "albumId": 2,
        "title": "Rasta Love",
        "image": `https://i.scdn.co/image/ab67706c0000da84b45d4b6c1b0a80ebfeafae54`,
        "artists": ["Protoje", "Ky-Mani Marley"],
        "album": "Reggae And Chill",
        "duration": "3:50"
    },
    {
        "id": 4,
        "albumId": 2,
        "title": "Medication",
        "image": `https://i.scdn.co/image/ab67706c0000da84b45d4b6c1b0a80ebfeafae54`,
        "artists": ["Damian Marley", "Stephen Marley"],
        "album": "Reggae And Chill",
        "duration": "4:26"
    },
    {
        "id": 5,
        "albumId": 2,
        "title": "Angel",
        "image": `https://i.scdn.co/image/ab67706c0000da84b45d4b6c1b0a80ebfeafae54`,
        "artists": ["Shaggy", "Rayvon"],
        "album": "Reggae And Chill",
        "duration": "3:55"
    },

        //playlist 3: Old School Reggaeton

        {
            "id": 1,
            "albumId": 3,
            "title": "Ojitos Chiquititos",
            "image": `https://i.scdn.co/image/ab67616d0000b2739cc5f428e38ede9d45b4d552`,
            "artists": ["Don Omar"],
            "album": "Old School Reggaeton",
            "duration": "3:49"
        },
        {
            "id": 2,
            "albumId": 3,
            "title": "Nadie Como Tú",
            "image": `https://i.scdn.co/image/ab67616d0000b2739cc5f428e38ede9d45b4d552`,
            "artists": ["Don Omar", "Wisin Y Yandel"],
            "album": "Old School Reggaeton",
            "duration": "3:43"
        },
        {
            "id": 3,
            "albumId": 3,
            "title": "Me Estas Tentando",
            "image": `https://i.scdn.co/image/ab67616d0000b2739cc5f428e38ede9d45b4d552`,
            "artists": ["Wisin Y Yandel"],
            "album": "Old School Reggaeton",
            "duration": "3:52"
        },
        {
            "id": 4,
            "albumId": 3,
            "title": "Down",
            "image": `https://i.scdn.co/image/ab67616d0000b2739cc5f428e38ede9d45b4d552`,
            "artists": ["RKM & Ken-Y"],
            "album": "Old School Reggaeton",
            "duration": "3:45"
        },
        {
            "id": 5,
            "albumId": 3,
            "title": "Me Matas",
            "image": `https://i.scdn.co/image/ab67616d0000b2739cc5f428e38ede9d45b4d552`,
            "artists": ["RKM & Ken-Y"],
            "album": "Old School Reggaeton",
            "duration": "3:16"
        },
]