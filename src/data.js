
const homeData = {
    title: "Food Corner",
    subtitle: "INDIAN FOOD AT A CLICK",
    image: "./images/food1"
}


const menuData = {
    title: "Our Menu",
    cards: [
        {
            id: 1,
            image: "../public/images/food2.jpg",
            name: "Chole Bhature",
            price: "$2.5"
        },
        {
            id: 2,
            image: "../public/images/food3.jpg",
            name: "Masala Dosa",
            price: "$2"
        },
        {
            id: 3,
            image: "../public/images/food4.jpg",
            name: "Butter Paneer",
            price: "$2"
        },
        {
            id: 4,
            image: "../public/images/food5.jpg",
            name: "Idll vada",
            price: "$2.3"
        },
        {
            id: 5,
            image: "../public/images/food6.jpg",
            name: "Gujrati Thali",
            price: "$4"
        },
        {
            id: 6,
            image: "../public/images/food7.jpg",
            name: "Rajasthani Thali",
            price: "$4"
        },
    ]
}

const aboutData = {
    title: "ABOUT US",
    subtitle: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec porta, ligula a maximusegestas, neque mi maximus nisi,
                sed bibendum nibh felis at neque.Integer ultrices arcu libero,
                nec maximus felis tempus ac. Nulla vehicula nisl magna,
                quis efficitur leo faucibus et. Sed sollicitudin orci enim,
                ac vestibulum diam venenatis vel. Sed non fermentum nisi. Praesent
                varius purus venenatis libero malesuada, et aliquam eros rutrum.
                Nam vulputate malesuada porttitor.Fusce placerat imperdiet 
                libero sit amet tempor.`,
    image: "./images/food8"
}



const contactData = {
    title: "Contact Us",
    image: "./images/food7.jpg"
}

const inputs = [
    {
        type:"input",
        label: "Full Name",
        placeHolder: "Enter full name"
    },
    {
        type:"input",
        label: "Email",
        placeHolder: "Enter email"
    },
    {
        type:"textarea",
        label: "Message",
        placeHolder: "Enter message"
    },
]

const buttons = {
    contact: "Send Message",
    home: "ORDER NOW"
}

const icons =[
    {
        instagram : "../public/images/instagram.svg"
    },
    {
        facebook : "../public/images/facebook.svg"
    },
    {
        twitter : "../public/images/twitter.svg"
    },
    {
        linkedin : "../public/images/linkedin.svg"
    },
    
]


export {
    homeData,
    menuData,
    aboutData,
    contactData,
    inputs,
    buttons,
    icons
}