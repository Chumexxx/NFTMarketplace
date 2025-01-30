import styled from "styled-components"
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { CiAlarmOn } from "react-icons/ci";
import item11 from "../assets/Item (11).svg"
import item12 from "../assets/Item (12).svg"
import item13 from "../assets/Item (13).svg"
import item14 from "../assets/Item (14).svg"
import item15 from "../assets/Item (15).svg"
import item16 from "../assets/Item (16).svg"

interface PopularItems {
    id: number;
    image: string;
    description: string;
    price: number;
    time: string;
    likes: number;
    bidders: string;
  }

const Overline3: React.FC = () => {
    const [item, setItem] = useState<PopularItems[]>([
        {
          id: 1,
          image: item11,
          description: "Beautiful abstract art piece with vibrant colors",
          price: 2.55,
          time: "22:59",
          likes: 24,
          bidders: "101 people are bidding"
        },
        {
          id: 2,
          image: item12,
          description: "Breathtaking digital landscape artwork",
          price: 2.55,
          time: "22:59",
          likes: 18,
          bidders: "101 people are bidding"
        },
        {
          id: 3,
          image: item13,
          description: "Beautiful abstract art piece with vibrant colors",
          price: 2.55,
          time: "22:59",
          likes: 24,
          bidders: "101 people are bidding"
        },
        {
          id: 4,
          image: item14,
          description: "Beautiful abstract art piece with vibrant colors",
          price: 2.55,
          time: "22:59",
          likes: 24,
          bidders: "101 people are bidding"
        },
        {
          id: 5,
          image: item15,
          description: "Beautiful abstract art piece with vibrant colors",
          price: 2.55,
          time: "22:59",
          likes: 24,
          bidders: "101 people are bidding"
        },
        {
            id: 4,
            image: item16,
            description: "Beautiful abstract art piece with vibrant colors",
            price: 2.55,
            time: "22:59",
            likes: 24,
            bidders: "101 people are bidding"
        }
      ]);

      const [likedItems, setLikedItems] = useState<Set<number>>(new Set());
    
      const handleLike = (id: number) => {
        setItem(item.map(item => {
          if (item.id === id) {
            return {
              ...item,
              likes: likedItems.has(id) ? item.likes - 1 : item.likes + 1
            };
          }
          return item;
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
        <p>OVERLINE</p>
        <h4>Most popular live auctions</h4>

        <ButtonDiv>
            <button>Architecture</button>
            <button>Photography</button>
            <button>Games</button>
            <button>Music</button>
        </ButtonDiv>

        <Items>

            <ItemsList>
                {item.map(item => (
                    <ItemCard key={item.id}>
                        <ImageContainer>
                          <Image src={item.image} />
                        </ImageContainer>

                        <Content>
                            <Description><h6>{item.description}</h6>
                            </Description>
                                              
                                <TimeAndPriceContainer>
                                    <Time>
                                        <CiAlarmOn size={15}/> <p>{item.time}</p>
                                    </Time>
                                                      
                                    <Price><p>{item.price} ETH</p></Price>
                                </TimeAndPriceContainer>
                                    
                                <Border></Border>
                        
                                <BiddersAndLike>
                        
                                <p>{item.bidders}</p>
                                    <LikeButton 
                                        onClick={() => handleLike(item.id)} isLiked={likedItems.has(item.id)} >
                                        <HeartIcon size={15} isLiked={likedItems.has(item.id)} />
                                    </LikeButton>
                    
                            </BiddersAndLike>
                                    
                      </Content>
                    
                   </ItemCard>
                ))}

            </ItemsList>

        </Items>

        <ButtonDiv>
            <ShowMore>Show me more</ShowMore>
        </ButtonDiv>

        <Border2></Border2>
      
    </Wrapper>
  )
}

export default Overline3

const Wrapper = styled.div`
    margin-top: 70px;
    width: 100%;
    p{
        background-color: transparent;
        color: #636ab3;
        font-size: 12px;
        text-align: center;
    }

    h4{
        margin-top: 0px;
        text-align: center;
        color: white;
        font-size: 30px;
    }
`

const Border2 = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #3a3b3d;
`

const ButtonDiv = styled.button`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
    background-color: transparent;
    border: none;
    button{
        padding: 5px;
        border-radius: 5px;
        border: 0.5px solid #636ab3;
        color: #636ab3;
        background-color: transparent;
    }

    button:hover{
        border: 2px solid #636ab3;
    }
`

const Items = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: center;
    height: 500px;

`

const ItemsList = styled.div`
    display: flex;
    gap: 20px;
    width: 1200px;
    overflow: hidden;
`

const ItemCard = styled.div`
    width: 180px;
    height: 440px;
    cursor: pointer;
`

const ImageContainer = styled.div`
 border-radius: 10px;
 overflow: hidden;
`;

const Image = styled.img`
    width: 180px;
    border-radius: 10px;
`;

const Time = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    p{
    background-color: transparent;
    font-size: 10px;
  }
`

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

const Content = styled.div`
  padding: 10px;
`;

const HeartIcon = styled(FaHeart)<{ isLiked: boolean }>`
  color: ${props => props.isLiked ? '#ff4b4b' : '#666'};
  transition: color 0.3s ease;
`;

const Description = styled.p`
    h6{
        margin-top: 0px;
        margin-bottom: 0px;
        text-align: left;
        color: white;
        font-size: 12px;
        font-weight: 400;
    }
    margin-top: 0px;
`;

const Price = styled.span`
  background-color: #1d1f3b;
  width: 45px;
  height: 20px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e28aa;

  p{
    background-color: transparent;
    color: #1e28aa;
    font-size: 10px;
  }
`;

const TimeAndPriceContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 65px;
  color: white;
  font-size: 15px;
`;

const Border = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #262840;
`

const BiddersAndLike = styled.div`
    display: flex;
    gap: 30px;
    p{
        color: white;
        font-size: 8px;
    }
`

const ShowMore = styled.div`
    padding: 10px;
    border-radius: 5px;
    border: 0.5px solid #636ab3;
    color: #636ab3;
    background-color: transparent;
`