// import React from 'react';
// // .columnz1 {}
// // .columnz1 > h2 {}
// // .columnz1 > div {}
// // .columnz1 > div > div  {}
// // .columnz1 > div > div > div : nth-child(1)  {}
// // .columnz1 > div > div > div : nth-child(1) > h3 {}
// // .columnz1 > div > div > div : nth-child(2)  {}
// // .columnz1 > div > div > div : nth-child(2) > p {}
// // .columnz1 > div > div > div : nth-child(3)  {}
// // .columnz1 > div > div > div : nth-child(3) > p : nth-child(1) {}
// // .columnz1 > div > div > div : nth-child(3) > p : nth-child(2) {}
// const BountiesDND = () => {
//     return (
//         <div className='container mx-auto'>
//             <h1 className='text-white text-center mt-20 text-6xl font-bold'>Bounties</h1>

//             <section className='mt-6  grid-cols-4 grid gap-4'>


//                 <div className="title bg-[#100E2E] rounded-t-xl columnz1">
//                     <h2 className='text-2xl font-bold text-white border-b-4 p-3 bg-[#5A4860] rounded-t-xl'>OPEN BOUNTIES</h2>
//                     <div className='border  p-4 pt-0 border-[#e7e6eb62] mt-8 border-t-0 grid grid-cols-1 gap-4'>
//                         <div className="card rounded-xl bg-[#5A4860] text-white overflow-hidden">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between  text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>
//                         <div className="card rounded-xl bg-[#5A4860] text-white">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between  text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>
//                         <div className="card rounded-xl bg-[#5A4860] text-white">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between  text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>
//                         <div className="card rounded-xl bg-[#5A4860] text-white">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between items-center text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>

//                     </div>
//                 </div>




//                 <div className="title bg-[#100E2E] rounded-t-xl columnz2">
//                     <h2 className='text-2xl font-bold text-white border-b-4 p-3 bg-[#5A4860] rounded-t-xl'>ASSIGNED/IN PROGRESS</h2>
//                     <div className='border  p-4 pt-0 border-[#e7e6eb62] mt-8 border-t-0 grid grid-cols-1 gap-4'>
//                         <div className="card rounded-xl bg-[#5A4860] text-white overflow-hidden">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between  text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>
//                         <div className="card rounded-xl bg-[#5A4860] text-white">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between  text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>
//                         <div className="card rounded-xl bg-[#5A4860] text-white">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between  text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>
//                         <div className="card rounded-xl bg-[#5A4860] text-white">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between items-center text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>

//                     </div>
//                 </div>




//                 <div className="title bg-[#100E2E] rounded-t-xl columnz3">
//                     <h2 className='text-2xl font-bold text-white border-b-4 p-3 bg-[#5A4860] rounded-t-xl'>UNDER REVIEW</h2>
//                     <div className='border  p-4 pt-0 border-[#e7e6eb62] mt-8 border-t-0 grid grid-cols-1 gap-4'>
//                         <div className="card rounded-xl bg-[#5A4860] text-white overflow-hidden">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between  text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>
//                         <div className="card rounded-xl bg-[#5A4860] text-white">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between  text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>
//                         <div className="card rounded-xl bg-[#5A4860] text-white">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between  text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>
//                         <div className="card rounded-xl bg-[#5A4860] text-white">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between items-center text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>

//                     </div>
//                 </div>




//                 <div className="title bg-[#100E2E] rounded-t-xl columnz4">
//                     <h2 className='text-2xl font-bold text-white border-b-4 p-3 bg-[#5A4860] rounded-t-xl'>CLOSE / REWARDED</h2>
//                     <div className='border  p-4 pt-0 border-[#e7e6eb62] mt-8 border-t-0 grid grid-cols-1 gap-4'>
//                         <div className="card rounded-xl bg-[#5A4860] text-white overflow-hidden">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between  text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>
//                         <div className="card rounded-xl bg-[#5A4860] text-white">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between  text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>
//                         <div className="card rounded-xl bg-[#5A4860] text-white">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between  text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>
//                         <div className="card rounded-xl bg-[#5A4860] text-white">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between items-center text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>

//                     </div>
//                 </div>


//             </section>

//         </div>
//     );
// };

// export default BountiesDND;



















// import React from 'react';
// // .columnz1 {}
// // .columnz1 > h2 {}
// // .columnz1 > div {}
// // .columnz1 > div > div  {}
// // .columnz1 > div > div > div : nth-child(1)  {}
// // .columnz1 > div > div > div : nth-child(1) > h3 {}
// // .columnz1 > div > div > div : nth-child(2)  {}
// // .columnz1 > div > div > div : nth-child(2) > p {}
// // .columnz1 > div > div > div : nth-child(3)  {}
// // .columnz1 > div > div > div : nth-child(3) > p : nth-child(1) {}
// // .columnz1 > div > div > div : nth-child(3) > p : nth-child(2) {}
// const BountiesDND = () => {
//     return (
//         <div className='container mx-auto'>
//             <h1 className='text-white text-center mt-20 text-6xl font-bold'>Bounties</h1>

//             <section className='mt-6  grid-cols-4 grid gap-4'>


//                 <div className="title bg-[#100E2E] rounded-t-xl columnz1">
//                     <h2 className='text-2xl font-bold text-white border-b-4 p-3 bg-[#5A4860] rounded-t-xl'>OPEN BOUNTIES</h2>
//                     <div className='border  p-4 pt-0 border-[#e7e6eb62] mt-8 border-t-0 grid grid-cols-1 gap-4'>
//                         <div className="card rounded-xl bg-[#5A4860] text-white">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between  text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>
//                         <div className="card rounded-xl bg-[#5A4860] text-white">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between  text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>
//                         <div className="card rounded-xl bg-[#5A4860] text-white">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between  text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>
//                         <div className="card rounded-xl bg-[#5A4860] text-white">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between items-center text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>

//                     </div>
//                 </div>




//                 <div className="title bg-[#100E2E] rounded-t-xl columnz2">
//                     <h2 className='text-2xl font-bold text-white border-b-4 p-3 bg-[#5A4860] rounded-t-xl'>ASSIGNED/IN PROGRESS</h2>
//                     <div className='border  p-4 pt-0 border-[#e7e6eb62] mt-8 border-t-0 grid grid-cols-1 gap-4'>
//                         <div className="card rounded-xl bg-[#5A4860] text-white">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between  text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>
//                         <div className="card rounded-xl bg-[#5A4860] text-white">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between  text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>
//                         <div className="card rounded-xl bg-[#5A4860] text-white">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between  text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>
//                         <div className="card rounded-xl bg-[#5A4860] text-white">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between items-center text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>

//                     </div>
//                 </div>




//                 <div className="title bg-[#100E2E] rounded-t-xl columnz3">
//                     <h2 className='text-2xl font-bold text-white border-b-4 p-3 bg-[#5A4860] rounded-t-xl'>UNDER REVIEW</h2>
//                     <div className='border  p-4 pt-0 border-[#e7e6eb62] mt-8 border-t-0 grid grid-cols-1 gap-4'>
//                         <div className="card rounded-xl bg-[#5A4860] text-white">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between  text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>
//                         <div className="card rounded-xl bg-[#5A4860] text-white">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between  text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>
//                         <div className="card rounded-xl bg-[#5A4860] text-white">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between  text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>
//                         <div className="card rounded-xl bg-[#5A4860] text-white">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between items-center text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>

//                     </div>
//                 </div>




//                 <div className="title bg-[#100E2E] rounded-t-xl columnz4">
//                     <h2 className='text-2xl font-bold text-white border-b-4 p-3 bg-[#5A4860] rounded-t-xl'>CLOSE / REWARDED</h2>
//                     <div className='border  p-4 pt-0 border-[#e7e6eb62] mt-8 border-t-0 grid grid-cols-1 gap-4'>
//                         <div className="card rounded-xl bg-[#5A4860] text-white">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between  text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>
//                         <div className="card rounded-xl bg-[#5A4860] text-white">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between  text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>
//                         <div className="card rounded-xl bg-[#5A4860] text-white">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between  text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>
//                         <div className="card rounded-xl bg-[#5A4860] text-white">
//                             <div className="card-title text-2xl font-bold p-4 pb-0">
//                                 <h3>We Are DAOHelperians</h3>
//                             </div>
//                             <div className="card-body p-4 pt-0">
//                                 <p className='my-4'>
//                                     We are the best Blockchain developer. We Work with Web3.
//                                 </p>
//                             </div>
//                             <div className="card-footer rounded-b-xl p-3 flex justify-between items-center text-black">
//                                 <p>Reward : $5</p>
//                                 <p>Time left: 2 days</p>
//                             </div>
//                         </div>

//                     </div>
//                 </div>


//             </section>

//         </div>
//     );
// };

// export default BountiesDND;





































import React, { useState } from 'react';
// .columnz1 {}
// .columnz1 > h2 {}
// .columnz1 > div {}
// .columnz1 > div > div  {}
// .columnz1 > div > div > div : nth-child(1)  {}
// .columnz1 > div > div > div : nth-child(1) > h3 {}
// .columnz1 > div > div > div : nth-child(2)  {}
// .columnz1 > div > div > div : nth-child(2) > p {}
// .columnz1 > div > div > div : nth-child(3)  {}
// .columnz1 > div > div > div : nth-child(3) > p : nth-child(1) {}
// .columnz1 > div > div > div : nth-child(3) > p : nth-child(2) {}
const BountiesDND = () => {
    const [postz4col1,setPostz4col1]=useState(4)
    const [postz4col2,setPostz4col2]=useState(4)
    const [postz4col3,setPostz4col3]=useState(4)
    const [postz4col4,setPostz4col4]=useState(4)
    return (
        <div className='container mx-auto'>
            <h1 className='text-white text-center mt-20 text-6xl font-bold'>Bounties</h1>

            <section className='mt-6  grid-cols-4 grid gap-4'>


                <div className="title bg-[#100E2E] rounded-t-xl columnz1">
                    <h2 className='text-2xl font-bold text-white border-b-4 p-3 bg-[#5A4860] rounded-t-xl'>OPEN BOUNTIES</h2>
                    <div className='border  p-4 pt-0 border-[#e7e6eb62] mt-8 border-t-0 grid grid-cols-1 gap-4'>
                        {
                            [...Array(postz4col1).keys()].map((post, index) => <div
                                key={index}
                                className="card rounded-xl bg-[#5A4860] text-white">
                                <div className="card-title text-2xl font-bold p-4 pb-0">
                                    <h3>We Are DAOHelperians</h3>
                                </div>
                                <div className="card-body p-4 pt-0">
                                    <p className='my-4'>
                                        We are the best Blockchain developer. We Work with Web3.
                                    </p>
                                </div>
                                <div className="card-footer rounded-b-xl p-3 flex justify-between  text-black">
                                    <p>Reward : $5</p>
                                    <p>Time left: 2 days</p>
                                </div>
                            </div>)
                        }

                    </div>
                </div>




                <div className="title bg-[#100E2E] rounded-t-xl columnz2">
                    <h2 className='text-2xl font-bold text-white border-b-4 p-3 bg-[#5A4860] rounded-t-xl'>ASSIGNED/IN PROGRESS</h2>
                    <div className='border  p-4 pt-0 border-[#e7e6eb62] mt-8 border-t-0 grid grid-cols-1 gap-4'>
                        {
                            [...Array(postz4col2).keys()].map((post, index) => <div
                                key={index}
                                className="card rounded-xl bg-[#5A4860] text-white">
                                <div className="card-title text-2xl font-bold p-4 pb-0">
                                    <h3>We Are DAOHelperians</h3>
                                </div>
                                <div className="card-body p-4 pt-0">
                                    <p className='my-4'>
                                        We are the best Blockchain developer. We Work with Web3.
                                    </p>
                                </div>
                                <div className="card-footer rounded-b-xl p-3 flex justify-between  text-black">
                                    <p>Reward : $5</p>
                                    <p>Time left: 2 days</p>
                                </div>
                            </div>)
                        }

                    </div>
                </div>




                <div className="title bg-[#100E2E] rounded-t-xl columnz3">
                    <h2 className='text-2xl font-bold text-white border-b-4 p-3 bg-[#5A4860] rounded-t-xl'>UNDER REVIEW</h2>
                    <div className='border  p-4 pt-0 border-[#e7e6eb62] mt-8 border-t-0 grid grid-cols-1 gap-4'>
                        {
                            [...Array(postz4col3).keys()].map((post, index) => <div
                                key={index}
                                className="card rounded-xl bg-[#5A4860] text-white">
                                <div className="card-title text-2xl font-bold p-4 pb-0">
                                    <h3>We Are DAOHelperians</h3>
                                </div>
                                <div className="card-body p-4 pt-0">
                                    <p className='my-4'>
                                        We are the best Blockchain developer. We Work with Web3.
                                    </p>
                                </div>
                                <div className="card-footer rounded-b-xl p-3 flex justify-between  text-black">
                                    <p>Reward : $5</p>
                                    <p>Time left: 2 days</p>
                                </div>
                            </div>)
                        }

                    </div>
                </div>




                <div className="title bg-[#100E2E] rounded-t-xl columnz4">
                    <h2 className='text-2xl font-bold text-white border-b-4 p-3 bg-[#5A4860] rounded-t-xl'>CLOSE / REWARDED</h2>
                    <div className='border  p-4 pt-0 border-[#e7e6eb62] mt-8 border-t-0 grid grid-cols-1 gap-4'>
                        {
                            [...Array(postz4col4).keys()].map((post, index) => <div
                                key={index}
                                className="card rounded-xl bg-[#5A4860] text-white">
                                <div className="card-title text-2xl font-bold p-4 pb-0">
                                    <h3>We Are DAOHelperians</h3>
                                </div>
                                <div className="card-body p-4 pt-0">
                                    <p className='my-4'>
                                        We are the best Blockchain developer. We Work with Web3.
                                    </p>
                                </div>
                                <div className="card-footer rounded-b-xl p-3 flex justify-between  text-black">
                                    <p>Reward : $5</p>
                                    <p>Time left: 2 days</p>
                                </div>
                            </div>)
                        }

                    </div>
                </div>


            </section>

        </div>
    );
};

export default BountiesDND;