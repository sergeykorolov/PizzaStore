import React, {memo, useState} from "react";

const Categories = memo(function Categories({activeCategory, items, onClickCategory}) {

        return (
            <div className="categories">
                <ul>
                    <li className={activeCategory === null ? "active" : ""} onClick={() => onClickCategory(null)}>Все</li>
                    {
                        items.map((itemName, index) =>
                            <li className={activeCategory === index ? "active" : ""}
                                onClick={() => onClickCategory(index)}
                                key={`${itemName}_${index}`}>
                                {itemName}
                            </li>)
                    }
                </ul>
            </div>
        )
    }
)

export default Categories;