import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHeart } from "react-icons/fa";
import { CiAlarmOn } from "react-icons/ci";
import img1 from '../assets/Item.svg'
import img2 from "../assets/Item (1).svg"
import img3 from "../assets/Item (2).svg"
import img4 from "../assets/Item (3).svg"
// import img5 from "./../assets/Item (4).svg"
import bidder1 from '../assets/01.svg'
import bidder2 from '../assets/02.svg'
import bidder3 from '../assets/02 (1).svg'
import bidder4 from '../assets/02 (2).svg'
import bidder5 from '../assets/02.svg'
import bidder6 from '../assets/03.svg'
import bidder7 from '../assets/03 (1).svg'
import bidder8 from '../assets/03 (2).svg'
import bidder9 from '../assets/03 (3).svg'
import bidder10 from '../assets/04.svg'
import bidder11 from '../assets/04 (1).svg'
import bidder12 from '../assets/04 (2).svg'
import bidder13 from '../assets/04 (3).svg'

interface AuctionItem {
  id: number;
  image: string;
  description: string;
  price: number;
  timeLeft: number;
  likes: number;
  bidders: string[];
}

const LiveAuctions: React.FC = () => {
  const [auctions, setAuctions] = useState<AuctionItem[]>([
    {
      id: 1,
      image: img1,
      description: "Beautiful abstract art piece with vibrant colors",
      price: 2.55,
      timeLeft: 30,
      likes: 24,
      bidders: [bidder1, bidder1, bidder1, bidder1]
    },
    {
      id: 2,
      image: img2,
      description: "Breathtaking digital landscape artwork",
      price: 3.19,
      timeLeft: 45,
      likes: 18,
      bidders: [ bidder2, bidder3, bidder4, bidder5]
    },
    {
      id: 3,
      image: img3,
      description: "Beautiful abstract art piece with vibrant colors",
      price: 1.11,
      timeLeft: 30,
      likes: 24,
      bidders: [bidder6, bidder7, bidder8, bidder9]
    },
    {
      id: 4,
      image: img4,
      description: "Beautiful abstract art piece with vibrant colors",
      price: 1.63,
      timeLeft: 30,
      likes: 24,
      bidders: [ bidder10, bidder11, bidder12, bidder13]
    },
    // {
    //   id: 5,
    //   image: img5,
    //   description: "Beautiful abstract art piece with vibrant colors",
    //   price: 2.5,
    //   timeLeft: 30,
    //   likes: 24,
    //   bidders: [bidder1, bidder1, bidder1, bidder1]
    // },
  ]);

  const [likedItems, setLikedItems] = useState<Set<number>>(new Set());

  const handleLike = (id: number) => {
    setAuctions(auctions.map(auction => {
      if (auction.id === id) {
        return {
          ...auction,
          likes: likedItems.has(id) ? auction.likes - 1 : auction.likes + 1
        };
      }
      return auction;
    }));

    setLikedItems(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(id)) {
        newLiked.delete(id);
      } else {
        newLiked.add(id);
      }
      return newLiked;
    });
  };

  return (
    <Wrapper>
      <p style={{fontSize: "50px", color: "white", textAlign: "center"}}>Latest live auctions</p> 
      <Div>

      <AunctionsContainer>
        {auctions.map(auction => (
          <Card key={auction.id}>
            <ImageContainer>
              <Image src={auction.image} />
            </ImageContainer>

            <Content>
              <DescriptionPriceContainer>
                <Description>{auction.description}</Description>
                <Price>{auction.price} ETH</Price>
              </DescriptionPriceContainer>
              
              <TimeLeft>
                  <CiAlarmOn size={20}/> {auction.timeLeft} minutes left
              </TimeLeft>

              <Border></Border>

              <BiddersAndLikes>
                <BiddersContainer>
                  {auction.bidders.map((bidder, index) => (
                    <BidderAvatar
                      key={index}
                      src={bidder}
                      alt={`Bidder ${index + 1}`}
                      style={{ marginLeft: index > 0 ? '-10px' : '0' }}
                    />
                  ))}
                </BiddersContainer>

                <LikeButton 
                  onClick={() => handleLike(auction.id)}
                  isLiked={likedItems.has(auction.id)} >
                  <HeartIcon 
                    size={20} 
                    isLiked={likedItems.has(auction.id)} 
                  />
                  <LikeCount>{auction.likes}</LikeCount>
                </LikeButton>
              </BiddersAndLikes>

            </Content>
          </Card>
        ))}
      </AunctionsContainer>

      </Div>
      
    </Wrapper>
  );
};

export default LiveAuctions;

const Wrapper = styled.div`
  width: 100%;
  cursor: pointer;
`;

const Div = styled.div`
  overflow: hidden;
`

const AunctionsContainer = styled.div`
  /* border: 2px solid green; */
  display: flex;
  width: 100%;
  gap: 20px;
  /* align-items: center; */
  overflow: hidden;
  /* position: relative; */
`;

const Card = styled.div`
  background: transparent;
  border: 0.5px solid #262840;
  border-radius: 10px;
  height: 767px;
  width: 448px;
  padding: 25px;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  width: 400px;
  height: 520px;
`;

const Image = styled.img`
  width: 400px;
  height: 520px;
`;

const LikeButton = styled.button<{ isLiked: boolean }>`
  background-color: transparent;
  border: none;
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const LikeCount = styled.span`
  color: #666;
`;

const HeartIcon = styled(FaHeart)<{ isLiked: boolean }>`
  color: ${props => props.isLiked ? '#ff4b4b' : '#666'};
  transition: color 0.3s ease;
`;

const Content = styled.div`
  padding: 10px;
`;

const Description = styled.p`
  color: white;
  margin-top: 0px;
  font-size: 20px;
`;

const DescriptionPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Price = styled.span`
  background-color: #1d1f3b;
  width: 115px;
  height: 30px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: #1e28aa;
`;

const TimeLeft = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  color: white;
  font-size: 15px;
`;

const Border = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  border-bottom: 1px solid #262840;
`

const BiddersAndLikes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BiddersContainer = styled.div`
  display: flex;
  align-items: center;
`;

const BidderAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
