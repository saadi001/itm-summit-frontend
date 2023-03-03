import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Loading from '../Loading/Loading';
import { MdReportGmailerrorred } from "react-icons/md";

const Competition = () => {
     const navigate = useNavigate();
     const [checkbox, setCheckbox] = useState(false);
     const [toggleValue, setToggleValue] = useState(1)
     const [selectedValue, setSelectedValue] = useState('');
     const [loading, setLoading] = useState(false)
     const { register, handleSubmit, formState: { errors } } = useForm();

     const handleCheckbox = (e) => {
          setCheckbox(e)
          // console.log(checkbox)
     }

     const handleOptionChange = (event) => {
          setSelectedValue(event.target.value);
     }

     const handleRegisterForm = (data) => {
          // console.log(selectedValue, data)
          setLoading(true)
          const { name, department, id, email, semester, phone, transactionID } = data;

          // image upload 
          const image = data.image[0]
          const formData = new FormData();
          formData.append('image', image)
          const url = `https://api.imgbb.com/1/upload?key=63767107697823bd4d26d5b8bb78e4a0`
          fetch(url, {
               method: 'POST',
               body: formData
          })
               .then(res => res.json())
               .then(imageData => {
                    if (imageData.success) {
                         console.log(imageData.data.url)
                         const registerData = {
                              name,
                              department,
                              id,
                              email,
                              semester,
                              phone,
                              taka: selectedValue,
                              image: imageData.data.url,
                              transactionID
                         }
                         fetch('https://itmsummitbackend.vercel.app/competition', {
                              method: "POST",
                              headers: {
                                   'content-type': 'application/json'
                              },
                              body: JSON.stringify(registerData)
                         })
                              .then(res => res.json())
                              .then(() => {
                                   setLoading(false)
                                   navigate('/')
                              })
                    }
               })


     }

     return (
          <div className='bg-gray-500/10 w-full min-h-screen'>
               <div className='2xl:max-w-7xl 2xl:mx-auto xl:mx-auto xl:max-w-5xl lg:mx-20 md:mx-12 mx-3 '>
                    <Header></Header>
                    {
                         loading ? <div className='pt-3 flex justify-center items-center min-h-screen'><Loading></Loading></div> :
                              <div className='pb-10'>
                                   <section className="p-4 sm:p-6 md:p-10 pt-6 mx-auto bg-white rounded-md shadow-md ">
                                        <div className='flex items-center font-serif'>
                                             <div onClick={() => setToggleValue(1)} className={`px-5 py-1 cursor-pointer border-b ${toggleValue === 1 ? 'font-bold border-b-2 border-pink-600' : ''}`}>About</div>
                                             <div onClick={() => setToggleValue(2)} className={`px-5 py-1 cursor-pointer border-b ${toggleValue === 2 ? 'font-bold border-b-2 border-pink-600' : ''}`}>Registration</div>
                                             <div onClick={() => setToggleValue(3)} className={`px-5 py-1 cursor-pointer border-b ${toggleValue === 3 ? 'font-bold border-b-2 border-pink-600' : ''}`}>Question</div>

                                        </div>
                                        {/* about of competition  */}
                                        <div className={`${toggleValue === 1 ? 'inline-block' : 'hidden'} mt-8`}>
                                             {/* <p>What is BrainMegnato competition</p> */}
                                             <p className='mb-3'>BrainMagneto is an exciting and challenging interdepartmental competition that tests participants' project management skills. Hosted as a part of the ITM Summit 2023, this competition is open to all students of Daffodil International University who are passionate about project management and looking to sharpen their skills.</p>
                                             <p className='mb-3'>Participants will be presented with a real-life project management case study and will have to come up with a comprehensive project plan and management strategy to successfully complete the project. The competition is designed to simulate real-world project management scenarios, giving participants a chance to develop their critical thinking, problem-solving, and communication skills.</p>
                                             <p className='mb-3'>The competition will provide an excellent opportunity for students to put their classroom learning into practice and gain hands-on experience in project management. They will also get a chance to network with other students and professionals in the field, giving them valuable insights into the industry.</p>
                                             <p className='mb-4'>At the end of the competition, the winning team will be awarded a cash prize and recognition for their outstanding project management skills. Join BrainMagneto and take the first step towards a successful career in project management!</p>

                                             <p className='mb-4'><span className='font-bold text-pink-500'>Registration fee:</span> A single student can participate as an individual or a team of two people can participate. The registration fee is 300 BDT for a single student and 500 BDT for a team of two.</p>

                                             <p className='mb-1 font-bold '>Instruction for BrainMegnato competition</p>
                                             <p className='mb-3'><span className='font-bold text-pink-500'>Eligibility: </span> The competition is open to all students of Daffodil International University.</p>
                                             <p className='mb-3'><span className='font-bold text-pink-500'>Case Study Distribution: </span> The project management-based case studies will be provided to the participants one day before the competition begins.</p>
                                             <p className='mb-3'><span className='font-bold text-pink-500'>Presentation: </span> On the day of ITM SUMMIT 2023, participants will present their project management-based case studies in front of a judging panel.</p>
                                             <p className='mb-3'><span className='font-bold text-pink-500'>Judging Panel: </span> The judging panel will consist of individuals from outside Daffodil International University.</p>
                                             <p className='mb-3'><span className='font-bold text-pink-500'>Criteria:</span> Participants will be evaluated based on their understanding of the project management principles, ability to analyze the case study, creativity, and effective communication skills.</p>
                                             <p className='mb-3'><span className='font-bold text-pink-500'>Prize Money:</span> The winners of the competition will be announced at the closing ceremony of ITM Summit 2023, and prize money will be awarded to the top three teams.</p>
                                             <p className='mb-3'><span className='font-bold text-pink-500'>Rules and Regulations:</span> Participants are expected to adhere to the rules and regulations of the competition. Any violation of the rules may lead to disqualification.</p>

                                             <p>We hope you'll join us for this exciting competition and showcase your project management skills!</p>
                                             <div className='flex justify-end mt-3'><button onClick={() => setToggleValue(2)} className='bg-pink-600 px-5 py-2 text-white rounded-md'>Register</button></div>

                                        </div>
                                        {/* register for competition  */}
                                        <div className={`${toggleValue === 2 ? 'inline-block' : 'hidden'} mt-8`}>
                                             <h2 className="text-lg font-semibold text-gray-700">Registration Form of Competition(BrainMegnato)</h2>

                                             <form onSubmit={handleSubmit(handleRegisterForm)}>
                                                  <div className="grid grid-cols-1 gap-6 my-6 sm:grid-cols-2">
                                                       <div>
                                                            <label className="text-gray-700 " for="username">Name</label>
                                                            <input {...register('name', { required: "This field is required." })} id="username" type="text" className="block w-full px-4 py-[10px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                                            {errors.name && <p className='text-sm text-red-600 mt-1 flex items-center gap-1'><MdReportGmailerrorred />{errors.name?.message}</p>}
                                                       </div>

                                                       <div>
                                                            <label className="text-gray-700 " for="username">Department</label>
                                                            <input {...register('department', { required: "This field is required." })} id="username" type="text" className="block w-full px-4 py-[10px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                                            {errors.department && <p className='text-sm text-red-600 mt-1 flex items-center gap-1'><MdReportGmailerrorred />{errors.department?.message}</p>}
                                                       </div>

                                                       <div>
                                                            <label className="text-gray-700" for="ID">ID</label>
                                                            <input {...register('id', { required: "This field is required." })} id="id" type="text" className="block w-full px-4 py-[10px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                                            {errors.id && <p className='text-sm text-red-600 mt-1 flex items-center gap-1'><MdReportGmailerrorred />{errors.id?.message}</p>}
                                                       </div>

                                                       <div>
                                                            <label className="text-gray-700 " for="email">Email Address</label>
                                                            <input {...register('email', { required: "This field is required." })} id="email" type="email" className="block w-full px-4 py-[10px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                                            {errors.email && <p className='text-sm text-red-600 mt-1 flex items-center gap-1'><MdReportGmailerrorred />{errors.email?.message}</p>}
                                                       </div>

                                                       <div>
                                                            <label className="text-gray-700 " for="passwordConfirmation">Semester</label>
                                                            <input {...register('semester')} id="semester" type="text" className="block w-full px-4 py-[10px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                                       </div>

                                                       <div>
                                                            <label className="text-gray-700 " for="phoneNumber">Phone Number(Whatsapp)</label>
                                                            <input {...register('phone', { required: "This field is required." })} id="phoneNumber" type="number" className="block w-full px-4 py-[10px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                                            {errors.phone && <p className='text-sm text-red-600 mt-1 flex items-center gap-1'><MdReportGmailerrorred />{errors.phone?.message}</p>}
                                                       </div>

                                                       <div>
                                                            <label for="image" className="text-gray-700 ">Image</label>
                                                            <input {...register('image', { required: "This field is required." })} type="file" className="block w-full px-3 py-[10px] mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full placeholder-gray-400/70  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 " />
                                                            {errors.image && <p className='text-sm text-red-600 mt-1 flex items-center gap-1'><MdReportGmailerrorred />{errors.image?.message}</p>}
                                                       </div> <br className='hidden sm:inline-block' />

                                                       <div>
                                                            <p className='font-medium'>Use <span className='text-pink-600'>send money</span> option by Bkash/Nagad and send 300 taka to <span className='text-pink-600'>01757210124</span>. <span className='text-sm font-normal'>(please use your id as reference)</span></p>

                                                            <div className='mt-5'>
                                                                 <label className='flex items-center'>
                                                                      <input
                                                                           className='radio radio-secondary mr-2'
                                                                           type="radio"
                                                                           value="500"
                                                                           checked={selectedValue === '500'}
                                                                           onChange={handleOptionChange}
                                                                      />
                                                                      <span className='text-sm'>500 (Team (max 2 person per team)) </span>
                                                                 </label>

                                                                 <label className='flex items-center mt-3'>
                                                                      <input
                                                                           className='radio radio-secondary mr-2'
                                                                           type="radio"
                                                                           value="300"
                                                                           checked={selectedValue === '300'}
                                                                           onChange={handleOptionChange}
                                                                      />
                                                                      <span className='text-sm'>300 (01 person)</span>
                                                                 </label>

                                                            </div>

                                                       </div>

                                                       <div>
                                                            <label className="text-gray-700 " for="transactionID">Transaction ID (if you pay directly, write cash)</label>
                                                            <input {...register('transactionID', { required: "This field is required." })} id="transaction" type="text" className="block w-full px-4 py-[10px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                                            {errors.transactionID && <p className='text-sm text-red-600 mt-1 flex items-center gap-1'><MdReportGmailerrorred />{errors.transactionID?.message}</p>}
                                                       </div>
                                                  </div>

                                                  <div className="form-control mt-10">
                                                       <label className="flex items-center cursor-pointer">
                                                            <input onChange={(e) => handleCheckbox(e.target.checked)} type="checkbox" className="checkbox checkbox-primary" />
                                                            <span className="ml-3 label-text">Accept our terms and condition!</span>
                                                       </label>
                                                  </div>


                                                  <div className="flex justify-end mt-6">
                                                       <button disabled={!checkbox} className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-pink-600 disabled:bg-pink-300 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-500">Register</button>
                                                  </div>
                                             </form>
                                        </div>
                                        {/* Quesiton for competition  */}
                                        <div className={`${toggleValue === 3 ? 'inline-block' : 'hidden'} mt-8`}>
                                             <div>
                                                  <p className='text-lg font-bold mb-4'>Instructions: Prepare a presentation on the below case study and try to answer all the questions. We highly encourage you to bring your laptop/device in order to show your presentation.</p>
                                                  <p className='mb-3'>Mini-Case Study: Project Management at Global Green Books Publishing</p>
                                                  <p>Global Green Books Publishing was started two years ago by two friends, Jim King and Brad Mount, who met in college while studying in Philadelphia, USA. In the new business Jim focused on editing, sales and marketing while Brad Mount did the electronic assembly and publishing of books for Global Green Books. Their business was successful and profitable in the first two years, largely due to contracts from two big businesses.</p>
                                                  <p>In their third year they got very busy thanks to their third major customer, a local college that needed customized eBooks. They hired several part time employees to help them with their publishing business.</p>
                                                  <p>But by the end of third year of operation, Global Green Books started experiencing critical problems. They were:</p>
                                                  <ul className='list-disc ml-5 mb-2'>
                                                       <li>unable to leverage all the new employees effectively</li>
                                                       <li>unable to deliver eBooks to their customers on schedule</li>
                                                       <li>unable to provide quality texts—time and money was being spent fixing defects in their products</li>
                                                       <li>unable to control costs—their business was not profitable in the third year.</li>
                                                  </ul>
                                                  <p>Global Green Books saw a significant rise in issues, a lot of unpleasant “surprises” were cropping up; business was down as new resources were hired, also some of the projects were poorly estimated. The local university was unhappy as their eBook products reached campus late for use by professors and student. In some cases, the books were a week or two late. Since the courses must start on schedule and students need their books at the beginning of their courses, the new lucrative college customer was unhappy.</p>
                                                  <p>One of the new part-time employees hired by Jim and Brad, Samantha, had taken a project management course at college. Samantha was excited about the discipline of project management and had intentionally selected a job with Global Green Books Publishing as she saw an opportunity to polish her project management skills.</p>
                                                  <p>One fine day, Jim invited Samantha, for a lunch meeting. He was aware that Samantha was familiar with project management, and wanted to hear what she had to say about the problems he and Brad were facing. Over lunch he questioned why their small business which had operated and implemented projects so successfully over the first two years was being challenged significantly now. He specifically listed the problems they were facing and asked for input to solve them.</p>
                                                  <p>Samantha asked for more time to research all the issues but noted that Global Green Books, while being innovative, completed projects without a roadmap or a project plan and lacked a disciplined approach to project management. She noted that Jim and Brad did not use any project software for scheduling and they did not use tools or techniques to estimate, budget or to communicate with stakeholders. Finally, they had no processes in place to manage project risks and quality.</p>
                                                  <p className='mb-2'>Impressed with this and other conversations, Jim King asked Samantha if she would consider joining them as a project associate or project manager on a full-time basis to help them introduce project management practices and help them tide over their current crisis.</p>
                                                  <p>Samantha accepted the offer! She has several key skills—she is an excellent communicator with very good interpersonal skills and detail-oriented. Within the first three months in her new role as PM, she introduced formal project management processes, created a PM manual and trained the employees to get the work done well.</p>
                                                  <p>Within nine months Samantha had fully turned things around. Due to proactive risk analysis and risk response planning, surprises and issues reduced. Communication with stakeholders was enhanced.</p>
                                                  <p className='mb-4'>Brad and Jim noted that the company was delivering projects on schedule, the quality processes worked—and customers were happy with the products!</p>
                                                  <p className='font-bold'>Comment on the following aspects of the case study:</p>
                                                  <p>(a) Why did Global Green Books Publishing struggle?</p>
                                                  <p>(b) What were the specific PM solutions that were introduced by Samantha that worked?</p>
                                                  <p>(c) What kind of suggestions would you give to Brad and Jim if you were the PM?</p>
                                                  <p>(d)	Are you aware of other similar start-up businesses that struggle in a similar manner? How did they overcome the challenges?</p>
                                                  <p>(e) Global Green Books Publishing is a technology intensive business, but Samantha is not technically knowledgeable, will she continue to be a successful project manager?</p>
                                             </div>
                                        </div>
                                   </section>

                              </div>
                    }
               </div>
          </div>
     );
};

export default Competition;