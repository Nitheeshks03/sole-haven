import { createContext,useState,useEffect} from 'react';

const WishListContext = createContext();

function WishListProvider({children}) {
    const initialList = JSON.parse(localStorage.getItem("wishList")) || [];
    const [wishList, setWishList] = useState(initialList);
    useEffect(() => {
        localStorage.setItem("wishList", JSON.stringify(wishList));
    }, [wishList]);
    return (
        <WishListContext.Provider value={{wishList,setWishList}}>
        {children}
        </WishListContext.Provider>
    )
    }

export {WishListProvider, WishListContext};