import React from 'react';

const Categories = ({categories, filterItems}) => {
    return (
        <div className="--flex-center">
            {categories.map((category, index)=> {
                return(
                    <button key={index} onClick={() => filterItems(category)} type="button" className="btn --btn --btn-secondary">
                        {category.toUpperCase()}
                    </button>
                )
            })}

        </div>
    );
};

export default Categories;