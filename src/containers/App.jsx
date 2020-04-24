import React, { useState, useEffect } from "react";
import useInitialState from "../hooks/useInitialState";
import "../assets/styles/App.scss";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";

const API = "http://localhost:3000/initialState";

const App = () => {

  const initialState = useInitialState(API);

  const renderVideos = () => {
    return (
      <div>
        {initialState.mylist.length && (
          <Categories title="Mi Lista">
            <Carousel>
              <CarouselItem />
            </Carousel>
          </Categories>
        )}

        <Categories title="Tendencias">
          <Carousel>
            {
              initialState.trends.map( item => 
                <CarouselItem 
                  key={item.id}
                  {...item}
                />
              )
            }
          </Carousel>
        </Categories>

        <Categories title="Originales de Plazti Videos">
          <Carousel>
            {
              initialState.originals.map( item => 
                <CarouselItem 
                  key={item.id}
                  {...item}
                />
              )
            }
          </Carousel>
        </Categories>
      </div>
    )
  };

  const renderLoading = () => <div>Cargando...</div>

  return (
    <div className="App">
      <Header />
      <Search />

      { Object.keys(initialState).length ? renderVideos() : renderLoading() }

      <Footer />
    </div>
  );
};

export default App;
