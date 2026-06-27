const products = [
    {
        id: 1,
        title: "Eysen Double Layer T-Shirt",
        price: "£45",
        description: "For the ones still finding their way. Statement graphics, clean layering, and a reminder that pressure creates something stronger.",
        colors: [
            {
                name: "Black",
                mainImage: "images/ES1.png",
                thumbnails: [
                    "images/ES1_BLACK_2.png",
                    "images/ES1_BLACK_3.png",
                    "images/ES1_BLACK_4.png"
                ],
                sizes: ["S", "M", "L", "XL", "XXL"]
            },
            {
                name: "White",
                mainImage: "images/ES1_WHITE_1.png",
                thumbnails: [
                    "images/ES1_WHITE_2.png",
                    "images/ES1_WHITE_3.png",
                    "images/ES1_WHITE_4.png"
                ],
                sizes: ["S", "M", "L", "XL", "XXL"]
            }
        ]
    },
    {
        id: 2,
        title: "Eysen Collared T-shirt",
        price: "£60.99",
        description: "Premium collar T-shirt featuring a striking monochrome mask graphic, contrast white collar accents, and a minimalist chest logo-crafted for a bold, contemporary streetwear aesthetic.",
        colors: [
            {
                name: "Black",
                mainImage: "images/ES2.png",
                thumbnails: [
                    "images/ES2_BLACK_2.png",
                    "images/ES2_BLACK_3.png",
                    "images/ES2_BLACK_4.png"
                ],
                sizes: ["S", "M", "L", "XL"]
            },
            {
                name: "Red",
                mainImage: "images/ES2_RED.png",
                thumbnails: [
                    "images/ES2_RED_2.png",
                    "images/ES2_RED_3.png",
                    "images/ES2_RED_4.png"
                ],
                sizes: ["S", "M", "L", "XL"]
            },
            {
                name: "Green",
                mainImage: "images/ES2_GREEN.png",
                thumbnails: [
                    "images/ES2_GREEN_2.png",
                    "images/ES2_GREEN_3.png",
                    "images/ES2_GREEN_4.png"
                ],
                sizes: ["S", "M", "L", "XL"]
            }
        ]
    },
    {
        id: 3,
        title: "Eysen Long sleeve Sweatshirt",
        price: "£85",
        description: ".",
        colors: [
            {
                name: "Black",
                mainImage: "images/ES3_BLACK_1.png",
                thumbnails: [
                    "images/ES3_BLACK_2.png",
                    "images/ES3_BLACK_3.png"
                ],
                sizes: ["S", "M", "L", "XL", "XXL"]
            },

            {
                name: "Red",
                mainImage: "images/ES3_RED_1.png",
                thumbnails: [
                    "images/ES3_RED_2.png",
                    "images/ES3_RED_3.png"
                ],
                sizes: ["S", "M", "L", "XL", "XXL"]
            }
        ]
    },
    {
        id: 4,
        title: "Eysen Casual T-shirt",
        price: "£38",
        description: "Black graphic tee featuring a distressed abstract print and vintage-inspired finish. Designed with an oversized streetwear silhouette, soft cotton feel, and bold monochrome artwork that adds character to any casual fit.",
        colors: [
            {
                name: "Black",
                mainImage: "images/ES4.png",
                thumbnails: [
                    "images/ES4_1.png",
                    "images/ES4_2.png",
                    "images/ES4_3.png"
                ],
                sizes: ["S", "M", "L", "XL", "XXL"]
            }
        ]
    },
    {
        id: 5,
        title: "Eysen Rugby T-shirt",
        price: "£96.50",
        description: "A bold striped rugby long sleeve T-shirt built for standing out. Loud visuals, heavyweight energy, and a reminder to keep moving even when life stacks up.",
        colors: [
            {
                name: "Yellow",
                mainImage: "images/ES5_YELLOW_1.png",
                thumbnails: [
                    "images/ES5_YELLOW_2.png",
                    "images/ES5_YELLOW_3.png",
                    "images/ES5_YELLOW_4.png",
                ],
                sizes: ["S", "M", "L", "XL", "XXL"]
            },
            {
                name: "RED",
                mainImage: "images/ES5_RED_1.png",
                thumbnails: [
                    "images/ES5_RED_2.png",
                    "images/ES5_RED_3.png",
                    "images/ES5_RED_4.png",
                ],
                sizes: ["S", "M", "L", "XL", "XXL"]
            },
            {
                name: "GREEN",
                mainImage: "images/ES5_GREEN_1.png",
                thumbnails: [
                    "images/ES5_GREEN_2.png",
                    "images/ES5_GREEN_3.png",
                    "images/ES5_GREEN_4.png",
                ],
                sizes: ["S", "M", "L", "XL", "XXL"]
            }
        ]
    },
    {
        id: 6,
        title: "Eysen Quarter-zip T-shirt",
        price: "£80",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
        colors: [
            {
                name: "GREEN",
                mainImage: "images/ES6_GREEN_1.png",
                thumbnails: [
                    "images/ES6_GREEN_2.png",
                    "images/ES6_GREEN_3.png",
                ],
                sizes: ["S", "M", "L", "XL", "XXL"]
            },
            {
                name: "BROWN",
                mainImage: "images/ES6_BROWN_1.png",
                thumbnails: [
                    "images/ES6_BROWN_2.png",
                    "images/ES6_BROWN_3.png",
                ],
                sizes: ["S", "M", "L", "XL", "XXL"]
            }
        ]
    },
    {
        id: 7,
        title: "Men Casual Short Sleeve Polo",
        price: "£60",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
        colors: [
            {
                name: "Blue",
                mainImage: "images/product7_blue_1.jpg",
                thumbnails: [],
                sizes: ["S", "M", "L", "XL", "XXL"]
            }
        ]
    },
    {
        id: 8,
        title: "Men Leaf Pattern T-Shirt",
        price: "£70",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
        colors: [
            {
                name: "Green",
                mainImage: "images/product8_green_1.jpg",
                thumbnails: [],
                sizes: ["S", "M", "L", "XL", "XXL"]
            }
        ]
    }
];
