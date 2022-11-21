import React from 'react';
import {CreateData} from "./CreateData";

export default class CreateMenu extends React.Component {
    constructor(props) {
        super(props);


    }

    closeMenu = (e) => {
        this.props.changeHandler(e);
    }

    render() {
        return (
            <>
                <form method='POST' className='min-w-[360px] max-w-[520px] flex flex-row bg-[#181e34] rounded-md'>
                    <div className='flex flex-row p-5'>
                        <div className='w-[200px]'>

                            {CreateData.map((Create, i) => {
                                return (
                                    <>
                                        <div className='flex text-color text-sm hover:bg-[#062640]'>
                                            <span className='w-3/5'>{Create.title}</span>
                                            {Create.values.length > 1 ? (
                                            <select className='w-2/5'>
                                                {Create.values.map((option, i) => {
                                                    return (
                                                        <option value={option}>{option}</option>
                                                    )
                                                })}
                                            </select>
                                            ) :
                                                Create.values.map((option, i) => {
                                                    return (
                                                        <span className='w-2/5'>{option}</span>
                                                    )
                                                })}
                                        </div>
                                    </>
                                )
                            })}

                        </div>

                        <div className='flex flex-col ml-5'>
                            {/*TODO: max aantal woorden in de input*/}
                            <input type='text' placeholder='Titel' className='w-full h-[24px] mb-3 rounded-md text-color bg-[#4b4e69] border border-[#406380]'/>

                            <textarea placeholder='Omschrijving' className='w-full min-h-[140px] max-h-[140px] mb-3 whitespace-normal break-all rounded-md text-color bg-[#4b4e69] border border-[#406380]'/>

                            <div className='flex flex-row mb-4'>
                                <span className='text-sm text-color'>Estimation</span>
                                {/*TODO: alleen maar "valid" inputs (1m-1h-1d-1w)*/}
                                <input type='text' placeholder='1m 1h 1d 1w' className='w-[85px] ml-1 pl-0 rounded-md text-sm text-color bg-[#4b4e69] border border-[#406380]'/>
                                <span className='ml-1 text-xs leading-5 text-color'>1 dag = 8 uur, 1 week = 5 dagen </span>
                            </div>

                            <div>
                                {/*TODO: add card button veranderen van kleur als de form wel/niet valid is?*/}
                                <button className='px-2 rounded-md text-[#aaacb2;] bg-[#4b4e69] border border-[#406380]'>Toevoegen</button>
                                <button onClick={this.closeMenu} className='ml-4 px-2 rounded-md text-[#aaacb2;] bg-[#4b4e69] border border-[#406380] '>Annuleren</button>
                            </div>
                        </div>


                    </div>
                </form>
            </>
        )
    }
}