import { useParams } from 'react-router-dom';
import React from 'react';
import hotels from '~/components/HotelsData/HotelsData';
import HotelItemDetail from '~/components/HotelItemDetail/HotelItemDetail';

function ItemDetail() {
    const { hotelname } = useParams();
    const hotelItem = hotels.find((hotel) => hotel.username === hotelname);
    return (
        <HotelItemDetail
            address={hotelItem.address}
            name={hotelItem.name}
            description={hotelItem.description}
            mainImage={hotelItem.image.main}
            oneDetailImage={hotelItem.image.oneDetail}
            twoDetailImage={hotelItem.image.twoDetail}
            threeDetailImage={hotelItem.image.threeDetail}
            oneRoomImage={hotelItem.image.oneRoom}
            twoRoomImage={hotelItem.image.twoRoom}
            threeRoomImage={hotelItem.image.threeRoom}
            fourRoomImage={hotelItem.image.fourRoom}
            oneDetailMoreImage={hotelItem.image.oneDetailMore}
            twoDetailMoreImage={hotelItem.image.twoDetailMore}
            hotelDetailTitle={hotelItem.hotelDetailTitle}
            firstRoomTitle={hotelItem.firstRoomTitle}
            secondRoomTitle={hotelItem.secondRoomTitle}
            thirdRoomTitle={hotelItem.thirdRoomTitle}
            fourthRoomTitle={hotelItem.fourthRoomTitle}
            firstHotelDetailTitleMore={hotelItem.firstHotelDetailTitleMore}
            secondHotelDetailTitleMore={hotelItem.secondHotelDetailTitleMore}
            price={hotelItem.price}
        />
    );
}

export default ItemDetail;
