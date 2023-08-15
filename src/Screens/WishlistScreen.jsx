import { useContext } from 'react';
import { WishListContext } from '../contexts/WishListContext';
import WishListCard from '../components/WishListCard';

function WishListScreen() {
    const {wishList,setWishList} = useContext(WishListContext);
    return (
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:'20px',margin:'0 100px'}}>
            {wishList.map((product) => (
                <WishListCard key={product._id} product={product} />
            ))}
                

        </div>
    )
}

export default WishListScreen;
