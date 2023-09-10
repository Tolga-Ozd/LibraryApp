import React from 'react'
import Header from '../../components/header/Header'
import Card from '../../components/card/Card'
import { useDataContext } from '../../context/DataContext'
import { CardContainer } from '../../components/card/Card.style'
import { HomeContainer, HomeImage } from './Home.style'
import homeImg from "../../assets/books.jpg";


const Home = () => {
  const {data} = useDataContext()

  return (
    <HomeContainer>
      <Header />

      {data.length ? (
        <CardContainer wrap="wrap">
          {data.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </CardContainer>
      ) : (
        <HomeImage>
          <img src={homeImg} alt="Home" />
        </HomeImage>
      )}

    </HomeContainer>
  )
}

export default Home