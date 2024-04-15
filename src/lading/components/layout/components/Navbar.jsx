import React from 'react'
import { Badge } from 'primereact/badge'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'

import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="fixed w-full z-50 h-[50px] ">
                <div className="blur-xl  w-full bg-dark-light h-full absolute top-0 left-0">
                </div>
                <div className="flex items-center w-full bg-dark-light h-full opacity-90">
                  <nav className="w-screen-container mx-auto relative z-60 px-2 ">
                    <div className="w-full flex justify-between text-white-light ">

                      <div className="flex gap-5 items-center">
                        <div>
                          <img src="/assets/icons/pacman.svg" alt="" />
                        </div>

                        <div className="flex gap-5">
                          <Link to="/">Store</Link>
                      
                          <Link to="store">Games</Link>
                      
                          <Link to="game">News</Link>
                  
                          <Link to="cart">About</Link>
                        </div>
                      </div>
                      
                      
                      <div className="flex gap-2 items-center">

                          <div className="relative">
                            <img src="/assets/icons/search.svg" className="absolute top-[6px] left-3" />
                            <InputText
                                    name="search" 
                                    type="text"
                                    placeholder="Search"
                                    //value={formik.values.game} 
                                    //onChange={formik.handleChange} 
                                    className='pl-6 pr-3 py-1 w-44 bg-gray-light text-white rounded-3xl '
                                />
                          </div>
                          <div className="relative" >
                            <Button icon='pi pi-shopping-bag' rounded  className="rounded-full hover:bg-gray-700 ">
                  
                            </Button>
                            <Badge value="5" severity="danger" className="absolute top-0 right-0"></Badge>
                          </div>
                          <div className="">
                            <Button icon='pi pi-user' rounded  className="rounded-full hover:bg-gray-700">
                            </Button>
                          </div>
                      </div>

                    </div>
                    
                  </nav>
                </div>
               
            </div>
  )
}
