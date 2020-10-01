import React, {useCallback} from "react";
import {Categories, SortPopup, PizzaBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filters";

const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

const Home = () => {

    const dispatch = useDispatch();
    const pizzas = useSelector(({pizzas}) => pizzas.items);

    // функция создастся при первом рендере и не будет пересоздаваться при следующих
    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={categoryNames}
                    onClickItem={onSelectCategory}
                />
                <SortPopup
                    items={[
                        {name: 'популярности', type: 'popular'},
                        {name: 'цене', type: 'price'},
                        {name: 'алфавиту', type: 'alphabet'}
                    ]}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzas && pizzas.map(pizza =>
                    <PizzaBlock key={pizza.id} {...pizza}/>
                )}
            </div>
        </div>
    )
}

export default Home;