import React, { createContext, useReducer } from 'react';

const initialState = {
    transactions: [

        { "brand": "Nike", "id": 1, "qunatity": 1, "price": 200, "Category": "Mens", "Ptype": "Men-boot", "src": "/mens/hf1.jpg", "name": "Men  Boot" },
        { "brand": "Nike", "id": 2, "qunatity": 1, "price": 1200, "Category": "Mens", "Ptype": "Men-boot", "src": "/mens/hf2.jpg", "name": "Men  Boot" },
        { "brand": "Nike", "id": 3, "qunatity": 1, "price": 700, "Category": "Mens", "Ptype": "Men-boot", "src": "/mens/hf3.jpg", "name": "Men  Boot" },
        { "brand": "Nike", "id": 4, "qunatity": 1, "price": 900, "Category": "Mens", "Ptype": "Men-boot", "src": "/mens/hf4.jpg", "name": "Men  Boot" },
        { "brand": "Nike", "id": 5, "qunatity": 1, "price": 3400, "Category": "Mens", "Ptype": "Men-boot", "src": "/mens/hf5.jpg", "name": "Men  Boot" },
        { "brand": "Nike", "id": 6, "qunatity": 1, "price": 1100, "Category": "Mens", "Ptype": "Men-boot", "src": "/mens/hf6.jpg", "name": "Men  Boot" },
        { "brand": "Nike", "id": 7, "qunatity": 1, "price": 780, "Category": "Mens", "Ptype": "Men-boot", "src": "/mens/hf7.jpg", "name": "Men  Boot" },
        { "brand": "Nike", "id": 8, "qunatity": 1, "price": 2300, "Category": "Mens", "Ptype": "Men-boot", "src": "/mens/hf8.jpg", "name": "Men  Boot" },

        { "brand": "Soft", "id": 10, "qunatity": 1, "price": 560, "Category": "Mens", "Ptype": "Men-Slipper", "src": "/mens/hsm2.jpg", "name": "Men  Sliper" },
        { "brand": "Soft", "id": 12, "qunatity": 1, "price": 1370, "Category": "Mens", "Ptype": "Men-Slipper", "src": "/mens/hsm4.jpg", "name": "Men  Sliper" },
        { "brand": "Soft", "id": 13, "qunatity": 1, "price": 1400, "Category": "Mens", "Ptype": "Men-Slipper", "src": "/mens/hsm5.jpg", "name": "Men  Sliper" },
        { "brand": "Soft", "id": 14, "qunatity": 1, "price": 500, "Category": "Mens", "Ptype": "Men-Slipper", "src": "/mens/hsm6.jpg", "name": "Men  Sliper" },
        { "brand": "Soft", "id": 15, "qunatity": 1, "price": 500, "Category": "Mens", "Ptype": "Men-Slipper", "src": "/mens/hsm7.jpg", "name": "Men  Sliper" },
        { "brand": "Soft", "id": 16, "qunatity": 1, "price": 500, "Category": "Mens", "Ptype": "Men-Slipper", "src": "/mens/hsm8.jpg", "name": "Men  Sliper" },
        { "brand": "Soft", "id": 17, "qunatity": 1, "price": 500, "Category": "Mens", "Ptype": "Men-Slipper", "src": "/mens/hsm9.jpg", "name": "Men  Sliper" },
        { "brand": "Soft", "id": 18, "qunatity": 1, "price": 500, "Category": "Mens", "Ptype": "Men-Slipper", "src": "/mens/hsm10.jpg", "name": "Men  Sliper" },
        { "brand": "Soft", "id": 19, "qunatity": 1, "price": 500, "Category": "Mens", "Ptype": "Men-Slipper", "src": "/mens/hsm11.jpg", "name": "Men  Sliper" },
        { "brand": "Soft", "id": 20, "qunatity": 1, "price": 500, "Category": "Mens", "Ptype": "Men-Slipper", "src": "/mens/hsm12.jpg", "name": "Men  Sliper" },
        { "brand": "Soft", "id": 21, "qunatity": 1, "price": 500, "Category": "Mens", "Ptype": "Men-Slipper", "src": "/mens/hsm13.jpg", "name": "Men  Sliper" },
        { "brand": "Soft", "id": 22, "qunatity": 1, "price": 500, "Category": "Mens", "Ptype": "Men-Slipper", "src": "/mens/hsm14.jpg", "name": "Men  Sliper" },
        { "brand": "Soft", "id": 23, "qunatity": 1, "price": 500, "Category": "Mens", "Ptype": "Men-Slipper", "src": "/mens/hsm15.jpg", "name": "Men  Sliper" },
        { "brand": "Soft", "id": 24, "qunatity": 1, "price": 500, "Category": "Mens", "Ptype": "Men-Slipper", "src": "/mens/hsm16.jpg", "name": "Men  Sliper" },
        { "brand": "Soft", "id": 25, "qunatity": 1, "price": 500, "Category": "Mens", "Ptype": "Men-Slipper", "src": "/mens/hsm17.jpg", "name": "Men  Sliper" },
        { "brand": "Soft", "id": 26, "qunatity": 1, "price": 500, "Category": "Mens", "Category": "Mens", "Ptype": "Men-Slipper", "src": "/mens/hsm18.jpg", "name": "Men  Sliper" },


        { "brand": "Ozi", "id": 27, "qunatity": 1, "price": 3500, "Category": "Mens", "Ptype": "Men-Snikers", "src": "/mens/b.png", "name": "Men  Sneakers" },
        { "brand": "Ozi", "id": 28, "qunatity": 1, "price": 4500, "Category": "Mens", "Ptype": "Men-Snikers", "src": "/mens/b1.png", "name": "Men  Sneakers" },
        { "brand": "Ozi", "id": 29, "qunatity": 1, "price": 5500, "Category": "Mens", "Ptype": "Men-Snikers", "src": "/mens/b2.png", "name": "Men  Sneakers" },
        { "brand": "Ozi", "id": 30, "qunatity": 1, "price": 5700, "Category": "Mens", "Ptype": "Men-Snikers", "src": "/mens/b3.png", "name": "Men  Sneakers" },
        { "brand": "Ozi", "id": 31, "qunatity": 1, "price": 1599, "Category": "Mens", "Ptype": "Men-Snikers", "src": "/mens/b4.png", "name": "Men  Sneakers" },
        { "brand": "Ozi", "id": 32, "qunatity": 1, "price": 500, "Category": "Mens", "Ptype": "Men-Snikers", "src": "/mens/b5.png", "name": "Men  Sneakers" },
        { "brand": "Ozi", "id": 33, "qunatity": 1, "price": 500, "Category": "Mens", "Ptype": "Men-Snikers", "src": "/mens/b6.png", "name": "Men  Sneakers" },
        { "brand": "Ozi", "id": 34, "qunatity": 1, "price": 500, "Category": "Mens", "Ptype": "Men-Snikers", "src": "/mens/b7.png", "name": "Men  Sneakers" },
        { "brand": "Ozi", "id": 35, "qunatity": 1, "price": 500, "Category": "Mens", "Ptype": "Men-Snikers", "src": "/mens/b8.png", "name": "Men  Sneakers" },
        { "brand": "Ozi", "id": 36, "qunatity": 1, "price": 500, "Category": "Mens", "Ptype": "Men-Snikers", "src": "/mens/b9.png", "name": "Men  Sneakers" },



        { "brand": "Neura", "id": 41, "qunatity": 1, "price": 900, "Category": "Women", "Ptype": "Women-Heels", "src": "/women/hh1.jpg", "name": "Women Heel" },
        { "brand": "Neura", "id": 42, "qunatity": 1, "price": 900, "Category": "Women", "Ptype": "Women-Heels", "src": "/women/hh2.jpg", "name": "Women Heel" },
        { "brand": "Neura", "id": 43, "qunatity": 1, "price": 900, "Category": "Women", "Ptype": "Women-Heels", "src": "/women/hh3.jpg", "name": "Women Heel" },
        { "brand": "Neura", "id": 44, "qunatity": 1, "price": 900, "Category": "Women", "Ptype": "Women-Heels", "src": "/women/hh4.jpg", "name": "Women Heel" },
        { "brand": "Neura", "id": 45, "qunatity": 1, "price": 900, "Category": "Women", "Ptype": "Women-Heels", "src": "/women/hh5.jpg", "name": "Women Heel" },
        { "brand": "Neura", "id": 46, "qunatity": 1, "price": 900, "Category": "Women", "Ptype": "Women-Heels", "src": "/women/hh6.jpg", "name": "Women Heel" },
        { "brand": "Neura", "id": 47, "qunatity": 1, "price": 900, "Category": "Women", "Ptype": "Women-Heels", "src": "/women/hh7.jpg", "name": "Women Heel" },
        { "brand": "Neura", "id": 48, "qunatity": 1, "price": 900, "Category": "Women", "Ptype": "Women-Heels", "src": "/women/hh8.jpg", "name": "Women Heel" },

        { "brand": "Neura", "id": 49, "qunatity": 1, "price": 900, "Category": "Women", "Ptype": "Women-Sandel", "src": "/women/hw1.jpg", "name": "Women Sandel" },
        { "brand": "Neura", "id": 50, "qunatity": 1, "price": 900, "Category": "Women", "Ptype": "Women-Sandel", "src": "/women/hw2.jpg", "name": "Women Sandel" },
        { "brand": "Neura", "id": 51, "qunatity": 1, "price": 900, "Category": "Women", "Ptype": "Women-Sandel", "src": "/women/hw3.jpg", "name": "Women Sandel" },
        { "brand": "Neura", "id": 52, "qunatity": 1, "price": 900, "Category": "Women", "Ptype": "Women-Sandel", "src": "/women/hw4.jpg", "name": "Women Sandel" },
        { "brand": "Neura", "id": 53, "qunatity": 1, "price": 900, "Category": "Women", "Ptype": "Women-Sandel", "src": "/women/hw5.jpg", "name": "Women Sandel" },
        { "brand": "Neura", "id": 54, "qunatity": 1, "price": 900, "Category": "Women", "Ptype": "Women-Sandel", "src": "/women/hw6.jpg", "name": "Women Sandel" },
        { "brand": "Neura", "id": 55, "qunatity": 1, "price": 900, "Category": "Women", "Ptype": "Women-Sandel", "src": "/women/hw7.jpg", "name": "Women Sandel" },
        { "brand": "Neura", "id": 56, "qunatity": 1, "price": 900, "Category": "Women", "Ptype": "Women-Sandel", "src": "/women/hw8.jpg", "name": "Women Sandel" },

        { "brand": "Neura", "id": 57, "qunatity": 1, "price": 900, "Category": "Women", "Ptype": "Women-Pumps", "src": "/women/pp1.jpg", "name": "Women Pumps" },
        { "brand": "Neura", "id": 58, "qunatity": 1, "price": 900, "Category": "Women", "Ptype": "Women-Pumps", "src": "/women/pp2.jpg", "name": "Women Pumps" },
        { "brand": "Neura", "id": 59, "qunatity": 1, "price": 900, "Category": "Women", "Ptype": "Women-Pumps", "src": "/women/pp3.jpg", "name": "Women Pumps" },
        { "brand": "Neura", "id": 60, "qunatity": 1, "price": 900, "Category": "Women", "Ptype": "Women-Pumps", "src": "/women/pp4.jpg", "name": "Women Pumps" },
        { "brand": "Neura", "id": 61, "qunatity": 1, "price": 900, "Category": "Women", "Ptype": "Women-Pumps", "src": "/women/pp5.jpg", "name": "Women Pumps" },
        { "brand": "Neura", "id": 62, "qunatity": 1, "price": 900, "Ptype": "Women-Pumps", "src": "/women/pp6.jpg", "name": "Women Pumps" },
        { "brand": "Neura", "id": 63, "qunatity": 1, "price": 900, "Category": "Women", "Ptype": "Women-Pumps", "src": "/women/pp7.jpg", "name": "Women Pumps" },
        { "brand": "Neura", "id": 64, "qunatity": 1, "price": 900, "Category": "Women", "Ptype": "Women-Pumps", "src": "/women/pp8.jpg", "name": "Women Pumps" },



        { "brand": "Fabii", "id": 65, "qunatity": 1, "Category": "Childs", "price": 500, "src": "/childs/c1.jpg", "name": "Child Joger" },
        { "brand": "Fabii", "id": 66, "qunatity": 1, "Category": "Childs", "price": 980, "src": "/childs/c2.jpg", "name": "Child Joger" },
        { "brand": "Fabii", "id": 67, "qunatity": 1, "Category": "Childs", "price": 230, "src": "/childs/c3.jpg", "name": "Child Joger" },
        { "brand": "Fabii", "id": 68, "qunatity": 1, "Category": "Childs", "price": 540, "src": "/childs/c4.jpg", "name": "Child Joger" },
        { "brand": "Fabii", "id": 69, "qunatity": 1, "Category": "Childs", "price": 1200, "src": "/childs/c5.jpg", "name": "Child Joger" },
        { "brand": "Fabii", "id": 70, "qunatity": 1, "Category": "Childs", "price": 1700, "src": "/childs/c6.jpg", "name": "Child Joger" },
        { "brand": "Fabii", "id": 71, "qunatity": 1, "Category": "Childs", "price": 2000, "src": "/childs/c7.jpg", "name": "Child Joger" },
        { "brand": "Fabii", "id": 72, "qunatity": 1, "Category": "Childs", "price": 6700, "src": "/childs/c8.jpg", "name": "Child Joger" },

    ],
    badge: [],
    cart: [],
    tprice: []

}
export const GlobalContext = createContext(initialState);

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            

            let totalpriceAllF = 0
           
            state.cart.forEach((cartitem) => {
                totalpriceAllF +=  +cartitem.CartTotalprice 

            })
           
            return {
                ...state,
                tprice: totalpriceAllF,
                cart: state.cart.filter(transaction => transaction.id !== action.payload),
            }
        case 'ADD_TRANSACTION':
       
            return {
                ...state,
                cart: [action.payload, ...state.cart]
            }
        case 'UPDATE':
            return {
                ...state,
                badge: [action.payload]
            }
        case 'PRICE':
            return {
                ...state,
                tprice: action.payload
            }
        case 'QUNATITY':
            state = JSON.parse(JSON.stringify(state));
            const cartitem = state.cart.find(transaction => transaction.id == action.payload)
            cartitem.qunatity++;

            cartitem.CartTotalprice = (+cartitem.price) * (+cartitem.qunatity)
            let totalpriceAll = 0
            state.cart.forEach((cartitem) => {
                totalpriceAll +=  +cartitem.CartTotalprice 

            })
            return {
                ...state,
                tprice: totalpriceAll
            }
        case 'MINUSQUNATITY':
            state = JSON.parse(JSON.stringify(state));

            const Minuscart = state.cart.find(transaction => transaction.id == action.payload)
            if (Minuscart.qunatity <= 1) {
                Minuscart.qunatity = 1
            } else {
                Minuscart.qunatity -= 1;
            }
            Minuscart.CartTotalprice = (+Minuscart.price) * (+Minuscart.qunatity)
            let totalpriceAllN = 0
            state.cart.forEach((cartitem) => {
                totalpriceAllN +=  +cartitem.CartTotalprice 

            })            
            return {
                ...state,
                tprice: totalpriceAllN
            }
           
        default:
            return state;
    }   
}

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);



    function delTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {

        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    function updateBadge(transaction) {

        dispatch({
            type: 'UPDATE',
            payload: transaction
        })
    }
    function price(transaction) {

        dispatch({
            type: 'PRICE',
            payload: transaction
        })
    }
    function qunatityset(transaction) {

        dispatch({
            type: 'QUNATITY',
            payload: transaction
        })
    }
    function minusqunatity(transaction) {

        dispatch({
            type: 'MINUSQUNATITY',
            payload: transaction
        })
    }

    return (<>
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                badge: state.badge,
                cart: state.cart,
                tprice: state.tprice,
                delTransaction,
                addTransaction,
                updateBadge,
                qunatityset,
                minusqunatity,
                price,

            }
        }>
            {children}


        </GlobalContext.Provider>


    </>);

}