import styled from 'styled-components'
import { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { CiAlarmOn } from "react-icons/ci";
import item10 from "../assets/Item (10).svg"
import pleat from "../assets/Pleat.svg"
// import image from "../assets/Image.svg"
import item17 from "../assets/Item (17).svg"
import item18 from "../assets/Item (18).svg"
import item19 from "../assets/Item (19).svg"
import item20 from "../assets/Item (20).svg"
interface Item {
    id: number;
    image: string;
    description: string;
    price: number;
    time: string;
    likes: number;
    bidders: string;
  }

const SaleOffers: React.FC = () => {

    const [item, setItems] = useState<Item[]>([
        {
          id: 1,
          image: item10,
          description: "Fames habitasse risus ultricies tortor sit",
          price: 2.5,
          time: "22:59",
          likes: 24,
          bidders: "101 people are bidding"
        },
        {
            id: 2,
            image: item10,
            description: "Beautiful abstract art piece with vibrant colors",
            price: 2.5,
            time: "22:59",
            likes: 29,
            bidders: "101 people are bidding"
        },
    ])

    const [topItem, setTopItems] = useState<Item[]>([
      {
        id: 1,
        image: item17,
        description: "Vulputate velit viverra volutpat volutpat tristique",
        price: 2.5,
        time: "22:59",
        likes: 24,
        bidders: "101 people are bidding"
      },
      {
        id: 2,
        image: item18,
        description: "Egestas blandit sit egestas non sed. Purus semper",
        price: 2.5,
        time: "22:59",
        likes: 29,
        bidders: "101 people are bidding"
      },
      {
        id: 3,
        image: item19,
        description: "Id ut consequat netus nec vel amet ut porta in augue",
        price: 2.5,
        time: "22:59",
        likes: 24,
        bidders: "101 people are bidding"
      },
      {
        id: 4,
        image: item20,
        description: "Sed et nibh felis integer tellus turpin",
        price: 2.5,
        time: "22:59",
        likes: 29,
        bidders: "101 people are bidding"
      },
  ])

     const [likedItems, setLikedItems] = useState<Set<number>>(new Set());
    
      const handleLike = (id: number) => {
        setItems(item.map(item => {
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

      const [topLikedItems, setTopLikedItems] = useState<Set<number>>(new Set());
    
      const handleTopLike = (id: number) => {
        setTopItems(topItem.map(topItem => {
          if (topItem.id === id) {
            return {
              ...topItem,
              likes: topLikedItems.has(id) ? topItem.likes - 1 : topItem.likes + 1
            };
          }
          return topItem;
        }));
    
        setTopLikedItems(prev => {
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
        <SaleDiv>
            <TextDiv>
                <h4>Check out the hottest Sale offers</h4>
            </TextDiv>

            <ItemsDiv>
                {item.map(item => (
                      <OfferCard key={item.id}>
                        <ImageContainer>
                          <Image src={item.image} />
                        </ImageContainer>
            
                        <Content>
                          <Description>{item.description}</Description>
                          
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
                              onClick={() => handleLike(item.id)}
                              isLiked={likedItems.has(item.id)} >
                              <HeartIcon 
                                size={15} 
                                isLiked={likedItems.has(item.id)} 
                              />
                            </LikeButton>

                          </BiddersAndLike>
            
                        </Content>
                      </OfferCard>
                ))}

            </ItemsDiv>

            <ShowMore>Show me more</ShowMore>

        </SaleDiv>

        <CreateDiv>
            <CreateNft>
            <Elipses>
                <img src={pleat} alt="" />
            </Elipses>

                <Image2>
                    {/* <img src={image} alt="" /> */}
                </Image2>

                <Content1>
                  <h4>Get started creating and selling your NFTs</h4>

                  <p>Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat. Mi est sit.</p>

                </Content1>

            </CreateNft>

        </CreateDiv>

        

        <BuyNft>
          <div>
            <h4>Top NFT at a lower price</h4>
          </div>

          <TopItemsDiv>
                {topItem.map(topItem => (
                      <TopItemCard key={topItem.id}>
                        <ImageContainer>
                          <Image src={topItem.image} />
                        </ImageContainer>
            
                        <TopContent>
                          <Description>{topItem.description}</Description>
                          
                          <TimeAndPriceContainer>
                            <Time>
                                <CiAlarmOn size={15}/> <p>{topItem.time}</p>
                            </Time>
                              
                            <Price><p>{topItem.price} ETH</p></Price>
                          </TimeAndPriceContainer>

                          <BiddersAndLike>

                            <p>{topItem.bidders}</p>
                          <LikeButton 
                              onClick={() => handleTopLike(topItem.id)}
                              isLiked={topLikedItems.has(topItem.id)} >
                              <HeartIcon 
                                size={15} 
                                isLiked={topLikedItems.has(topItem.id)} 
                              />
                            </LikeButton>

                          </BiddersAndLike>
            
                        </TopContent>
                      </TopItemCard>
                ))}

          </TopItemsDiv>
          <ButtonDiv>
            <ShowMore>Show me more</ShowMore>
          </ButtonDiv>

        </BuyNft>
      
    </Wrapper>
  )
}

export default SaleOffers

const Wrapper = styled.div`
    margin-top: 50px;
    margin-bottom: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

const SaleDiv = styled.div`
   border: 1px solid #262840;
   width: 350px;
   height: 650px;
   border-radius: 12px;
   padding-left: 30px;
`

const TextDiv = styled.div`
    width: 200px;
    h4{
    color: white;
    font-size: 20px;
   }
`

const ImageContainer = styled.div`
  position: relative;
  width: 180px;
  height: 290px;
  overflow: hidden;
  border-radius: 10px;
`;

const Image = styled.img`
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

const ItemsDiv = styled.div`
  display: flex;
  gap: 25px;
  overflow: hidden;
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

const OfferCard = styled.div`
   width: 180px;
   cursor: pointer;
`

const Content = styled.div`
  padding: 10px;
`;

const HeartIcon = styled(FaHeart)<{ isLiked: boolean }>`
  color: ${props => props.isLiked ? '#ff4b4b' : '#666'};
  transition: color 0.3s ease;
`;

const Description = styled.p`
  color: white;
  margin-top: 0px;
  font-size: 12px;
`;

const Price = styled.span`
  background-color: #1d1f3b;
  width: 55px;
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
  justify-content: space-between;
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
    justify-content: space-between;
    gap: 30px;
    p{
        color: white;
        font-size: 8px;
    }
`

const ShowMore = styled.div`
    color: #262840;
    background-color: transparent;
    border: 2px solid #262840;
    width: 300px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-top: 15px;
`

const CreateNft = styled.div`
    border: 1px solid #262840;
    width: 400px;
    height: 650px;
    border-radius: 12px;
`

const CreateDiv = styled.div`
    
`

const Elipses = styled.div`
    
`

const Content1 = styled.div`
    
`

const Image2 = styled.div`
   

    img{
        
    }
`

const BuyNft = styled.div`
    border: 1px solid #262840;
    width: 370px;
    height: 610px;
    border-radius: 12px;
    padding: 20px;

    h4{
      color: white;
      font-size: 20px;
    }
`
const TopItemCard = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-around;
  overflow: hidden;
`

const TopItemsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
`

const TopContent = styled.div`
  width: 300px;
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`

