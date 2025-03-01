import React from 'react'


const cards = ({ item }) => {

    return (
        <div className='mt-10 p-3  hover:scale-105 duration-200'>
            <div className="card bg-base-100 w-92 shadow-xl cursor-pointer  dark:bg-slate-900 dark:text-white border">
                <figure>
                    <img
                        src={item.Image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h1 className="card-title">
                        {item.name}
                        <div className="badge border-blue-950 h-10 bg-blue-400 outline-none">

                            {item.price === 0 ? "free" : item.category}</div>
                    </h1>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline hover:translate-y-1">${item.price}</div>
                        <div className="badge badge-outline hover:bg-blue-400 hover:text-white p-3 duration-200 hover:translate-y-1 mr-4">Read-Now</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cards
